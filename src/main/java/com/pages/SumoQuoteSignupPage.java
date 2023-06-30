package com.pages;

import com.utilities.Encode;
import com.utilities.WaitUtils;
import com.utilities.reader.TestDataReader;
import org.openqa.selenium.JavascriptExecutor;
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

    //Signup Page OrganizationName
    @FindBy(xpath = "//input[@id='accountName']")
    WebElement organizationName;

    //Signup Page First Name
    @FindBy(xpath = "//input[@id='firstName']")
    WebElement firstName;

    //Signup Page Last Name
    @FindBy(xpath = " //input[@id='lastName']")
    WebElement lastName;

    //Signup Page Email Address
    @FindBy(xpath = "//input[@id='emailAddress']")
    WebElement email;

    //Signup Page Phone Number
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

    @FindBy(xpath = "//a[@href='/signIn']")
    WebElement backToSignInBtn;

    public void fillSignUpPage(String emailInput) throws InterruptedException {
        waitforElementClickable(firstName);
        firstName.sendKeys(testDataReader.readData("firstName"));
        lastName.sendKeys(testDataReader.readData("lastName"));
        organizationName.sendKeys(testDataReader.readData("organizationName"));
        email.sendKeys(emailInput);
        phoneNumber.sendKeys(testDataReader.readData("phoneNumber"));
        String pwd=testDataReader.readData("password");
        Encode encode=new Encode();
        password.sendKeys(encode.decrypt(pwd));
        repeatPassword.sendKeys(encode.decrypt(pwd));
        clickElement(howHeard);
        waitforElementClickable(howHeardSelection);
        clickElement(howHeardSelection);
        waitforElementClickable(checkbox);
        clickElement(checkbox);
        waitforElementClickable(saveBtn);
        clickElement(saveBtn);
    }

    public boolean confirmationMsgExists()
    {
        return signUpConfirmationMsg.isDisplayed();
    }

    public void navigateToLoginPage() throws InterruptedException {
        waitforElementClickable(backToSignInBtn);
        JavascriptExecutor js = (JavascriptExecutor)(driver);
        js.executeScript("arguments[0].click()",backToSignInBtn);
    }

    public void waitforElementClickable(WebElement element){
        WebDriverWait wait=new WebDriverWait(driver,30);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

}
