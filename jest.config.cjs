module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  moduleNameMapper: {
    '^@test-utils': '<rootDir>/test-utils',
    '\\.css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
