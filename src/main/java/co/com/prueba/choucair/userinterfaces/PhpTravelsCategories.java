package co.com.prueba.choucair.userinterfaces;

import static java.time.temporal.ChronoUnit.SECONDS;

import java.time.Duration;

import net.serenitybdd.screenplay.targets.Target;

public class PhpTravelsCategories {
	
	public static final Target ITEM_BLOG = Target.the("Item blog").locatedBy("//a[@href= '#Blog']");
	public static final Target BLOG_CATEGORIES = Target.the("Blog categoeries").locatedBy("//a[contains(text(),'Blog Categories')]");
	public static final Target BUTTON_ADD_CATEGORY = Target.the("Add category").locatedBy("(//div//button[@class= \"btn btn-success\"])[2]");
	public static final Target CATEGORY_NAME = Target.the("Category name").locatedBy("(//div//input[@class= \"form-control\"])[1]");
	public static final Target NAME_IN_VIETNAMESE = Target.the("Name in vietnamese").locatedBy("(//div//input[@class= \"form-control\"])[2]");
	public static final Target NAME_IN_RUSSIAN = Target.the("Name in russian").locatedBy("(//div//input[@class= \"form-control\"])[3]");
	public static final Target NAME_IN_ARABIC = Target.the("Name in arabic").locatedBy("(//div//input[@class= \"form-control\"])[4]");
	public static final Target NAME_IN_FARSI = Target.the("Name in farsi").locatedBy("(//div//input[@class= \"form-control\"])[5]");
	public static final Target NAME_IN_TURKISH = Target.the("Name in turkish").locatedBy("(//div//input[@class= \"form-control\"])[6]");
	public static final Target NAME_IN_FRENCH = Target.the("Name in french").locatedBy("(//div//input[@class= \"form-control\"])[7]");
	public static final Target NAME_IN_SPANICH = Target.the("Name in french").locatedBy("(//div//input[@class= \"form-control\"])[8]");
	public static final Target NAME_IN_GERMAN = Target.the("Name in french").locatedBy("(//div//input[@class= \"form-control\"])[9]");
	public static final Target ADD_CATEGORIES = Target.the("Add categories").locatedBy("(//div//button[@class= \"btn btn-primary\"])[1]");
	public static final Target CATEGORY_VALIDATION = Target.the("Category validation").locatedBy("(//td[contains(text(),'towns')])[1]").waitingForNoMoreThan(Duration.of(5, SECONDS));
	
	
	
	private PhpTravelsCategories() {
	}
}
