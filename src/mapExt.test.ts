import { describe, expect, test } from "@jest/globals"

import MapExt from "./mapExt"

describe("MapExt.toArray", () => {
  test("empty", () => {
    const exp: [unknown, unknown][] = []
    const act = MapExt.toArray(new Map(), (k, v) => [k, v])

    expect(act).toStrictEqual(exp)
  })
  test("2, 3, 42", () => {
    const exp: [number, string][] = [
      [2, "2"],
      [3, "3"],
      [42, "42"],
    ]

    const act = MapExt.toArray(MapExt.ofArray(exp), (k, v) => [k, v])

    expect(act).toStrictEqual(exp)
  })
})

describe("MapExt.replacer MapExt.reviver", () => {
  test("MapExt.toArray", () => {
    const exp = {
      items: {
        0: "abc",
        1: "def",
      },
      x: {
        y: {
          "0": "123",
          "1": "321",
        }
      }
    }

    const json = JSON.stringify(exp, MapExt.replacer)
    const act = JSON.parse(json, MapExt.reviver)
    expect(act).toStrictEqual(exp)
  })
})
