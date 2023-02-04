module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@test-utils': '<rootDir>/test-utils',
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
