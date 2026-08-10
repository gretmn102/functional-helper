export type Option<T> = T | undefined
export module Option {
  export function mkSome<T>(v: T): Option<T> {
    return v
  }

  export function mkNone<T>(): Option<T> {
    return undefined
  }

  export function reduce<T, U>(
    option: Option<T>,
    someReduction: (v: T) => U,
    noneReduction: () => U,
  ): U {
    if (option === undefined) {
      return noneReduction()
    } else {
      return someReduction(option)
    }
  }

  export function isSome<T>(option: Option<T>): boolean {
    return option !== undefined
  }

  export function get<T>(opt: Option<T>): T {
    if (opt === undefined) {
      throw new Error("Argument is undefined")
    }
    return opt
  }
}

export default Option
