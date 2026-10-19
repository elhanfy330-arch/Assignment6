import { MongoClient } from "mongodb";
import { dbConfig } from "../config/config.service.js";

export let client = new MongoClient(dbConfig.URL)
let dbName = dbConfig.NAME
export let db = client.db(dbName)
export let PORT = dbConfig._PORT
export let connectDb = async ()=>{
    try{
        await client.connect()
        console.log("db Connected")
    }catch(err){
        console.log(err)
        console.log("db Connection Faild")
        process.exit(1)
    }
}
