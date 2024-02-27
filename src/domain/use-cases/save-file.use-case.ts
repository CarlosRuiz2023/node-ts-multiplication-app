import fs from "fs";
export interface Options {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export interface SaveFileUseCase {}

export class SaveFile implements SaveFileUseCase {
  constructor(/** repository: StorageRepository */) {}
  execute({
    fileContent,
    destination = "outputs",
    fileName = "table",
  }: Options): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      //grabar en el archivo de salida
      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
      //console.log("File created!");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
