const path = require('node:path');

// Map the library alias onto its sources so tests run against
// projects/noto-emoji-icons-lib directly, without requiring `npm run build:lib`
// first and without Jest's haste map colliding on the built dist package.
module.exports = {
  // The generated icon modules are large; a worker pool sized to all CPUs
  // re-parses them per worker and exhausts memory, so cap the pool.
  maxWorkers: 2,
  // Instrument only this project's sources. The default instruments every
  // transformed file, including the ~3.4k generated icon modules the app
  // components import, which is slow and would pollute the report.
  collectCoverageFrom: [
    '<rootDir>/projects/example-app/src/**/*.ts',
    '!<rootDir>/projects/example-app/src/**/*.spec.ts',
    '!<rootDir>/projects/example-app/src/main.ts',
    '!<rootDir>/projects/example-app/src/environments/**',
  ],
  moduleNameMapper: {
    '^@triangular/noto-emoji-icons$': path.join(
      __dirname,
      '../noto-emoji-icons-lib/src/public_api.ts'
    ),
    '^@triangular/noto-emoji-icons/(.*)$': path.join(
      __dirname,
      '../noto-emoji-icons-lib/src',
      '$1'
    ),
  },
};
