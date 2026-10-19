import express from "express"
import { connectDb , db , PORT} from "./database/connection.js"
import * as Router from "./module/index.js"
import { errorHandeller } from "./common/index.js";
const app = express();

app.use(express.json())

await connectDb()

// console.log(await db.collection("books").findOne())

app.use("/collection" , Router.collectionRouter)
app.use("/books" ,Router.booksRouter)
app.use("/logs" , Router.logsRouter)



app.use(errorHandeller)
app.listen(PORT, () => {
    console.log("Server is running on port ",PORT);
});
