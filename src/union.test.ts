import { describe, expect, test } from "@jest/globals"

import { UnionCase } from "./union"

type Shape =
  | UnionCase<"Circle", { radius: number }>
  | UnionCase<"Dot">
  | UnionCase<"Rectangle", { a: number, b: number }>

namespace Shape {
  export function area(shape: Shape) : number | undefined {
    switch (shape.case) {
      case "Dot":
        return undefined
      case "Circle": {
        const r = shape.fields.radius
        return 2 * Math.PI * (r * r)
      }
      case "Rectangle":
        return shape.fields.a * shape.fields.b
    }
  }
}

describe("shape area", () => {
  const circle: Shape = UnionCase.mkUnionCase("Circle", { radius: 10 })
  const rectangle: Shape = UnionCase.mkUnionCase("Rectangle", { a: 5, b: 10 })
  const adot: Shape = UnionCase.mkEmptyUnionCase("Dot")
  const bdot: Shape = UnionCase.mkUnionCase("Dot", undefined)

  test("circle", () => {
    const act = Shape.area(circle)
    const exp = 628.3185307179587
    expect(act).toBeCloseTo(exp)
  })
  test("rectangle", () => {
    const act = Shape.area(rectangle)
    const exp = 50
    expect(act).toStrictEqual(exp)
  })
  test("adot", () => {
    const act = Shape.area(adot)
    const exp = undefined
    expect(act).toStrictEqual(exp)
  })
  test("bdot", () => {
    const act = Shape.area(bdot)
    const exp = undefined
    expect(act).toStrictEqual(exp)
  })
})
