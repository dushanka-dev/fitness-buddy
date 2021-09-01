document.addEventListener("DOMContentLoaded", function() {

    // Exercise List Event Listener
    // const exerciseForms = document.getElementById('exercise-form');
    document.getElementById('exercise-form').addEventListener('submit', addExercises);

    document.getElementById('exercise-group').addEventListener('click', deleteExercises)

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
        liItem.remove()
    }
}

// Drag Exercise to Calendar

// Drag Start

// BMI Inputs

// BMI Calculations

// BMI Output

