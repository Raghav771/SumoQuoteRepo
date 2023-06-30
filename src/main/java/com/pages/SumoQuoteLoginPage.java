package com.pages;

import com.utilities.Encode;
import com.utilities.WaitUtils;
import com.utilities.reader.TestDataReader;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


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
            waitUtils.getElementAfterMediumWait(loginEmailAddress);
            loginEmailAddress.sendKeys(emailInput);
            String password=testDataReader.readData("password");
            Encode encode=new Encode();
            loginPassword.sendKeys(encode.decrypt(password));
            Thread.sleep(20000);
            clickElement(loginBtn);
        }catch (Exception e)
        {
            System.out.println(e.getMessage());
        }
    }

    public boolean validateLoginSuccess() throws InterruptedException {
        waitUtils.getElementAfterMediumWait(getStartedBtn);
        return getStartedBtn.isDisplayed();
    }

    public void clickGetSTartedBtn()
    {
        clickElement(getStartedBtn);
    }

}