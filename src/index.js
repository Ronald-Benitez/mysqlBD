import express from "express";
import cors from "cors";

import setupSwagger from "./swagger";
import api from "./routes/api";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", api);

setupSwagger(app);

const port = 4000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
