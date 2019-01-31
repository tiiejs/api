## Tiiejs api
It is extension for supports ajax.

## Install

### Webpack

First we need to define alias for Webpack.

```js
// webpack.config.js

const path = require('path');

module.exports = (environment) => {
    return {
        // ...
        resolve : {
            alias : {
                // ...
                "Tiie/Api" : "tiiejs-api/src",
                "Tiie" : "tiiejs/src",
            }
        }
    }
};
```

Then plug extension and define component.

```js
import App from "Tiie/App";
import extensionApi from "Tiie/Api/extension"

// ...
let app = new App(jQuery("body"), {
    components : {
        components : {
            "@api.users" : (components) => {
                return components.get("@api").create("http://api.local/users");
            },
        },
    },
});

app.plugin(extensionApi);
app.run();
```

**The documentation is being created ...**
# api
