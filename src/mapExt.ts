export module MapExt {
  export function ofArray<K, V>(keyValues: [K, V][]): Map<K, V> {
    const res = new Map()
    for (const [k, v] of keyValues) {
      res.set(k, v)
    }
    return res
  }

  export function toArray<K, V, U>(map: Map<K, V>, fn: (key: K, value: V) => U): U[] {
    const xs = new Array<U>(map.size)
    let i = 0
    map.forEach((v, k) => {
      xs[i] = fn(k, v)
      i++
    })
    return xs
  }
}

export default MapExt
