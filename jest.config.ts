import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleNameMapper: {
    '^#/(.*)/(.*)': '<rootDir>/src/$1/$2'
  },
  testEnvironment: 'jest-environment-jsdom'
}

export default createJestConfig(customJestConfig)
