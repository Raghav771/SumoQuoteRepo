package com.pages;

import com.utilities.WaitUtils;
import com.utilities.reader.TestDataReader;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class SumoQuoteBrandandWorkPage extends BasePage {

    private WebDriver driver;
    private WaitUtils waitUtils;
    private final TestDataReader testDataReader;

    public SumoQuoteBrandandWorkPage(WebDriver driver)
    {
        super(driver);
        this.driver = driver;
        waitUtils = new WaitUtils(driver);
        testDataReader = new TestDataReader();
    }

    // Brand Page Select brand
    @FindBy(xpath = "//div[img[contains(@src,'Template3.png')]]")
    WebElement selectBrand;

    // Brand Page Confirm Button
    @FindBy(xpath = "//button[@class='btn-sumo-primary float-right v-btn v-btn--has-bg theme--light elevation-0 v-size--default']//span[@class='v-btn__content'][normalize-space()='Confirm']")
    WebElement confirmBtn;

    // Work Page Commercial Roofing Selection
    @FindBy(xpath = "//div[normalize-space()='Commercial Roofing']")
    WebElement commercialRoofing;

    // Work Page Commercial Roofing Product line Firestone Selection
    @FindBy(xpath = "//div[contains(text(),'Firestone')]")
    WebElement firestone;

    // Work Page Commercial Roofing Product line Ok Button
    @FindBy(xpath = "//span[normalize-space()='Ok']")
    WebElement productlineOkbtn;

    // Work Page  Solar Selection
    @FindBy(xpath = "//div[contains(text(),'Solar')]")
    WebElement solar;

    // Work Page  Finish Button
    @FindBy(xpath = "//button[@class='btn-sumo-primary float-right v-btn v-btn--has-bg theme--light elevation-0 v-size--default']//span[@class='v-btn__content'][normalize-space()='Finish']")
    WebElement finishBtn;

    // Let's Go Button
    @FindBy(xpath = "(//span[normalize-space()=\"Let's Go!\"])[1]")
    WebElement letsgoBtn;

    // We are Off Button
    @FindBy(xpath = "(//h4[@class='text-center mt-16 mb-4'])")
    WebElement weAreOffBtn;

    public void selectAnyBrand()
    {
        JavascriptExecutor js = (JavascriptExecutor)(driver);
        js.executeScript("arguments[0].click()",selectBrand);
        waitUtils.getElementAfterMediumWait(confirmBtn);
        confirmBtn.click();
    }

    public void selectAnyWork() throws InterruptedException {
        waitUtils.getElementAfterMediumWait(commercialRoofing);
        commercialRoofing.click();
        waitUtils.getElementAfterMediumWait(firestone);
        firestone.click();
        waitUtils.getElementAfterMediumWait(productlineOkbtn);
        productlineOkbtn.click();
        waitUtils.getElementAfterMediumWait(solar);
        solar.click();
        waitUtils.getElementAfterMediumWait(finishBtn);
        finishBtn.click();
    }

    public boolean validateLetsgobtn()
    {
        waitUtils.getElementAfterMediumWait(letsgoBtn);
        return letsgoBtn.isDisplayed();
    }

    public void clickLetsgobtn(){
        letsgoBtn.click();
    }

    public boolean validateWeAreOffMsg()
    {
        waitUtils.getElementAfterMediumWait(weAreOffBtn);
        return weAreOffBtn.isDisplayed();
    }

}
