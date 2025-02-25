/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  passWithNoTests: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper:{
    "\\.(css|less|scss|sass|svg)$": "identity-obj-proxy"
  },
  // transformIgnorePatterns: [
  //   'node_modules/(?!(bem)/)',
  // ],
  testPathIgnorePatterns: [
    "/build/",
    "/dist/"
  ],
  setupFilesAfterEnv: ['./src/test/setupTests.ts'],
};