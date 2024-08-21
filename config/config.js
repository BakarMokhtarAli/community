import dotenv from "dotenv";
dotenv.config();

export const dbURL = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
