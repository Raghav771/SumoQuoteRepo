package com.pages;

import com.utilities.WaitUtils;
import com.utilities.reader.TestDataReader;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class SumoQuoteSignupPage extends BasePage {

    private WebDriver driver;
    private WaitUtils waitUtils;
    private final TestDataReader testDataReader;

    public SumoQuoteSignupPage(WebDriver driver) {
        super(driver);
        this.driver = driver;
        waitUtils = new WaitUtils(driver);
        testDataReader = new TestDataReader();

    }


    @FindBy(xpath = "//input[@id='accountName']")
    WebElement organizationName;

    @FindBy(xpath = "//input[@id='firstName']")
    WebElement firstName;


    @FindBy(xpath = " //input[@id='lastName']")
    WebElement lastName;


    @FindBy(xpath = "//input[@id='emailAddress']")
    WebElement email;


    @FindBy(xpath = "//input[@id='phoneNumber']")
    WebElement phoneNumber;

    @FindBy(xpath = "//input[@id='Password']")
    WebElement password;


    @FindBy(xpath = "//input[@id='repeatPassword']")
    WebElement repeatPassword;

    @FindBy(xpath = "//input[@id='howHeard']")
    WebElement howHeard;

    @FindBy(xpath = "//div[contains(text(),'The Roofing Academy')]")
    WebElement howHeardSelection;

    @FindBy(xpath = "//div[@class='v-input--selection-controls__ripple']")
    WebElement checkbox;

    @FindBy(xpath = "//span[normalize-space()='Save']")
    WebElement saveBtn;

    @FindBy(xpath = "//p[contains(text(),'OK, we sent you an email containing account verifi')]")
    WebElement signUpConfirmationMsg;

    @FindBy(xpath = "//a[normalize-space()='Back to the Sign In page']")
    WebElement loginBtn;

    public void fillSignUpPage(String emailInput) throws InterruptedException {
        firstName.sendKeys(testDataReader.readData("firstName"));
        lastName.sendKeys(testDataReader.readData("lastName"));
        organizationName.sendKeys(testDataReader.readData("organizationName"));
        email.sendKeys(emailInput);
        phoneNumber.sendKeys(testDataReader.readData("phoneNumber"));
        password.sendKeys(testDataReader.readData("password"));
        repeatPassword.sendKeys(testDataReader.readData("password"));
        //Select select = new Select(howHeard);
        //Select select = new Select(howHeardSelection);
       // WebElement howHeard = driver.findElement(howHeard);
        clickElement(howHeard);
        Thread.sleep(2000);
        //WebElement howHeardSelection = driver.findElement(howHeardSelection);
        clickElement(howHeardSelection);
        Thread.sleep(2000);
        clickElement(checkbox);
        clickElement(saveBtn);
    }

    public boolean confirmationMsgExists()
    {
        return signUpConfirmationMsg.isDisplayed();
    }

    public void navigateToLoginPage() throws InterruptedException {
        //Thread.sleep(15000);
        WebDriverWait wait=new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOf(loginBtn));
        loginBtn.click();
    }

}
