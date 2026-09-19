# Environment Configuration

These are the environment values the app is supposed to use.

```text
APP_PORT=8080
API_URL=http://localhost:8080
```

Copy these values to a local `.env` file before running the app. Load that
file with Node's `--env-file` option:

```bash
node --env-file=.env src/app.js
```
