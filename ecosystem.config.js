module.exports = {
    apps: [{
        name: "test-nest-dev",
        script: "npm",
        args: "start",
        watcher: "true",
        error: './logs/error.log',
        output: './logs/output.log',
        env: {
            NODE_ENV: "development",
        }
    }, {
        name: "test-nest-sit",
        script: "dist/main.js",
        watcher: "true",
        env: {
            NODE_ENV: "sit"
        }
    }, {
        name: "test-nest-uat",
        script: "dist/main.js",
        watcher: "true",
        instances: "max",
        exec_mode: "cluster",
        error: './logs/error.log',
        output: './logs/output.log',
        env: {
            NODE_ENV: "uat"
        }
    }, {
        name: "test-nest-prod",
        script: "dist/main.js",
        watcher: "true",
        instances: "max",
        exec_mode: "cluster",
        env: {
            NODE_ENV: "prod"
        },
    }]
}