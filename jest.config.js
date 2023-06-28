module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.(html|svg)$",
    },
  },
};