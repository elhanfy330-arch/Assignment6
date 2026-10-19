import { db } from "../../database/connection.js"
import { booksModel, logsModel } from "../../database/models/index.js"


export let createBooksCollection = async () => {
    await db.createCollection("books", {
        validator: { title: { $type: "string", $ne: "" } }
    })
    return { ok: 1 }
}


export let createTitleIndex = async () => {
    let data = await booksModel.createIndex({ title: 1 })
    return data;
}


export let insertDoc = async(data)=>{
    let result = await booksModel.insertOne(data)
    return result;
}

export let insertMany = async (data)=>{
    let result = await booksModel.insertMany(data)
    return result;
}

export let updateFuture = async ({title})=>{
    let result = await booksModel.updateOne({title : `${title}`} , { $set : {year : 2022} } )
    return result;
}

export let findByTitle = async ({title})=>{
    let result = await booksModel.find({title : title}).toArray()
    return result;
}

export let getBetween = async ({from,to})=>{
    let result = await booksModel.find({year : {$gte : Number(from) , $lte : Number(to)}}).toArray()
    return result;
}

export let genreIncludes = async ({genre})=>{
    let result = await booksModel.find({genres : genre}).toArray()
    return result;
}

export let getSkipAndlimt = async ()=>{
    let result = await booksModel.find().sort({year : -1}).skip(2).limit(3).toArray()
    return result;
}

export let getIntegerYear = async ()=>{
    let result = await booksModel.find({year : {$type : "int"}}).toArray()
    return result;
}

export let genreExclude = async ({genre})=>{
    let splitGenre = genre.split(",")
    console.log(splitGenre)
    let result = await booksModel.find({genres : {$nin : splitGenre}}).toArray()
    return result;
}

export let deleteBeforeYear = async ({year})=>{
    let result = await booksModel.deleteMany({year : {$lt : Number(year)}})
    return result;
}

export let aggregate1 = async ()=>{
    let result = await booksModel.aggregate([{$match : {year : {$gt : 2000}}} , {$sort : {year : -1}}]).toArray()
    return result;
}

export let aggregate2 = async ()=>{
    let result = await booksModel.aggregate([
        {$match : {year : {$gt : 2000}}}
        ,{$project : { title: 1, author: 1, year: 1, _id: 0 }} 
    ]).toArray()
    return result;
}

export let aggregate3 = async ()=>{
    let result = await booksModel.aggregate([
        { $unwind : "$genres" }
    ]).toArray()
    return result;
}

export let aggregate4 = async (req, res, next) => {
    const result = await logsModel.aggregate([
        { $addFields: { bookId: { $toObjectId: "$bookId" } } },
        {
            $lookup: {
                from: "books",
                localField: "bookId",
                foreignField: "_id",
                as: "book_details"
            }
        },
        {
            $project: {
                _id: 0,
                action: 1,
                "book_details.title": 1,
                "book_details.author": 1,
                "book_details.year": 1
            }
        }
        ]).toArray()
        return result
    }
