import { describe, expect, test } from "@jest/globals"

import Option from "./option"

describe("Option", () => {
  test("Some(None) === None", () => {
    expect(Option.mkSome(Option.mkNone()))
      .toStrictEqual(Option.mkNone())
  })
  test("Some(Some(1)) === Some(1)", () => {
    expect(Option.mkSome(Option.mkSome(1)))
      .toStrictEqual(Option.mkSome(1))
  })
})

describe("Option.get", () => {
  test("get returns value for Some", () => {
    expect(Option.get(Option.mkSome(1))).toBe(1)
  })
  test("get throws for None", () => {
    expect(() => Option.get(Option.mkNone())).toThrow("Argument is undefined")
  })
})
