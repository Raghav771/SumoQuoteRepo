Clone the project:
Branch Name: main

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

or

Navigate to careers feature file right click on any scenario and run the test.

Reports would be generated under :
/target/cucumber-html-report
