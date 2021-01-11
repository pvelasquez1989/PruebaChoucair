package co.com.prueba.choucair.userinterfaces;

import java.time.Duration;
import static java.time.temporal.ChronoUnit.SECONDS;

import net.serenitybdd.screenplay.targets.Target;

public class PhpTravelsLogin {
	
	public static final Target EMAIL = Target.the("email").locatedBy("(//input[@name='email'])[1]");
	public static final Target PASSWORD = Target.the("password").locatedBy("(//input[@name='password'])[1]");
	public static final Target LOGINBUTTON = Target.the("login button").locatedBy("//span[contains(text(),'Login')]");
	
	
	
	
	private PhpTravelsLogin() {
	}
	
}


