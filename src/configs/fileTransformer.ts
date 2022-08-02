const path = require('path');

module.exports = {
    process(_: string, sourcePath: string) {
        return {
            code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
        };
    },
};
