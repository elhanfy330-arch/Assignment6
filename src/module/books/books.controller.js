import { Router } from "express";
import { successResponse } from "../../common/index.js";
import * as service from "./books.service.js"

export let booksRouter = Router()

export let booksCollectionRouter = Router()

// 1 -- 
booksCollectionRouter.post("/" , async (req,res)=>{
    let data = await service.createBooksCollection()
    successResponse({res , data , message : "Books Collection Created" , status : 201})
})

// 4 -- 
booksCollectionRouter.post("/index" , async (req,res)=>{
    let data = await service.createTitleIndex()
    successResponse({res , data , message : "Index Created" , status : 201})
})


// 5 -- 
booksRouter.post("/" , async (req,res)=>{
    let data = await service.insertDoc(req.body)
    successResponse({res,data,message:"Document Inserted Successfully" , status : 201})
})

// 6 --
booksRouter.post("/batch" , async (req,res)=>{
    let data = await service.insertMany(req.body)
    successResponse({res,data,message:"Books Inserted Successfully" , status : 201})
})

// 8--
booksRouter.patch("/:title" , async(req,res)=>{
    let data = await service.updateFuture(req.params)
    successResponse({res,data,message:"Future Book Updated Successfully"})
})

// 9--
booksRouter.get("/title" ,async (req,res)=>{
    let [data] = await service.findByTitle(req.query)
    successResponse({res,data,message:"Found"})
})

// 10--
booksRouter.get("/year" , async (req,res)=>{
    let data = await service.getBetween(req.query)
    successResponse({res,data,message:"Found"})
})

// 11--
booksRouter.get("/genre" , async (req,res)=>{
    let data = await service.genreIncludes(req.query)
    successResponse({res,data,message:"Found"})
})

// 12--
booksRouter.get("/skip-limit" , async (req,res)=>{
    let data = await service.getSkipAndlimt()
    successResponse({res,data,message:"Found"})
})

// 13--
booksRouter.get("/year-integer" , async (req,res)=>{
    let data = await service.getIntegerYear() 
    successResponse({res,data,message:"Found"})
})

// 14--
booksRouter.get("/exclude-genres" , async (req,res)=>{
    // console.log("query",genres)
    let data = await service.genreExclude(req.query)
    successResponse({res,data,message:"Found"})
})

// 15--
booksRouter.delete("/before-year" , async (req,res)=>{
    let data = await service.deleteBeforeYear(req.query)
    successResponse({res,data,message:"Books Deleted"})
})

// 16--
booksRouter.get("/aggregate1" , async(req,res)=>{
    let data = await service.aggregate1()
    successResponse({res,data,message:"Result : "})
})

booksRouter.get("/aggregate2" , async(req,res)=>{
    let data = await service.aggregate2()
    successResponse({res,data,message:"Result : "})
})

booksRouter.get("/aggregate3" , async(req,res)=>{
    let data = await service.aggregate3()
    successResponse({res,data,message:"Result : "})
})

booksRouter.get("/aggregate4" , async(req,res)=>{
    let data = await service.aggregate4()
    successResponse({res,data,message:"Result : "})
})