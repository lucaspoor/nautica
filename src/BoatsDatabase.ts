import data from "./pages/data/boats.json";

export class BoatsDatabase {
  /**
   *
   * @param bote Retorna el bote anterior y siguiente del bote entregado
   * @returns
   */
  static findPrevNext(bote: Bote): [Bote | undefined, Bote | undefined] {
    let prev = undefined;
    let next = undefined;

    data.forEach((iter, i) => {
      if (iter.id === bote.id) {
        prev = i - 1;
        next = i + 1;
      }
    });

    let botePrev: Bote = prev >= 0 ? data[prev] : undefined;
    let boteNext: Bote = next <= data.length - 1 ? data[next] : undefined;

    return [botePrev, boteNext];
  }
}
