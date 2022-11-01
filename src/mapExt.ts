import Pair from "./pair"

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

  type MapSerializeType<K, V> = {
    dataType: "Map"
    value: Pair<K, V>[]
  }

  /**
   * usage: `JSON.stringify(objWithMap, replacer)`
   */
  export function replacer<K, V>(_key: K, value: V): MapSerializeType<K, V> | V {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()), // or with spread: value: [...value]
      }
    }

    return value
  }

  /**
   * usage: `JSON.parse(json, reviver)`
   */
  export function reviver<K, V>(_key: K, value: MapSerializeType<K, V>) {
    if (typeof value === "object" && value !== null) {
      if (value.dataType === "Map") {
        return new Map(value.value)
      }
    }

    return value
  }
}

export default MapExt
