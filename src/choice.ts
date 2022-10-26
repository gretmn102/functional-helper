export type Choice<T, U> =
  | ["Choice1Of2", T]
  | ["Choice2Of2", U]
export module Choice {
  export function mkChoice1Of2<T, U>(x: T): Choice<T, U> {
    return ["Choice1Of2", x]
  }

  export function mkChoice2Of2<T, U>(x: U): Choice<T, U> {
    return ["Choice2Of2", x]
  }

  export function reduce<T, U, V>(
    choice: Choice<T, U>,
    choice1Of2Reduce: (x: T) => V,
    choice2Of2Reduce: (x: U) => V,
  ): V {
    switch (choice[0]) {
      case "Choice1Of2":
        return choice1Of2Reduce(choice[1])
      case "Choice2Of2":
        return choice2Of2Reduce(choice[1])
    }
  }
}

export default Choice
