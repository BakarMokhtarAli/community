import app from "./app.js";
import connect from "../config/Connection.js";
import chalk from "chalk";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(chalk.blue(`Server is running on port ${PORT}`));
});
