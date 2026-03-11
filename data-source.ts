import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";
import env from "./utils/env-util";

export const AppDataSource = new DataSource({
    type:"postgres",
    host:env("PG_HOST","localhost"),
    port:env("PG_PORT","5432")as any,
    username:env("PG_USERNAME","username"),
    password:env("PG_PASSWORD","password"),
    database:env("PG_DATABASE","my-db"),
    entities:["entity/*.ts"],
    migrations:["migration/*.ts"]
});