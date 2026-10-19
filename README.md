# hw6-node-app
Sample Node.js project for HW6 (Jenkins + GitHub public repo).

- `npm test`  - run unit tests (built-in node:test, no dependencies)
- `npm run build` - produce `dist/` (the build artifact)
- `npm start` - run the server on port 3000

Jenkins builds it via the `Jenkinsfile` and archives `hw6-node-app-<build>.tar.gz`.
