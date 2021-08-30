document.addEventListener("DOMContentLoaded", function() {

    // Exercise List Event Listener
    const exerciseForms = document.getElementById('exercise-form');
    exerciseForms.addEventListener('submit', addExercises);

});

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

        // Clear field after input
        document.getElementById('exercise-input').value = '';

        // Alert User

        if (exerciseInputs === '') {
            confirm("Please Add Exercise!");
            newExercise.remove('li')
        }
    
    };

// Remove Exercises from List

// Drag Exercise to Calendar

// BMI Inputs

// BMI Calculations

// BMI Output

