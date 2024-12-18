import express from "express";
import { RutasNotas } from "./views/notas/rutas.js";
import { RutaEstudiante } from "./views/estudiantes/estudiantes.js";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(RutasNotas);
app.use(RutaEstudiante);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
