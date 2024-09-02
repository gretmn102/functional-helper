import UnionCase from "./union";

export type Deferred<T> =
  | UnionCase<"HasNotStartedYet">
  | UnionCase<"InProgress">
  | UnionCase<"Resolved", T>

export namespace Deferred {
  export function hasNotStartedYet<T>(): Deferred<T> {
    return UnionCase.mkEmptyUnionCase("HasNotStartedYet")
  }

  export function inProgress<T>(): Deferred<T> {
    return UnionCase.mkEmptyUnionCase("InProgress")
  }

  export function resolved<T>(value: T): Deferred<T> {
    return UnionCase.mkUnionCase("Resolved", value)
  }

  export function reduce<T, U>(
    deferred: Deferred<T>,
    hasNotStartedYet: () => U,
    inProgress: () => U,
    resolved: (value: T) => U,
  ) {
    switch (deferred.case) {
      case "HasNotStartedYet":
        return hasNotStartedYet()

      case "InProgress":
        return inProgress()

      case "Resolved":
        return resolved(deferred.fields)
    }
  }
}

export default Deferred
