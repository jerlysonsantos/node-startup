module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    '^injection-dependency/(.*)$': 'src/lib/dependency-injection',
    '^jest-providers/(.*)$': 'src/lib/jest-providers/jest-providers.lib.ts',
    '^repository/(.*)$': 'src/lib/repository',
    '^routers/(.*)$': 'src/lib/routers',
  },
};
