document.addEventListener('DOMContentLoaded', function() {
    let addBtn = document.getElementById('exercise-btn');

    addBtn.addEventListener('submit', function(event) {
        if (this.getAttribute('id') === 'exercise-btn') {
            addExercises()
        }
    })

})

// Add/Remove Exercises

function addExercises(event) {

    event.preventDefault();

    let newList = document.getElementById('exercise-group')
    let exerciseInputs = document.getElementById('exercise-input').value;

    let newExercise = document.createElement('li');

    newExercise.className = 'exercise-items';
    newExercise.appendChild(document.createTextNode(exerciseInputs));
    newList.appendChild(newExercise)

}


// Remove Exercises from List

// Drag Exercise to Calendar

// BMI Inputs

// BMI Calculations

// BMI Output

