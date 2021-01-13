package co.com.prueba.choucair.questions;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;

import net.serenitybdd.screenplay.questions.Text;


import static co.com.prueba.choucair.userinterfaces.PhpTravelsCategories.CATEGORY_VALIDATION;




public class CheckItemBlogAfterCategories implements Question<String> {
	
	
	@Override
	public String answeredBy(Actor actor) {
		
		return Text.of(CATEGORY_VALIDATION).viewedBy(actor).asString();
		
    }

	public static CheckItemBlogAfterCategories theTitleOnPage() {
		return new CheckItemBlogAfterCategories();
	}
}
