import { db } from "../../database/connection.js"
import { logsModel } from "../../database/models/logsModel.js"

export let createLogsCapped = async () => {
    await db.createCollection("logs", { capped: true, size: 1024 * 1024 })
    return { ok: 1 }
}

export let insertLog = async (data)=>{
    let result = await logsModel.insertOne(data)
    return result;
}