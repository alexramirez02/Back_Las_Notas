import express from "express";

const RutaEstudiante = express.Router();

const alumno = [
  { id: `1123 `, nombre: `David`, apellido: `Aguirre` },
  { id: `11234 `, nombre: `Juan José`, apellido: `Lopera` },
  { id: `11235 `, nombre: `Jeronimo`, apellido: `Carmona` },
  { id: `112322 `, nombre: `Andrea `, apellido: `Agudelo` },
  { id: `11239999 `, nombre: `Samuel`, apellido: `Ramirez` },
];

// RutasNotas.Router("/notas").get((req, res) => {
//   res.send("Ruta Notas");
// });
// RutasNotas.Router("/notas").post();
RutaEstudiante.get("/estudiantes", (req, res) => {
  res.status(200).send(alumno);
});
export { RutaEstudiante };
