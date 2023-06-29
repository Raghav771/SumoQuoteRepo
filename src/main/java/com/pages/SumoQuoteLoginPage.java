package com.pages;

import com.utilities.WaitUtils;
import com.utilities.reader.TestDataReader;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SumoQuoteLoginPage extends BasePage {

    private WebDriver driver;
    private WaitUtils waitUtils;
    private final TestDataReader testDataReader;
    private CharSequence emailInput;

    public SumoQuoteLoginPage(WebDriver driver) {
        super(driver);
        this.driver = driver;
        waitUtils = new WaitUtils(driver);
        testDataReader = new TestDataReader();
    }

    // Email
    @FindBy(xpath = "//input[@placeholder='yours@example.com']")
    WebElement loginEmailAddress;
    // Password
    @FindBy(xpath = "//input[@placeholder='your password']")
    WebElement loginPassword;
    // Login Button
    @FindBy(xpath = "//span[@class='auth0-label-submit']")
    WebElement loginBtn;
    // Get Started Button
    @FindBy(xpath = "//span[normalize-space()='Get started']")
    WebElement getStartedBtn;


    public void loginWithValidCreds(String emailInput)
    {
        try {
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(ExpectedConditions.visibilityOf(loginEmailAddress));
            loginEmailAddress.sendKeys(emailInput);
            loginPassword.sendKeys(testDataReader.readData("password"));
            clickElement(loginBtn);
        }catch (Exception e)
        {
            System.out.println(e.getMessage());
        }

    }

    public boolean validateLoginSuccess() throws InterruptedException {
        Thread.sleep(5000);
        return getStartedBtn.isDisplayed();
    }

    public void clickGetSTartedBtn()
    {
        clickElement(getStartedBtn);
    }

}