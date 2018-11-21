# Bug Description

Running yarn in a child process through yarn does not inherit NPM config from the parent.

yarn version: 1.10.1

# To recreate

- run `npm config set registry some-private-registry`
- run `node index.js`, note that the npm config is there
- run `yarn start`, note that the npm config isn't there