export type Pair<T, U> = [T, U]
export module Pair {
  export function mk<T, U>(x: T, y: U): Pair<T, U> {
    return [x, y]
  }

  export function reduce<T, U, V>(
    pair: Pair<T, U>,
    reduce: (x: T, y: U) => V,
  ): V {
    const [x, y] = pair
    return reduce(x, y)
  }

  export function fst<T, U>(pair: Pair<T, U>): T {
    return pair[0]
  }

  export function snd<T, U>(pair: Pair<T, U>): U {
    return pair[1]
  }
}

export default Pair
