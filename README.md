# env-check

Fail-fast with a helpful error message when required environment variables haven't been defined. For example, if you run your browser tests on SauceLabs with a command like this:

```json
"test:saucelabs": "karma start karma-saucelabs.conf.js"
```

you could additionally ensure you fail-fast if the requisite `SAUCE_ACCESS_KEY` isn't defined by modifying the command to this:

```json
"test:saucelabs": "envcheck SAUCE_ACCESS_KEY && karma start karma-saucelabs.conf.js"
```

Here, a non-zero exit code and the following message would be shown if `SAUCE_ACCESS_KEY` isn't defined:

```
Error: Missing environment variable SAUCE_ACCESS_KEY.
```

You can provide as many environment variables to check as you like.
