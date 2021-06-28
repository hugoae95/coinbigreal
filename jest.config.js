module.exports = {
    "setupFilesAfterEnv": ["<rootDir>/src/__test__/setupTest.ts"],
    "moduleNameMapper": {
      "\\.(styl|css|scss)$": "<rootDir>/src/__mocks__/StyleMock.js"
    },
  }