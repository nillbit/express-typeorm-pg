
#EXPRESS-TYPEORM-POSTGRESS
this is a a guide of how to set up your express with postgress using typeorm.Usefull commands that you will require and how to set it up

## step 1
clone the repository
```
https://github.com/nillbit/express-typeorm-pg.git
```
## step 2
create a .env file and fill it with adding <b> your own credentials </b>

```
PG_HOST = "localhost",
PG_PORT:5432,
PG_USERNAME="username",
PG_PASSWORD="password",
PG_DATABASE="my-db",
```

## step 3 
Generating a migration- first you need to create an etity then run this 
```
npm run typeorm -- migration:generate ./migration/userMigration -d ./data-source.ts
```
## step 4
Running a migration - after generating a migration you can run it to create the tables in the database
```
npm run typeorm -- migration:run -d ./data-source.ts
```
reverting a migration
```
npm run typeorm -- migration:revert -d ./data-source.ts
```


>>> happy coding,nill-bit