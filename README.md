# Team-Profile-Generator
A Node command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.




WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

Your application should use Jest (Links to an external site.) for running the unit tests and Inquirer (Links to an external site.) for collecting input from the user. The application will be invoked by using the following command: node index.js   


Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.

