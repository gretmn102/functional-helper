/**
 * Used `interface` because this problem:
 *
 * [ Type alias circularly references itself #14174 ](https://github.com/microsoft/TypeScript/issues/14174)
 *
 * ```ts
 * export type TUnionCase<Name, Fields> = {
 *   case: Name
 *   fields: Fields
 * }
 *
 * export interface IUnionCase<Name, Fields> {
 *   case: Name
 *   fields: Fields
 * }
 *
 * type List<T> =
 *   | TUnionCase<"Cons", List<T>> // Error: Type alias 'List' circularly references itself. ts(2456)
 *   // | IUnionCase<"Cons", List<T>> // Ok
 * ```
*/
export interface UnionCase<Name, Fields> {
  case: Name
  fields: Fields
}

export type EmptyUnionCase<Name> = UnionCase<Name, undefined>

export module UnionCase {
  export function mkUnionCase<Name, Fields>(name: Name, fields: Fields): UnionCase<Name, Fields> {
    return {
      case: name,
      fields: fields
    }
  }

  export function mkEmptyUnionCase<Name>(name: Name): EmptyUnionCase<Name> {
    return {
      case: name,
      fields: undefined
    }
  }
}

export default UnionCase
