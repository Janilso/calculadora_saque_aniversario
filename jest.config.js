module.exports = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            lines: 90,
            branches: 90,
            functions: 90,
            statements: -10,
        },
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
        '^.+\\.(svg|png|jpg|gif)$': '<rootDir>/src/configs/svgTransform.ts',
    },
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/src/configs/svgrMock.ts',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['<rootDir>/src(/__tests__/**/**/*.test.(js|jsx|ts|tsx))'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
    collectCoverageFrom: [
        '<rootDir>/src/utils/**/*.ts',
        '<rootDir>/src/pages/**/*.ts',
        '<rootDir>/src/pages/**/*.tsx',
        '<rootDir>/src/components/**/*.ts',
        '<rootDir>/src/components/**/*.tsx',
    ],
    setupFilesAfterEnv: ['<rootDir>/src/configs/setupTests.ts'],
    testEnvironment: 'jsdom',
};
