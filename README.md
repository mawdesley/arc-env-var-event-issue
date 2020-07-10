### What am I?

Small example to show an issue with sandbox mode in @architect 6.5.3

Env vars should be available in all lambdas, but they're not being injected into events.

In this example I've set `FOO=BAR` in `.arc-env`. Hitting the `http/get-index` lambda publishes a `test` event, which should `console.log` "FOO IS BAR", however it actually logs "FOO IS undefined".

```
> CI=true jest

  console.log
    ✓ Sandbox Found Architect project manifest, starting up

      at Object.done (node_modules/@architect/utils/updater/index.js:81:25)

FOO IS undefined

PASS ./test.spec.js
  env var availability
    ✓ should print 'FOO IS BAR' in the terminal (ignore test result, look up^^^) (2357 ms)
```

### How do I run?

`npm i && arc hydrate && npm t`

Jest requires node v12 or above.