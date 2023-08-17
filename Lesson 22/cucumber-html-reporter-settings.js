var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: '.tmp/json',
        output: 'tmp/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":""
        },
        failedSummaryReport: true,
    };

    reporter.generate(options);