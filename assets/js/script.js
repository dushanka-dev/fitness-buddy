document.addEventListener("DOMContentLoaded", function() {

    // Event Listener

    document.getElementById('exercise-form').addEventListener('submit', addExercises);

    document.getElementById('exercise-group').addEventListener('click', deleteExercises);

    document.getElementById('email-form').addEventListener('submit', sendEmails);

    document.getElementById('bmi-form').addEventListener('submit', bmiResults);

});

/* Add Exercises Section
In this function new exercises items are created.
Draggable attributes are added to the items.
New exercise items are appended to the exercise list.
Call the Dragstart, Touchstart functions with listeners.
Delete function is added to new exercises.
Give user alert if input field is empty.
*/
function newExercises() {
    let newList = document.getElementById('exercise-group');
    let exerciseInputs = document.getElementById('exercise-input').value;
    let newExercise = document.createElement('li');

    newExercise.classList.add('exercise-items');
    newExercise.setAttribute('draggable', 'true');
    newExercise.innerText = exerciseInputs;
    newList.appendChild(newExercise);
    
    // Add Draggable/Touch Event Listeners
    newExercise.addEventListener('dragstart', dragStart);
    newExercise.addEventListener('touchstart', touchStart, {passive: true});

    addDelete(newExercise);

    // Alert User
    if (exerciseInputs === '') {
        confirm("Please Add Exercise!");
        newExercise.remove('li');
    }

}

/* Add Delete Section
Create btn and add delete btn class.
Add the X to the btn.
Append the new btn to New Exercises.
*/

function addDelete(newExercise) {
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('delete-btn');
    removeBtn.innerText = 'X';
    newExercise.appendChild(removeBtn);
 }

function addExercises(event) {

        event.preventDefault();

        newExercises();
    
        // Clear field after input
    document.getElementById('exercise-input').value = '';
}


// Remove Exercises from List

function deleteExercises(event) {
    let exerciseItems = event.target;
    if(exerciseItems.classList[0] === 'delete-btn') {
        let liItem = exerciseItems.parentElement;
        liItem.remove();
    }
}

/*
Drag Exercise to Calendar
Add exercise items and drop area to variables.
Use forEach method to call functions for each drag and touch events.
Add drag and touch events functions.
*/


let exerciseLists = document.querySelectorAll('.exercise-items');
let allDays = document.querySelectorAll('.drop-area');
let dragExercise = null;

exerciseLists.forEach((exerciseList) => {
    exerciseList.addEventListener('dragstart', dragStart);
    exerciseList.addEventListener('touchstart', touchStart, {passive: true});
});

allDays.forEach((day) => {
    day.addEventListener('dragover', dragOver);
    day.addEventListener('dragenter', dragEnter);
    day.addEventListener('dragleave', dragLeave);
    day.addEventListener('drop', dragDrop);

    day.addEventListener('touchend', touchEnd, {passive: true});
});

function dragStart() {
    dragExercise = this;
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter() {
    this.style.border = '2px solid red';
}

function dragLeave() {
    this.style.border = 'none';
}

function dragDrop() {
    clonedExercises = dragExercise.cloneNode(true);
    this.appendChild(clonedExercises);
    // Delete Dragged Exercise Li
    this.addEventListener('click', deleteExercises);
    this.style.border = 'none';
}

// ---- Touch Events 

function touchStart() {
    dragExercise = this;
}

function touchEnd() {
    clonedExercises = dragExercise.cloneNode(true);
    this.appendChild(clonedExercises);
    // Delete Dragged Exercise Li
    this.addEventListener('touchstart', deleteExercises, { passive: true });
}

/*
Newsletter
EmailJS function added.
Created new variables to get values from user inputs.
Send new variables using emailjs.send
Clear input fields once user clicks submit.
*/

function sendEmails(event) {
    event.preventDefault();

    let emailCalendar = {
        to_name: document.getElementById('full-name').value,
        user_email: document.getElementById('user-email').value,
    };

    emailjs.send('service_wn85ily', 'template_stfhhjt', emailCalendar)
    .then(function() {
        confirm('Thank you for Subscribing!');
    });

    document.getElementById('full-name').value = '';
    document.getElementById('user-email').value = '';
}


/*
BMI Calculator 
Get user values from input fields.
Add user alerts if any or all input fields are blank.
Add drag and touch events functions.
Calculate user BMI.
Display BMI results with grey background.
*/

function bmiResults(event) {

    event.preventDefault();

    let weight = document.getElementById('user-weight').value;
    let height = document.getElementById('user-height').value;
    let resultSection = document.getElementById('result-section');
    if (weight === '' && height === '') {
        confirm('Please add your weight and height!');
    }
    else if (weight === '') {
        confirm('Please add your weight!');
    } else if (height === '') {
        confirm('Please add your height!');
    } else {
        let calculation = Math.floor((weight / height / height) * 10000);
        resultSection.style.backgroundColor = 'Grey';
        let bmiResults = document.getElementById('bmi-results').innerText = (`Your BMI Result: ${calculation}`);
        bmiResults;
    }

    document.getElementById('user-weight').value = '';
    document.getElementById('user-height').value = '';

}
