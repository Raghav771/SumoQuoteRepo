package com.steps.ui;

import com.pages.*;
import com.utilities.reader.TestDataReader;
import com.utilities.webDriver.DriverFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class StepDefinitions extends DriverFactory {

    public TestDataReader testDataReader;
    public SumoQuoteSignupPage signupPage;
    public SumoQuoteLoginPage loginPage;
    public SumoQuoteTitlePage titlePage;
    public SumoQuoteBrandandWorkPage workPage;

    protected String emailInput;


    public StepDefinitions(){
        testDataReader = new TestDataReader();
        loginPage = new SumoQuoteLoginPage(driver);
        signupPage = new SumoQuoteSignupPage(driver);
        titlePage = new SumoQuoteTitlePage(driver);
        workPage = new SumoQuoteBrandandWorkPage(driver);
    }


  ///////////

    @Given("^User launch the registration page$")
    public void user_launch_the_registration_page() throws Exception {
        String url = testDataReader.readData("registrationUrl");
        driver.navigate().to(url.trim());
    }

    @Given("^User fills firstName lastName \"([^\"]*)\" and required details in the registration form$")
    public void user_fills_firstName_lastName_and_required_details_in_the_registration_form(String input) throws Exception {
        emailInput =  input;
        signupPage.fillSignUpPage(emailInput);
    }
    @Given("^User should be on the email confirmation sent page$")
    public void user_should_be_on_the_email_confirmation_sent_page() throws Exception {
        Assert.assertTrue("confirmation message not exists",signupPage.confirmationMsgExists());
    }

    @Given("^Now the user navigates to the the login page$")
    public void now_the_user_navigates_to_the_the_login_page() throws Exception {
    signupPage.navigateToLoginPage();
    }

    @Given("^User provides valid credentials and click on login button$")
    public void user_provides_valid_credentials_and_click_on_login_button() throws Exception {
        loginPage.loginWithValidCreds(emailInput);
    }

    @Given("^The user should be redirected to the welcome page$")
    public void the_user_should_be_redirected_to_the_welcome_page() throws Exception {
        loginPage.validateLoginSuccess();
    }

    @Given("^User clicks on the Get Started button and provide required information in the title page$")
    public void user_clicks_on_the_Get_Started_button_and_provide_required_information_in_the_title_page() throws Exception {
       Assert.assertTrue("User login unsuccessful",loginPage.validateLoginSuccess());
        loginPage.clickGetSTartedBtn();
       // Assert.assertTrue("account info not filled",titlePage.validateTitlePageContents());
        titlePage.fillTitlePageContent();
    }

    @Given("^User clicks on See My Brand button and Confirms$")
    public void user_clicks_on_See_My_Brand_button_and_Confirms() throws Exception {
        workPage.selectAnyBrand();
    }

    @When("^The user selects type of work and clicks on Let's go button$")
    public void the_user_selects_type_of_work_and_clicks_on_Let_s_go_button() throws Exception {
        workPage.selectAnyWork();
        workPage.clickLetsgobtn();
    }

    @Then("^The user should see a successful message$")
    public void the_user_should_see_a_successful_message() throws Exception {
        Assert.assertTrue("user flow unsuccessful",workPage.validateWeAreOffMsg());
    }
}
