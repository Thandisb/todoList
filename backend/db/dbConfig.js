const pgp= require("pg-promise")();
require("dotenv").config()

const{PG_USER, PG_HOST, PG_PORT, PG_DATABASE}=process.env

const cn = {
    user: PG_USER,
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DATABASE
}

console.log(cn)
const db = pgp(cn)

module.exports= db

