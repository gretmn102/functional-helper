import PromiseExt from "./promiseExt"

export type Mutex = {
  acquire: () => Promise<void>
  release: () => void
  monitor: <Result>(exec: () => Promise<Result>) => Promise<Result>
}

export function create(): Mutex {
  let locked = false
  async function wait() {
    if (locked) {
      await PromiseExt.timeout(0)
      await wait()
    }
  }
  async function acquire() {
    if (locked) {
      await wait()
    }
    locked = true
  }
  function release() {
    locked = false
  }
  return {
    acquire: acquire,
    release: release,
    monitor: async <Result>(exec: () => Promise<Result>) => {
      await acquire()
      const result = await exec()
      release()
      return result
    },
  }
}

export default {
  create,
}
