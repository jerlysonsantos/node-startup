require('dotenv').config();

export const pgConfig = {
  user: process.env.POSTGRES_DATABASE_USERNAME,
  password: process.env.POSTGRES_DATABASE_PASSWORD,
  host: process.env.POSTGRES_DATABASE_HOST,
  port: Number(process.env.POSTGRES_DATABASE_PORT || 5432),
  database: process.env.POSTGRES_DATABASE_NAME,
};
