package co.com.prueba.choucair.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;

import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "src/test/resources/co/com/prueba/choucair/features/phptravels.feature",
        glue = {"co.com.prueba.choucair.stepdefinitions"},
        snippets = SnippetType.CAMELCASE)
        


public class PruebaChocairRunner {

}
