package co.com.prueba.choucair.tasks;


import static co.com.prueba.choucair.userinterfaces.PhpTravelsCategories.ITEM_BLOG;
import static co.com.prueba.choucair.userinterfaces.PhpTravelsPosts.*;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.chrome.ChromeDriver;


import co.com.prueba.choucair.interactions.Wait;
import co.com.prueba.choucair.interactions.WaitUntilClickable;
import co.com.prueba.choucair.utils.FilloConnection;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.Tasks;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Upload;

public class AddPost implements Task{

	private String scenarioNumber;
	private String sheetName;
	private static final String RUTA = "src/test/resources/co/com/prueba/choucair/files/Jardin.JPG";
	private static final Path RUTA_PATH = Paths.get(RUTA).toAbsolutePath();
	
	public AddPost(String scenarioNumber, String sheetName) {
		this.scenarioNumber = scenarioNumber;
		this.sheetName = sheetName;
	}
	
	
	
	@Override
	public <T extends Actor> void performAs(T actor) {
		ChromeDriver chromeDriver = (ChromeDriver) BrowseTheWeb.as(actor).getDriver();
		List<String> listData = FilloConnection.data(scenarioNumber, sheetName);
		
		actor.attemptsTo(
				Click.on(ITEM_BLOG),
				Wait.aWhile(2),
				Click.on(POSTS),
				WaitUntilClickable.element(ADD_POSTS, 10),
				Click.on(ADD_POSTS),
				Enter.theValue(listData.get(0)).into(POST_TITLE),
				Wait.aWhile(2),
				Enter.theValue(listData.get(1)).into(PERMALINK),
				Click.on(CATEGORY_SELECT),
				Wait.aWhile(3),
				Click.on(RELATED_POSTS),
				Click.on(ITEM_RELATED_POSTS),
				Upload.theFile(RUTA_PATH).to(ATTACH_IMAGE),
				Wait.aWhile(5));
				chromeDriver.switchTo().frame(chromeDriver.findElement(By.cssSelector("iframe[title='Rich Text Editor, desc']")));
				
				actor.attemptsTo(
						WaitUntilClickable.element(TOWNS_INFO, 5),				
				Enter.theValue(listData.get(2)).into(TOWNS_INFO));
				chromeDriver.switchTo().defaultContent();
				
				actor.attemptsTo(
						Enter.theValue(listData.get(3)).into(KEYWORDS),
						Enter.theValue(listData.get(4)).into(DESCRIPTION_OPTION),
						Click.on(SUBMIT_BUTTON)
						
				);
		
		
		FilloConnection.closeConnection();
	}

	public static AddPost menuoptionpost(String scenarioNumber, String sheetName) {
		return Tasks.instrumented(AddPost.class, scenarioNumber, sheetName);
	}
	
}

