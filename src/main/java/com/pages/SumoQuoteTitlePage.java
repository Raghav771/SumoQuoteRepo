package com.pages;

import com.utilities.WaitUtils;
import com.utilities.reader.TestDataReader;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class SumoQuoteTitlePage extends BasePage {

    private WebDriver driver;
    private WaitUtils waitUtils;
    private final TestDataReader testDataReader;

    public SumoQuoteTitlePage(WebDriver driver)
    {
        super(driver);
        this.driver = driver;
        waitUtils = new WaitUtils(driver);
        testDataReader = new TestDataReader();
    }

    // Title page Account Name
    @FindBy(xpath = "//input[@id='accountName']")
    WebElement accountName;

    // Title page Account Name
    @FindBy(xpath = "//input[@id='emailAddress']")
    WebElement companyEmailAddress;

    // Title page Phone Number
    @FindBy(xpath = "//input[@id='phoneNumber']")
    WebElement companyPhoneNumber;

    // Title page Capabilities1
    @FindBy(xpath = "//input[@id='capabilities']")
    WebElement capabilities1;

    // Title page Capabilities2
    @FindBy(xpath = "//input[@id='capabilities2']")
    WebElement capabilities2;

    @FindBy(xpath = "(//span[@class='v-btn__content'][normalize-space()='See my brand'])[2]")
    WebElement seeMyBrandBtn;

    public boolean validateTitlePageContents()
   {
       return accountName.getAttribute("value").trim().equalsIgnoreCase(testDataReader.readData("organizationName").trim());
   }

    public void fillTitlePageContent()
    {
        capabilities1.sendKeys(testDataReader.readData("capabilities1"));
        capabilities2.sendKeys(testDataReader.readData("capabilities2"));
       clickElement(seeMyBrandBtn);
    }

}


