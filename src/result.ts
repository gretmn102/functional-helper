export type Result<Ok, Error> = ["Ok", Ok] | ["Error", Error]
export module Result {
  export function mkOk<Ok>(v: Ok): Result<Ok, never> {
    return ["Ok", v]
  }

  export function mkError<Error>(v: Error): Result<never, Error> {
    return ["Error", v]
  }

  export function reduce<Ok, Error, T>(
    res: Result<Ok,Error>,
    okReduction: (v: Ok) => T,
    errorReduction: (v: Error) => T
  ): T {
    switch (res[0]) {
      case "Ok":
        return okReduction(res[1])

      case "Error":
        return errorReduction(res[1])
    }
  }
}

export default Result
