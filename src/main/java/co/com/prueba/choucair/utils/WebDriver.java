package co.com.prueba.choucair.utils;

import net.thucydides.core.webdriver.SerenityWebdriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;
public class WebDriver {

	public static ChromeDriver driver;
    public static  ChromeDriver chrome() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/co/com/prueba/choucair/files/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://www.phptravels.net/admin");
        SerenityWebdriverManager.inThisTestThread().setCurrentDriverTo(driver);
        return driver;
    }
}
