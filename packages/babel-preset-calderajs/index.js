module.exports = function(api,opts) {
    return {
        presets: [
            require("@babel/preset-env"),
            require("@babel/preset-react")
        ],
        plugins: [
            require("@babel/plugin-syntax-dynamic-import"),
            require("@babel/plugin-syntax-import-meta"),
            require("@babel/plugin-proposal-class-properties"),
            require("@babel/plugin-proposal-json-strings"),
            [
                require("@babel/plugin-proposal-decorators"),
                {
                    "legacy": true
                }
            ],
            require("@babel/plugin-proposal-function-sent"),
            require("@babel/plugin-proposal-export-namespace-from"),
            require("@babel/plugin-proposal-throw-expressions"),
            require("@babel/plugin-proposal-export-default-from"),
            require("@babel/plugin-proposal-logical-assignment-operators"),
            require("@babel/plugin-proposal-optional-chaining"),
            [
                "@babel/plugin-proposal-pipeline-operator",
                {
                    "proposal": "minimal"
                }
            ],
            require("@babel/plugin-proposal-nullish-coalescing-operator"),
            require("@babel/plugin-proposal-do-expressions"),
            require("@babel/plugin-transform-regenerator"),
        ]
    };
};

