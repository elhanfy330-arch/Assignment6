import { Router } from "express";
import { successResponse } from "../../common/index.js";
import * as service from "./log.service.js"

export let logsRouter = Router()
export let logsCollectionRouter = Router()
//3 --
logsCollectionRouter.post("/capped" , async (req,res)=>{
    let data = await service.createLogsCapped()
    successResponse({res , data , message : "Logs Capped Collection Created" , status : 201})
})

//7 --
logsRouter.post("/" , async(req,res)=>{
    let data = await service.insertLog(req.body)
    successResponse({res , data , message : "Logs Inserted Successfully" , status : 201})
})

