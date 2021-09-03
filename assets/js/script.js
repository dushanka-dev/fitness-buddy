document.addEventListener("DOMContentLoaded", function() {

    // Exercise List Event Listener
    // const exerciseForms = document.getElementById('exercise-form');
    document.getElementById('exercise-form').addEventListener('submit', addExercises);

    document.getElementById('exercise-group').addEventListener('click', deleteExercises)

    document.getElementById('bmi-form').addEventListener('submit', bmiResults);

});

// const newList = document.getElementById('exercise-group');


function addExercises(event) {

        event.preventDefault();
    
        let newList = document.getElementById('exercise-group');
        let exerciseInputs = document.getElementById('exercise-input').value;
        let newExercise = document.createElement('li');
        let removeBtn = document.createElement('button');
    
        newExercise.classList.add('exercise-items');
        newExercise.setAttribute('draggable', 'true')
        newExercise.innerText = exerciseInputs;
        newList.appendChild(newExercise);
        // Add Draggable Event Listeners
        newExercise.addEventListener('dragstart', dragStart)
        // Remove Btn
        removeBtn.classList.add('delete-btn');
        removeBtn.innerText = 'X';
        newExercise.appendChild(removeBtn);
        // Clear field after input
        document.getElementById('exercise-input').value = '';
        // Alert User
        if (exerciseInputs === '') {
            confirm("Please Add Exercise!");
            newExercise.remove('li')
        }
    };

// Remove Exercises from List

function deleteExercises(event) {
    let exerciseItems = event.target;
    if(exerciseItems.classList[0] === 'delete-btn') {
        let liItem = exerciseItems.parentElement;
        liItem.remove();
    }
}

// Drag Exercise to Calendar

let exerciseLists = document.querySelectorAll('.exercise-items')
let allDays = document.querySelectorAll('.drop-area')
let dragExercise = null;

exerciseLists.forEach((exerciseList) => {
    exerciseList.addEventListener('dragstart', dragStart)
})

allDays.forEach((day) => {
    day.addEventListener('dragover', dragOver)
    day.addEventListener('dragenter', dragEnter)
    day.addEventListener('dragleave', dragLeave)
    day.addEventListener('drop', dragDrop)
})

function dragStart() {
    dragExercise = this;
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter() {
    this.style.border = '2px solid red'
}

function dragLeave() {
    this.style.border = 'none'
}

function dragDrop() {
    this.appendChild(dragExercise)
    // Delete Dragged Exercise Li
    this.addEventListener('click', deleteExercises)
    this.style.border = 'none'
}

// BMI Inputs

function bmiResults(event) {

    event.preventDefault();

    let age = document.getElementById('user-age').value;
    let weight = document.getElementById('user-weight').value;
    let height = document.getElementById('user-height').value;
    let bmiBtn = document.getElementById('bmi-submit-btn');
    let newResult = document.getElementById('bmi-results');
    
    let results = (weight / height / height) * 10000;
}

// BMI Calculations

// BMI Output