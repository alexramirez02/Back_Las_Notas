import express from "express";

const RutasNotas = express.Router();

const notas = [
  {
    nombre: `David Aguirre`,
    nota1: `5`,
    nota2: `4`,
    nota3: `4.5`,
    nota4: `3`,
  },
  {
    nombre: `Juan José Lopera`,
    nota1: `2.5`,
    nota2: `5`,
    nota3: `5`,
    nota4: `4.8`,
  },
  {
    nombre: `Jeronimo Carmona`,
    nota1: `4`,
    nota2: `4`,
    nota3: `4.5`,
    nota4: `3`,
  },
  {
    nombre: `Andrea  Agudelo`,
    nota1: `5`,
    nota2: `5`,
    nota3: `5`,
    nota4: `5`,
  },
  {
    nombre: `Samuel Ramirez`,
    nota1: `4.8`,
    nota2: `4.5`,
    nota3: `5`,
    nota4: `4.2`,
  },
];

// RutasNotas.Router("/notas").get((req, res) => {
//   res.send("Ruta Notas");
// });
// RutasNotas.Router("/notas").post();
RutasNotas.get("/notas", (req, res) => {
  res.status(200).send(notas);
});

RutasNotas.post("/notas", (req, res) => {
  // Lógica para el método POST
});

export { RutasNotas };
