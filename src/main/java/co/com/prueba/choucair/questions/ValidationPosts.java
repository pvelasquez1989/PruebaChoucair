package co.com.prueba.choucair.questions;

import static co.com.prueba.choucair.userinterfaces.PhpTravelsPosts.POSTS_VALIDATION;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Text;

public class ValidationPosts implements Question<String>{

	@Override
	public String answeredBy(Actor actor) {
		
		return Text.of(POSTS_VALIDATION).viewedBy(actor).asString();
		
	}

	public static ValidationPosts namecategory() {
		return new ValidationPosts();
}

}	
	
	
