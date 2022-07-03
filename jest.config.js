module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  coverageReporters: ["text-summary"],
};
