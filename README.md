Clone the project:
Branch Name: master

Required for setup:

java version "20.0.1"
Apache Maven 3.9.3

Added required dependencies in the Maven POM.XML File.

Drivers (Exist in the project):

Chrome Driver for Mac


Browsers: (Required)
Chrome: Version 114.0.5735.198 (Official Build) (64-bit) 


IDE: Intellij
Plugins: Cucumber for Java, gherkin

Compile the project: 
Navigate to the project located folder and run the following command.
mvn clean install

How to Run Scripts:

Navigate to 
Src/test/java/com/runner/RunUITests class
Execute the Runner class

Note : Please update the email to your email id on the feature file and manually verify once the user is registered successfully

Reports would be generated under :
/target/cucumber-html-report
