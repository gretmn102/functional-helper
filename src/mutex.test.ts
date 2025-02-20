import { describe, expect, test } from "@jest/globals"

import { Mutex, PromiseExt } from "./index"

function createCounter() {
  let count = 0
  return {
    inc: () => {
      return new Promise(resolve => {
        count++
        resolve(undefined)
      })
    },
    deferredInc: async () => {
      const currentCount = count
      await PromiseExt.timeout(1234)
      count = currentCount + 1
    },
    getCount: () => count
  }
}

describe("mutex", () => {
  test("problem with race condition", async () => {
    const counter = createCounter()
    await Promise.all([
      counter.deferredInc(),
      counter.inc(),
    ])
    expect(counter.getCount()).toStrictEqual(1) // but must be 2
  })
  test("resolve problem with mutex", async () => {
    const lock = Mutex.create()
    const counter = createCounter()
    const deferredInc = async () => {
      await lock.acquire()
      await counter.deferredInc()
      lock.release()
    }
    const inc = async () => {
      await lock.acquire()
      await counter.inc()
      lock.release()
    }
    await Promise.all([
      inc(),
      deferredInc(),
      inc(),
      inc(),
      deferredInc(),
      inc(),
    ])
    expect(counter.getCount()).toStrictEqual(6)
  })
  test("resolve problem with mutex monitor", async () => {
    const lock = Mutex.create()
    const counter = createCounter()
    const deferredInc = async () => {
      await lock.monitor(async () => {
        await counter.deferredInc()
      })
    }
    const inc = async () => {
      await lock.monitor(async () => {
        await counter.inc()
      })
    }
    await Promise.all([
      inc(),
      deferredInc(),
      inc(),
      inc(),
      deferredInc(),
      inc(),
    ])
    expect(counter.getCount()).toStrictEqual(6)
  })
})
