package co.com.prueba.choucair.userinterfaces;

import net.serenitybdd.screenplay.targets.Target;

public class PhpTravelsPosts {
	
	
	
	public static final Target POSTS = Target.the("Posts ").locatedBy("//a[contains(text(),'Posts')]");
	public static final Target ADD_POSTS = Target.the("Add posts ").locatedBy("//div//div//div//form//button[@class= \"btn btn-success\"]");
	public static final Target POST_TITLE = Target.the("Post title ").locatedBy("//input[@class= \"form-control posttitle\"]");
	public static final Target PERMALINK = Target.the("Permalink ").locatedBy("//input[@class= \"form-control pull-right permalink\"]");
	public static final Target CATEGORY_SELECT = Target.the("Category select ").locatedBy("(//select//option[@value=\"20\"])[1]");
	public static final Target RELATED_POSTS = Target.the("Related posts").locatedBy("//*[@id=\"s2id_autogen1\"]/ul");
	public static final Target ATTACH_IMAGE = Target.the("Attach image").locatedBy("//input[@id='image_default']");
	public static final Target TOWNS_INFO = Target.the("Towns info").locatedBy("(//body/p[1])");
	
	
	
	private PhpTravelsPosts() {
		
	}
}
