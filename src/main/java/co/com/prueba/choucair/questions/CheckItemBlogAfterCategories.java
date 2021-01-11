package co.com.prueba.choucair.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.ensure.Ensure;

import java.util.logging.Logger;



import static co.com.prueba.choucair.userinterfaces.PhpTravelsCategories.*;


public class CheckItemBlogAfterCategories implements Question<Boolean> {
	
	private String testcategories;
	private static final Logger LOGGER = Logger.getLogger(CheckItemBlogAfterCategories.class.getName());
	
	public CheckItemBlogAfterCategories(String testcategories) {
		this.testcategories = testcategories;
	}
			
			
	@Override
	public Boolean answeredBy(Actor actor) {
		
		if (CATEGORY_VALIDATION.resolveFor(actor).isCurrentlyVisible()) {
			actor.attemptsTo(Ensure.that(CATEGORY_VALIDATION).text().contains(testcategories)
					);
			
			
		} else {
            LOGGER.info("THE TITLE ISN'T ON THE PAGE");
            return false;
       }

					return true;
    }

	public static CheckItemBlogAfterCategories theTitleOnPage(String testcategories) {
		return new CheckItemBlogAfterCategories(testcategories);
	}
}
