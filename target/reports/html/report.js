$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/phptravels.feature");
formatter.feature({
  "name": "phptravels.net",
  "description": "  As a test automation\n  I want to use phptravels.net\n  to add blog categories",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag:prueba"
    }
  ]
});
formatter.background({
  "name": "login in the page phptravels",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user wants login in the page phptravels",
  "keyword": "Given "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.thatUserWantsLoginInThePagePhptravels()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.openUrl(PageObject.java:851)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl.performAs(OpenUrl.java:18)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c.CGLIB$performAs$0(\u003cgenerated\u003e)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c$$FastClassByCGLIB$$1611e501.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:461)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:446)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:421)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:176)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:163)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c.performAs(\u003cgenerated\u003e)\r\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:233)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:214)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:171)\r\n\tat net.serenitybdd.screenplay.Actor.wasAbleTo(Actor.java:158)\r\n\tat co.com.prueba.choucair.stepdefinitions.PruebaChoucairStepDefinitions.thatUserWantsLoginInThePagePhptravels(PruebaChoucairStepDefinitions.java:32)\r\n\tat ✽.that user wants login in the page phptravels(src/test/resources/features/phptravels.feature:13)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 77\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ARB33T4\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x005CEB13+1501971]\n\tOrdinal0 [0x0054F6D1+980689]\n\tOrdinal0 [0x004D765F+489055]\n\tOrdinal0 [0x0046F2F4+62196]\n\tOrdinal0 [0x0046BCDA+48346]\n\tOrdinal0 [0x00489800+169984]\n\tOrdinal0 [0x0048942D+169005]\n\tOrdinal0 [0x004878EB+162027]\n\tOrdinal0 [0x00470AC7+68295]\n\tOrdinal0 [0x00471B40+72512]\n\tOrdinal0 [0x00471AD9+72409]\n\tOrdinal0 [0x00568F37+1085239]\n\tGetHandleVerifier [0x0066D7ED+503293]\n\tGetHandleVerifier [0x0066D580+502672]\n\tGetHandleVerifier [0x006746AC+531644]\n\tGetHandleVerifier [0x0066DFFA+505354]\n\tOrdinal0 [0x00560606+1050118]\n\tOrdinal0 [0x0056047F+1049727]\n\tOrdinal0 [0x0056AF9B+1093531]\n\tOrdinal0 [0x0056B103+1093891]\n\tOrdinal0 [0x0056A095+1089685]\n\tBaseThreadInitThunk [0x7764FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x779075F4+228]\n\tRtlGetAppContainerNamedObjectPath [0x779075C4+180]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.openUrl(PageObject.java:851)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl.performAs(OpenUrl.java:18)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c.CGLIB$performAs$0(\u003cgenerated\u003e)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c$$FastClassByCGLIB$$1611e501.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:461)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:446)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:421)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:176)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:163)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c.performAs(\u003cgenerated\u003e)\r\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:233)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:214)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:171)\r\n\tat net.serenitybdd.screenplay.Actor.wasAbleTo(Actor.java:158)\r\n\tat co.com.prueba.choucair.stepdefinitions.PruebaChoucairStepDefinitions.thatUserWantsLoginInThePagePhptravels(PruebaChoucairStepDefinitions.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 77\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ARB33T4\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x005CEB13+1501971]\n\tOrdinal0 [0x0054F6D1+980689]\n\tOrdinal0 [0x004D765F+489055]\n\tOrdinal0 [0x0046F2F4+62196]\n\tOrdinal0 [0x0046BCDA+48346]\n\tOrdinal0 [0x00489800+169984]\n\tOrdinal0 [0x0048942D+169005]\n\tOrdinal0 [0x004878EB+162027]\n\tOrdinal0 [0x00470AC7+68295]\n\tOrdinal0 [0x00471B40+72512]\n\tOrdinal0 [0x00471AD9+72409]\n\tOrdinal0 [0x00568F37+1085239]\n\tGetHandleVerifier [0x0066D7ED+503293]\n\tGetHandleVerifier [0x0066D580+502672]\n\tGetHandleVerifier [0x006746AC+531644]\n\tGetHandleVerifier [0x0066DFFA+505354]\n\tOrdinal0 [0x00560606+1050118]\n\tOrdinal0 [0x0056047F+1049727]\n\tOrdinal0 [0x0056AF9B+1093531]\n\tOrdinal0 [0x0056B103+1093891]\n\tOrdinal0 [0x0056A095+1089685]\n\tBaseThreadInitThunk [0x7764FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x779075F4+228]\n\tRtlGetAppContainerNamedObjectPath [0x779075C4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 60 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "he login with username and password",
  "keyword": "When "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.heLoginWithUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he should see title phptravels in the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.heShouldSeeTitlePhptravelsInTheScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "add categories in the option blogs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag:prueba"
    }
  ]
});
formatter.step({
  "name": "that user wants add categories",
  "keyword": "Given "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.thatUserWantsAddCategories()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he add data in the categories",
  "keyword": "When "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.heAddDataInTheCategories()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he should see title test in the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.heShouldSeeTitleTestInTheScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "login in the page phptravels",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user wants login in the page phptravels",
  "keyword": "Given "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.thatUserWantsLoginInThePagePhptravels()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.openUrl(PageObject.java:851)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl.performAs(OpenUrl.java:18)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c.CGLIB$performAs$0(\u003cgenerated\u003e)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c$$FastClassByCGLIB$$1611e501.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:461)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:446)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:421)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:176)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:163)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c.performAs(\u003cgenerated\u003e)\r\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:233)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:214)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:171)\r\n\tat net.serenitybdd.screenplay.Actor.wasAbleTo(Actor.java:158)\r\n\tat co.com.prueba.choucair.stepdefinitions.PruebaChoucairStepDefinitions.thatUserWantsLoginInThePagePhptravels(PruebaChoucairStepDefinitions.java:32)\r\n\tat ✽.that user wants login in the page phptravels(src/test/resources/features/phptravels.feature:13)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 77\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ARB33T4\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x005CEB13+1501971]\n\tOrdinal0 [0x0054F6D1+980689]\n\tOrdinal0 [0x004D765F+489055]\n\tOrdinal0 [0x0046F2F4+62196]\n\tOrdinal0 [0x0046BCDA+48346]\n\tOrdinal0 [0x00489800+169984]\n\tOrdinal0 [0x0048942D+169005]\n\tOrdinal0 [0x004878EB+162027]\n\tOrdinal0 [0x00470AC7+68295]\n\tOrdinal0 [0x00471B40+72512]\n\tOrdinal0 [0x00471AD9+72409]\n\tOrdinal0 [0x00568F37+1085239]\n\tGetHandleVerifier [0x0066D7ED+503293]\n\tGetHandleVerifier [0x0066D580+502672]\n\tGetHandleVerifier [0x006746AC+531644]\n\tGetHandleVerifier [0x0066DFFA+505354]\n\tOrdinal0 [0x00560606+1050118]\n\tOrdinal0 [0x0056047F+1049727]\n\tOrdinal0 [0x0056AF9B+1093531]\n\tOrdinal0 [0x0056B103+1093891]\n\tOrdinal0 [0x0056A095+1089685]\n\tBaseThreadInitThunk [0x7764FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x779075F4+228]\n\tRtlGetAppContainerNamedObjectPath [0x779075C4+180]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.openUrl(PageObject.java:851)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl.performAs(OpenUrl.java:18)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c.CGLIB$performAs$0(\u003cgenerated\u003e)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c$$FastClassByCGLIB$$1611e501.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:461)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:446)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:421)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:176)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:163)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:69)\r\n\tat net.serenitybdd.screenplay.actions.OpenUrl$$EnhancerByCGLIB$$f985de1c.performAs(\u003cgenerated\u003e)\r\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:233)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:214)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:171)\r\n\tat net.serenitybdd.screenplay.Actor.wasAbleTo(Actor.java:158)\r\n\tat co.com.prueba.choucair.stepdefinitions.PruebaChoucairStepDefinitions.thatUserWantsLoginInThePagePhptravels(PruebaChoucairStepDefinitions.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 77\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ARB33T4\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x005CEB13+1501971]\n\tOrdinal0 [0x0054F6D1+980689]\n\tOrdinal0 [0x004D765F+489055]\n\tOrdinal0 [0x0046F2F4+62196]\n\tOrdinal0 [0x0046BCDA+48346]\n\tOrdinal0 [0x00489800+169984]\n\tOrdinal0 [0x0048942D+169005]\n\tOrdinal0 [0x004878EB+162027]\n\tOrdinal0 [0x00470AC7+68295]\n\tOrdinal0 [0x00471B40+72512]\n\tOrdinal0 [0x00471AD9+72409]\n\tOrdinal0 [0x00568F37+1085239]\n\tGetHandleVerifier [0x0066D7ED+503293]\n\tGetHandleVerifier [0x0066D580+502672]\n\tGetHandleVerifier [0x006746AC+531644]\n\tGetHandleVerifier [0x0066DFFA+505354]\n\tOrdinal0 [0x00560606+1050118]\n\tOrdinal0 [0x0056047F+1049727]\n\tOrdinal0 [0x0056AF9B+1093531]\n\tOrdinal0 [0x0056B103+1093891]\n\tOrdinal0 [0x0056A095+1089685]\n\tBaseThreadInitThunk [0x7764FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x779075F4+228]\n\tRtlGetAppContainerNamedObjectPath [0x779075C4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 60 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "he login with username and password",
  "keyword": "When "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.heLoginWithUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he should see title phptravels in the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.heShouldSeeTitlePhptravelsInTheScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "add posts in the option blogs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag:prueba"
    }
  ]
});
formatter.step({
  "name": "that user wants add posts",
  "keyword": "Given "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.thatUserWantsAddPosts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he add data in the posts",
  "keyword": "When "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.heAddDataInThePosts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he should see title test in the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "PruebaChoucairStepDefinitions.heShouldSeeTitleTestInTheScreen()"
});
formatter.result({
  "status": "skipped"
});
});