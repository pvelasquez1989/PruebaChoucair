package co.com.prueba.choucair.stepdefinitions;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import static net.serenitybdd.screenplay.actors.OnStage.*;
import static org.hamcrest.Matchers.equalTo;

import net.serenitybdd.screenplay.actors.OnlineCast;
import co.com.prueba.choucair.tasks.LoginPhpTravels;
import co.com.prueba.choucair.questions.CheckItemBlogAfterCategories;
import co.com.prueba.choucair.questions.ValidationPosts;
import co.com.prueba.choucair.tasks.AddCategories;
import co.com.prueba.choucair.tasks.AddPost;

import static co.com.prueba.choucair.utils.WebDriver.chrome;
import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;


public class PruebaChoucairStepDefinitions {
	
	

    @Before
    public void setup() {

    	setTheStage(OnlineCast.ofStandardActors());
        
    }
	
	@Given("^that user wants login in the page phptravels$")
	public void thatUserWantsLoginInThePagePhptravels() {
		theActorCalled("Pedro");
		theActorInTheSpotlight().can(BrowseTheWeb.with(chrome()));
		
	}

	
	@When("^he add categories in phptravels page and post (.*)$")
	public void heAddCategoriesInPhptravelsPageAndPost(String scenarioNumber) {
		theActorInTheSpotlight().attemptsTo(LoginPhpTravels.option(scenarioNumber, "Phptravels"),
	                                        AddCategories.menuoption(scenarioNumber, "Phptravels"));
		
		theActorInTheSpotlight().attemptsTo(AddPost.menuoptionpost(scenarioNumber, "Posts"));
	}

	
	

	@Then("^he should see title (.*) in the screen$")
	public void heShouldSeeTitleTownsInTheScreen(String towns) {
		theActorInTheSpotlight().should(seeThat(ValidationPosts.namecategory(),equalTo("towns")));
			
	
	}

	

}
