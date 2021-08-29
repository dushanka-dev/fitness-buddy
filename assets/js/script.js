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

    const newList = document.getElementById('exercise-group')
    const exerciseInputs = document.getElementById('exercise-input').value;
    
    // Clear field after input
    document.getElementById('exercise-input').value = '';

    const newExercise = document.createElement('li');
    const removeBtn = document.createElement('button')

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

