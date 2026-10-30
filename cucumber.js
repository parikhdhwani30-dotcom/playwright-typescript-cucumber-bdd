module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ],
    parallel: 2,
    publishQuiet: true
  }
};
