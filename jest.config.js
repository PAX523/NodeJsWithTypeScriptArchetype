/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    clearMocks: true,

    collectCoverage: true,
    coverageDirectory: 'coverage',

    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],

    coverageProvider: 'v8',

    coverageReporters: [
        'json',
        'text',
        'lcov',
        'clover',
    ],
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx',
    ],
    preset: 'ts-jest',
    roots: [
        './src',
        './tests'
    ],
    testEnvironment: 'node',
    testMatch: ["**/tests/**/*.(spec|test).(js|ts)"],
};
