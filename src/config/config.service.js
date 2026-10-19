import { resolve } from "path";
import { config } from "dotenv";

config({
    path : resolve(`.env.${process.env.NODE_ENV}`)
})

export let dbConfig = {
    _PORT : process.env.PORT,
    NAME : process.env.DB_NAME ?? process.env.Db_NAME ,
    URL : process.env.DB_URL
}