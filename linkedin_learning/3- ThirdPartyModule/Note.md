We installed `npm install lodash`.

Note that `node_modules` and `package-log.json` appeared after installing it.

```json
{
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    }
  }
}
```
Now we can require it from another file `demo.js`

Next, we installed `npm install -g nodemon` globally beacuse we need access to in regardless which project we are in. It will not be shown inside `node_modules` local directory.

It helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. We must run `nodemon demo.js` to use it. 

Output looks similar to this:

```yaml
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node demo.js`
```
