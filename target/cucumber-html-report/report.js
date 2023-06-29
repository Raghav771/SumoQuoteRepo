$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/ui/careers.feature");
formatter.feature({
  "name": "Validate careers page and filtering",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "UI - Check Canada TradeRev careers page is displayed properly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@career"
    }
  ]
});
formatter.step({
  "name": "I launch TradeRev home page",
  "keyword": "Given "
});
formatter.step({
  "name": "Navigate to \u003csection\u003e page",
  "keyword": "And "
});
formatter.step({
  "name": "Validate the \u003csection\u003e page is displayed correctly",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \u003ccountry\u003e job opportunities",
  "keyword": "When "
});
formatter.step({
  "name": "Validate \u003ccountry\u003e job site is displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "section",
        "country"
      ]
    },
    {
      "cells": [
        "careers",
        "canadian"
      ]
    }
  ]
});
formatter.scenario({
  "name": "UI - Check Canada TradeRev careers page is displayed properly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@career"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /Users/raghav/Desktop/TradeRevPro-main/src/test/resources/drivers/chromedriver\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:137)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:132)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:147)\n\tat com.utilities.webDriver.SelectDriver.getChromeDriver(SelectDriver.java:37)\n\tat com.utilities.webDriver.SelectDriver.getDriver(SelectDriver.java:17)\n\tat com.utilities.webDriver.DriverFactory.initializeDriver(DriverFactory.java:16)\n\tat com.steps.ui.PicoHooks.before(PicoHooks.java:11)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\n",
  "status": "failed"
});
formatter.step({
  "name": "I launch TradeRev home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_launch_TradeRev_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Navigate to careers page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.navigate_to_careers_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the careers page is displayed correctly",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.validate_the_careers_page_is_displayed_correctly(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on canadian job opportunities",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.i_click_on_canadian_job_opportunities(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate canadian job site is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validate_canadian_job_site_is_displayed_correctly(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "UI - Check location filter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter1"
    }
  ]
});
formatter.step({
  "name": "I launch TradeRev job portal",
  "keyword": "Given "
});
formatter.step({
  "name": "I check the job portal is loaded",
  "keyword": "And "
});
formatter.step({
  "name": "I filter the search results by location \u003ccity\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Validate the listed job results should belong to \u003ccity\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I log the total number of jobs listed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "city"
      ]
    },
    {
      "cells": [
        "Toronto, Ontario, Canada"
      ]
    }
  ]
});
formatter.scenario({
  "name": "UI - Check location filter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@filter1"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /Users/raghav/Desktop/TradeRevPro-main/src/test/resources/drivers/chromedriver\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:137)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:132)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:147)\n\tat com.utilities.webDriver.SelectDriver.getChromeDriver(SelectDriver.java:37)\n\tat com.utilities.webDriver.SelectDriver.getDriver(SelectDriver.java:17)\n\tat com.utilities.webDriver.DriverFactory.initializeDriver(DriverFactory.java:16)\n\tat com.steps.ui.PicoHooks.before(PicoHooks.java:11)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\n",
  "status": "failed"
});
formatter.step({
  "name": "I launch TradeRev job portal",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_launch_TradeRev_job_portal()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check the job portal is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.iCheckTheJobPortalIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I filter the search results by location Toronto, Ontario, Canada",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.iFilterTheSearchResultsByCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the listed job results should belong to Toronto, Ontario, Canada",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validateTheListedJobResultsShouldBelongToCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I log the total number of jobs listed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.iLogTheTotalNumberOfJobsListed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "UI - Check location and team filters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter2"
    }
  ]
});
formatter.step({
  "name": "I launch TradeRev job portal",
  "keyword": "Given "
});
formatter.step({
  "name": "I check the job portal is loaded",
  "keyword": "And "
});
formatter.step({
  "name": "I filter the search results by \u003ccity\u003e and \u003cteam\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Validate the listed jobs belong to \u003ccity\u003e and \u003cteam\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I log the total number of jobs listed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "city",
        "team"
      ]
    },
    {
      "cells": [
        "Toronto, Ontario, Canada",
        "Engineering"
      ]
    }
  ]
});
formatter.scenario({
  "name": "UI - Check location and team filters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@filter2"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /Users/raghav/Desktop/TradeRevPro-main/src/test/resources/drivers/chromedriver\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:137)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:132)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:147)\n\tat com.utilities.webDriver.SelectDriver.getChromeDriver(SelectDriver.java:37)\n\tat com.utilities.webDriver.SelectDriver.getDriver(SelectDriver.java:17)\n\tat com.utilities.webDriver.DriverFactory.initializeDriver(DriverFactory.java:16)\n\tat com.steps.ui.PicoHooks.before(PicoHooks.java:11)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\n",
  "status": "failed"
});
formatter.step({
  "name": "I launch TradeRev job portal",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_launch_TradeRev_job_portal()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check the job portal is loaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.iCheckTheJobPortalIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I filter the search results by Toronto, Ontario, Canada and Engineering",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.i_filter_the_search_results_by_(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the listed jobs belong to Toronto, Ontario, Canada and Engineering",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.validate_the_listed_jobs_belong_to_Toronto_Ontario_Canada_and_Engineering(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I log the total number of jobs listed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.iLogTheTotalNumberOfJobsListed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});