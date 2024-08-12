import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3001;
console.log(port);

import app from "./app";

app.listen(port, () => {
  console.log(`Server running on http://localhost${port}`);
});
