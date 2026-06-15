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
export interface UnionCase<Name, Fields = undefined> {
  case: Name
  fields: Fields
}

export module UnionCase {
  export function create<Name>(name: Name): UnionCase<Name>
  export function create<Name, Fields>(name: Name, fields: Fields): UnionCase<Name, Fields>
  export function create<Name, Fields>(name: Name, fields?: Fields): UnionCase<Name, Fields> {
    if (fields) {
      return {
        case: name,
        fields: fields,
      }
    }
    return {
      case: name,
      fields: undefined as unknown as Fields,
    }
  }
}

export default UnionCase
