import fs from "fs";
import { yarg } from "./plugins/yargs.plugin";
const { b: base, l: limit, s: showTable } = yarg;
let outputMessage = "";
const headerMessage = `
===================================
Tabla del ${base}
===================================
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}
outputMessage = headerMessage + outputMessage;
if (showTable) {
  console.log(outputMessage);
}
//path: outputs/tabla-5.txt
const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });

//grabar en el archivo de salida
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created!");
