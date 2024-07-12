import dotenv from "dotenv";
dotenv.config();

const port = parseInt(`${process.env.PORT}`);

import app from "./app";

app.listen(port, () => {
  console.log(`Server running on http://localhost${port}`);
});
