@smoke
Feature: User Registration and login

  Scenario Outline: New user registration and login
    Given User launch the registration page
    And   User fills firstName lastName "<email>" and required details in the registration form
    And   User should be on the email confirmation sent page
    And   Now the user navigates to the the login page
    And   User provides valid credentials and click on login button
    And   The user should be redirected to the welcome page
    And   User clicks on the Get Started button and provide required information in the title page
    And   User clicks on See My Brand button and Confirms
    When  The user selects type of work and clicks on Let's go button
    Then  The user should see a successful message

  Examples:
  |email|
  |raghavreddy771+088@gmail.com|




    