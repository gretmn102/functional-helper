import { describe, expect, test } from "@jest/globals"

import PathExt from "./pathExt"

describe("PathExt.", () => {
  test("empty", () => {
    const exp = ""
    const act = PathExt.escapeFileName("")

    expect(act).toStrictEqual(exp)
  })
  test("1abcdefgабвгд", () => {
    const exp = "1abcdefgабвгд"
    const act = PathExt.escapeFileName("1abcdefgабвгд")

    expect(act).toStrictEqual(exp)
  })
  test("1\\2/3|4*5:6*7", () => {
    const exp = "1234567"
    const act = PathExt.escapeFileName("1\\2/3|4*5:6*7")

    expect(act).toStrictEqual(exp)
  })
})
