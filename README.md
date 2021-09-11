# FITNESS BUDDY

Fitness Buddy is an Fitness App built for convenience. The App enables users to add exercises to a list. Then the user can drag the newly created exercise to a calendar area and drop the exercise in any given day of the week. Also, there is a BMI area where users can calculate their personal BMI. 

![App on All Devices](readme-files/screenshots/Fitness-app-mockup-devices.png)

# Features

## Exercise List

![Exercise List Area](readme-files/screenshots/exercise-list-section.png)

* Users can create their own exercises list.
* Users can write personal exercises in the input box and add the exercises to a list with click of a button.
* Once the exercises are added to the list, users can drag the newly created exercise to the weekly calendar section.
* If user clicks the Add Exercise button but the exercise input field is empty, user gets an alert asking them to add exercise.

## Weekly Calendar

![Weekly Calendar](readme-files/screenshots/calendar-section.png)

* Users are able to drop the new exercises anywhere inside the calendar section.

* Calendar allows users to create personalised exercise routines.

* Full 7 day calendar available for users to customise their workout plans. 

## Subscribe to Newsletter

![Newsletter Sign Up](readme-files/screenshots/newsletter-section.png)

* Users are able to subscribe to newsletter by adding their name and email address in the given fields.

* Once user is subscribed to the list, they will receive weekly newsletter and exercising tips sent directly to their email address.

* User gets an alert when form is submitted successfully.

## BMI Calclulator

![BMI Calclulator](readme-files/screenshots/bmi-calculator.png)

* Body Mass Index (BMI) allows users to input their weight and height in metrics.

* When the user clicks Get My BMI button they will recieve their own BMI based on the weight and height of the user.

* BMI Calculator is a useful tool to keep track of your Body Mass Index.

* If weight or height input fields are empty and user clicks button, the user receive alert asking them to add the required fields.

## BMI Comparision Chart

![BMI Comparision Chart](readme-files/screenshots/bmi-info.png)

* BMI Chart allow users to compare their BMI to see if they are in healthy weight range. 

* Useful chart to compare with the users BMI results. 

# Features Left to Implement

* Email the User their personalised calendar with exercise list to their email address.

* Add Calories counter Calculator.

* Create a meal list calendar section so users can create their own healthy meal plans.

## Wireframes

* [Desktop](https://github.com/dushanka-dev/fitness-buddy/blob/main/readme-files/wireframes/desktop/fitness-app-wireframe-desktop.png)

* [Tablet](https://github.com/dushanka-dev/fitness-buddy/blob/main/readme-files/wireframes/tablet/fitness-app-wireframe-tablet.png)

* [Mobile](https://github.com/dushanka-dev/fitness-buddy/blob/main/readme-files/wireframes/mobile/fitness-app-wireframe-mobile.png)

# Deployment

* Fitness Buddy was deployed using GitHub Pages. Below are the steps:

    * Visit [Fitness Buddy GitHub Repo](https://github.com/dushanka-dev/fitness-buddy)
    * Go to Settings
    * Click Pages on left side menu
    * Select Main branch
    * Click Save

# Testing

## W3C Validator
* [W3C Validator Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdushanka-dev.github.io%2Ffitness-buddy%2F)

## Errors and Fixes
        
* Error: The value of the for attribute of the label element must be the ID of a non-hidden form control (From line 85, column 17; to line 85, column 36)
* Fix: Updated BMI Form labels with the correct ID's.
* Warning: The type attribute is unnecessary for JavaScript resources.
* Fix: Removed type attribute from EmailJS script tags.

## W3C CSS Jigsaw Validator

* [W3C CSS Jigsaw Validator Results](https://jigsaw.w3.org/css-validator/validator?uri=dushanka-dev.github.io%2Ffitness-buddy%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

* No Errors

## JShint 

* To check JShint results, please visit [JShint](https://jshint.com/) and add the JS code from the script.js in assets folder.

* Errors and Fixes

    * Warnings: Missing semicolons.
    * Fix: Added semicolons in all the lines of code mentioned.
    * Warnings: Unnecessary semicolons.
    * Fix: Removed unnecessary semicolons.
    * Warning: 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)

## Responsive Testing

* For Responsive testing Google Devtools was used to minimise the app to view in different device sizes.

* Used Media Queries to add styling for different device screen sizes. 

## App Feature Testing

* Exercise List
        
    * Added different exercises to input section and clicked Add button to test the exercises list functionality. 

    * Clicked exercise list remove buttons to ensure each exercises can be deleted by the user. 

    * Dragged exercises items away from the list to ensure the exercises list items are draggable.

    * Checked user gets an alert if the input field is empty and user clicks Add Exercise.

* Calendar Section

    * Exercises was dropped after dragging from list to ensure the exercises can be dropped in the calendar section.

    * Exercises items was moved around the calendar to make sure they are draggables in each calendar day areas.

    * Exercises items remove button clicked to make sure user can remove exercises from the calendar.

    * Tested cloning of exercises to ensure user can clone exercises for better user experience. 

* Subscribe to Newsletter Testing

    * Tested the input of name and user email fields are cleared once the user clicks submit button.

    * Tested user gets an alert notifying them the form was submitted successfully. 

    * Checked EmailJS admin dashboard to ensure the emails are getting sent successfully.

    * Used console log to ensure successful email submission. 

    * Sent dummy emails to myself to ensure the emails are sent properly and the content is correct.

* BMI Calculation Section Testing

    * Tested the weight and height inputs to ensure users are able to add their weight and height.

    * Tested the BMI calculation is correct by using my own weight and height to check my BMI.

    * Added the input information and clicked submit to check the user see the results section with their BMI correctly.

# Credits

* [Gitpod](https://www.gitpod.io/)
* [GitHub](https://github.com/)
* [Google](https://www.google.com/)
* [Google Fonts](https://fonts.google.com/)
* [Stack Overflow](https://stackoverflow.com/)
* [W3Schools](https://www.w3schools.com/)
* [Coolors](https://coolors.co/palettes/trending)
* [Centers for Disease Control and Prevention (BMI Calculation)](https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_1.html)
* [Patient (BMI Comparison Information)](https://patient.info/doctor/bmi-calculator-calculator)
* [EmailJS](https://www.emailjs.com/)
* [YouTube](https://www.youtube.com/)
* [IconFinder](https://www.iconfinder.com/search?q=exercise&price=free&license=gte__2)
* [Spell Checker](https://www.internetmarketingninjas.com/online-spell-checker.php)


