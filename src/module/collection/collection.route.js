import { Router } from "express";
import { booksCollectionRouter } from "../books/books.controller.js"
import { logsCollectionRouter } from "../logs/log.controller.js"
import { authorCollectionRouter } from "../authors/author.controller.js"

export let collectionRouter = Router()

collectionRouter.use("/books" , booksCollectionRouter)

collectionRouter.use("/logs" , logsCollectionRouter)

collectionRouter.use("/authors" , authorCollectionRouter)