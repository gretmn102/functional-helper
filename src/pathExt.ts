export module PathExt {
  /** from `Path.GetInvalidFileNameChars()` in C#
   *
   * generate:
   * ```fsharp
   * System.IO.Path.GetInvalidFileNameChars()
   * |> Array.map (fun c ->
   *     match c with
   *     | '\\' -> "\\\\"
   *     | '"' -> "\\\""
   *     | c when '\000' <= c && c <= '\031' ->
   *         sprintf "\\u%04x" (int c)
   *     | c ->
   *         sprintf "%c" c
   *     |> sprintf "\"%s\""
   * )
   * |> Array.chunkBySize 6
   * |> Array.map (String.concat ", ")
   * |> String.concat ",\n"
   * ```
  */
  export const invalidFileNameChars = new Set([
    "\"", "<", ">", "|", "\u0000", "\u0001",
    "\u0002", "\u0003", "\u0004", "\u0005", "\u0006", "\u0007",
    "\u0008", "\u0009", "\u000a", "\u000b", "\u000c", "\u000d",
    "\u000e", "\u000f", "\u0010", "\u0011", "\u0012", "\u0013",
    "\u0014", "\u0015", "\u0016", "\u0017", "\u0018", "\u0019",
    "\u001a", "\u001b", "\u001c", "\u001d", "\u001e", "\u001f",
    ":", "*", "?", "\\", "/"
  ])

  export function escapeFileName(fileName: string): string {
    const xs = new Array<string>(fileName.length)

    let length = 0
    for (let index = 0; index < fileName.length; index++) {
      const char = fileName[index]
      if (!invalidFileNameChars.has(char)) {
        xs[length] = char
        length++
      }
    }
    xs.length = length
    return xs.join("")
  }
}

export default PathExt
