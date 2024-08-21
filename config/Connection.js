import mongoose from "mongoose";

import { dbURL } from "./config.js";
import chalk from "chalk";
const connect = mongoose
  .connect(dbURL)
  .then(() => console.log(chalk.yellow("DB Connected successfully")))
  .catch((err) =>
    console.error(chalk.red("DB connection error: ", err.message))
  );

export default connect;
