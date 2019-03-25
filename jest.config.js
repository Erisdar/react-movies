module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
        "^error(.*)$": "components/error$1",
        "^app(.*)$": "components/app$1",
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(test).js?(x)'],
    verbose: false
};