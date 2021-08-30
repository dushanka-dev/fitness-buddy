document.addEventListener("DOMContentLoaded", function() {

    // Exercise List Event Listener
    const exerciseForms = document.getElementById('exercise-form');
    exerciseForms.addEventListener('submit', addExercises);
   
});

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
    
    };

// Remove Exercises from List

// Drag Exercise to Calendar

// BMI Inputs

// BMI Calculations

// BMI Output

