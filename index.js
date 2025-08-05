import express from "express";
import swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";

const app = express();
const PORT = 3000;

const raw = await readFile("./apidoc.json", "utf-8");
const swaggerDocument = JSON.parse(raw);

// Serve Swagger UI files
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
