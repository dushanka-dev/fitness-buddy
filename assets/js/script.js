// document.addEventListener('DOMContentLoaded', function() {
//     let addBtn = document.getElementById('exercise-btn');

//     addBtn.addEventListener('submit', function(event) {
//         if (this.getAttribute('id') === 'exercise-btn') {
//             addExercises()
//         }
//     })

// })

// Add/Remove Exercises

function addExercises(event) {

    event.preventDefault();

    let newList = document.getElementById('exercise-group')
    let exerciseInputs = document.getElementById('exercise-input').value;

    let newExercise = document.createElement('li');
    let removeBtn = document.createElement('button')

    newExercise.classList.add('exercise-items');
    newExercise.innerText = exerciseInputs;
    newList.appendChild(newExercise);

    // Remove Btn

    removeBtn.classList.add('delete-btn');
    removeBtn.innerText = 'X';
    newExercise.appendChild(removeBtn);

}

const exerciseForm = document.getElementById('exercise-form');
exerciseForm.addEventListener('submit', addExercises);


// Remove Exercises from List

// Drag Exercise to Calendar

// BMI Inputs

// BMI Calculations

// BMI Output

