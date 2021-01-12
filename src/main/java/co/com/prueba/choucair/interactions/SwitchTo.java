package co.com.prueba.choucair.interactions;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;



import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Interaction;
import net.serenitybdd.screenplay.Tasks;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;

public class SwitchTo implements Interaction{
	
	private String Iframe = "iframe";
		
	

	@Override
	public <T extends Actor> void performAs(T actor) {
		ChromeDriver chromeDriver = (ChromeDriver) BrowseTheWeb.as(actor).getDriver();
		chromeDriver.switchTo().defaultContent();
		chromeDriver.switchTo().frame(chromeDriver.findElement(By.id(Iframe)));
		
	}
	
	public static SwitchTo frame() {
		return Tasks.instrumented(SwitchTo.class);
	}

}
