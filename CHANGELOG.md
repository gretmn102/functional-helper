# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.7.0](https://github.com/gretmn102/functional-helper/compare/v0.6.2...v0.7.0) (2026-06-21)


### ⚠ BREAKING CHANGES

* **Result:** simplify type parameters in `mkOk` and `mkError` (#9)
* **union:** merge `mkUnionCase` and `mkEmptyUnionCase` to `create` via overload (#8)
* **mutex.monitor:** remove `Promise` from return (#7)

### Features

* **mutex.monitor:** remove `Promise` from return ([#7](https://github.com/gretmn102/functional-helper/issues/7)) ([d1e8d5f](https://github.com/gretmn102/functional-helper/commit/d1e8d5fc3549474316a93bd2ecf8b7765187559d))
* **Result:** simplify type parameters in `mkOk` and `mkError` ([#9](https://github.com/gretmn102/functional-helper/issues/9)) ([e2fad74](https://github.com/gretmn102/functional-helper/commit/e2fad74c8ce88d235073465c2a36487b513578b3))
* **union:** merge `mkUnionCase` and `mkEmptyUnionCase` to `create` via overload ([#8](https://github.com/gretmn102/functional-helper/issues/8)) ([bd21d46](https://github.com/gretmn102/functional-helper/commit/bd21d463024d288d9f8c2faf96c21f207fe4f1d4))

### [0.6.2](https://github.com/gretmn102/functional-helper/compare/v0.6.1...v0.6.2) (2025-02-20)


### Features

* add `Mutex` ([#1](https://github.com/gretmn102/functional-helper/issues/1)) ([fe3384f](https://github.com/gretmn102/functional-helper/commit/fe3384f15dedc10cadb329630bb3b29878d567e1))
* add `PromiseExt.timeout` ([ce46bf2](https://github.com/gretmn102/functional-helper/commit/ce46bf2ffe39fa3d24bb77c0671e0b77ab7f5c2b))

### [0.6.1](https://github.com/gretmn102/functional-helper/compare/v0.6.0...v0.6.1) (2024-09-02)


### Features

* add `Deferred` ([83c1b61](https://github.com/gretmn102/functional-helper/commit/83c1b61dababcdb85b58fe302bed9dee34cd5c6f))

## [0.6.0](https://github.com/gretmn102/functional-helper/compare/v0.5.0...v0.6.0) (2024-03-29)


### ⚠ BREAKING CHANGES

* **api:** use just `CaseUnion` instead of `EmptyCaseUnion`

* **api:** remove `EmptyCaseUnion` ([fa3f864](https://github.com/gretmn102/functional-helper/commit/fa3f864c44c78a8be756acd97bfe125f55adf1ef))
