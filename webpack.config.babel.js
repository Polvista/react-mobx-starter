switch (process.env.NODE_ENV) {
    case 'prod':
        module.exports = require('./webpack/prod');
        break;
    case 'dev':
    default:
        module.exports = require('./webpack/dev');
        break;
}