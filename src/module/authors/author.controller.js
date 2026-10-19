import { Router } from "express";
import { successResponse } from "../../common/index.js";
import { authorModel } from "../../database/models/index.js";

export let authorCollectionRouter = Router()

export let authorRouter = Router()

// 2 --
authorCollectionRouter.post("/" ,async (req,res)=>{
    let data = await authorModel.insertOne(req.body)
    successResponse({res , data , message : "Author Created", status : 201 })
})



