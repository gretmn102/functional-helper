import { describe, expect, test } from "@jest/globals"

import MapExt from "./mapExt"

describe("MapExt.toArray", () => {
  test("empty", () => {
    const exp: [unknown, unknown][] = []
    const act = MapExt.toArray(new Map(), (k, v) => [k, v])

    expect(act).toStrictEqual(exp)
  }),
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
