import botes from "./boats.json";

export class BoteDatabase {
  find(id: string) {
    const bote = botes.find((b) => b.id === id);

    return bote;
  }
}

export default BoteDatabase;
