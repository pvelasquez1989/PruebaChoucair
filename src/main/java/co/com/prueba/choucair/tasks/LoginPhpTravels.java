package co.com.prueba.choucair.tasks;

import static co.com.prueba.choucair.userinterfaces.PhpTravelsLogin.*;


import java.util.List;


import co.com.prueba.choucair.utils.FilloConnection;

import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.Tasks;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;

public class LoginPhpTravels implements Task{

	
	private String scenarioNumber;
	private String sheetName;
	
	public LoginPhpTravels(String scenarioNumber, String sheetName) {
		this.scenarioNumber = scenarioNumber;
		this.sheetName = sheetName;
	}
	@Override
	public <T extends Actor> void performAs(T actor) {
		// TODO Auto-generated method stub
		
		List<String> listData = FilloConnection.data(scenarioNumber, sheetName);
		
		actor.attemptsTo(
				Enter.theValue(listData.get(0)).into(EMAIL),
				Enter.theValue(listData.get(1)).into(PASSWORD),
				Click.on(LOGINBUTTON)
				);
		
		FilloConnection.closeConnection();
	}

	public static LoginPhpTravels option(String scenarioNumber, String sheetName) {
		return Tasks.instrumented(LoginPhpTravels.class, scenarioNumber, sheetName);
  }
}

