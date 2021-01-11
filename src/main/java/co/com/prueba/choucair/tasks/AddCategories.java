package co.com.prueba.choucair.tasks;

import static co.com.prueba.choucair.userinterfaces.PhpTravelsCategories.*;

import java.util.List;

import co.com.prueba.choucair.interactions.Wait;

import co.com.prueba.choucair.interactions.WaitUntilClickable;
import co.com.prueba.choucair.questions.CheckItemBlogAfterCategories;
import co.com.prueba.choucair.utils.FilloConnection;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.Tasks;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Scroll;

public class AddCategories implements Task{

	private String scenarioNumber;
	private String sheetName;
	
	public AddCategories(String scenarioNumber, String sheetName) {
		this.scenarioNumber = scenarioNumber;
		this.sheetName = sheetName;
	}
	
	@Override
	public <T extends Actor> void performAs(T actor) {
		
		List<String> listData = FilloConnection.data(scenarioNumber, sheetName);
		
		actor.attemptsTo(
				Click.on(ITEM_BLOG),
				Wait.aWhile(1),
				Click.on(BLOG_CATEGORIES),
				WaitUntilClickable.element(BUTTON_ADD_CATEGORY, 50),
				Click.on(BUTTON_ADD_CATEGORY),
				Enter.theValue(listData.get(2)).into(CATEGORY_NAME),
				Wait.aWhile(1),
				Enter.theValue(listData.get(3)).into(NAME_IN_VIETNAMESE),
				Enter.theValue(listData.get(4)).into(NAME_IN_RUSSIAN),
				Enter.theValue(listData.get(5)).into(NAME_IN_ARABIC),
				Enter.theValue(listData.get(6)).into(NAME_IN_FARSI),
				Enter.theValue(listData.get(7)).into(NAME_IN_TURKISH),
				Enter.theValue(listData.get(8)).into(NAME_IN_FRENCH),
				Scroll.to(ADD_CATEGORIES).andAlignToBottom(),
				Enter.theValue(listData.get(9)).into(NAME_IN_SPANICH),
				Enter.theValue(listData.get(10)).into(NAME_IN_GERMAN),
				Click.on(ADD_CATEGORIES),
		        Wait.aWhile(1));
//		        CheckItemBlogAfterCategories.theTitleOnPage(CATEGORY_VALIDATION));
		
		        
				
		FilloConnection.closeConnection();
	}
	
	public static AddCategories menuoption(String scenarioNumber, String sheetName) {
		return Tasks.instrumented(AddCategories.class, scenarioNumber, sheetName);
  }

}
