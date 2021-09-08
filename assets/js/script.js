document.addEventListener("DOMContentLoaded", function() {

    // Exercise List Event Listener
    // const exerciseForms = document.getElementById('exercise-form');
    document.getElementById('exercise-form').addEventListener('submit', addExercises);

    document.getElementById('exercise-group').addEventListener('click', deleteExercises)

    document.getElementById('bmi-form').addEventListener('submit', bmiResults);

});

// const newList = document.getElementById('exercise-group');
function newExercises() {
    let newList = document.getElementById('exercise-group');
    let exerciseInputs = document.getElementById('exercise-input').value;
    let newExercise = document.createElement('li');

    newExercise.classList.add('exercise-items');
    newExercise.setAttribute('draggable', 'true');
    newExercise.innerText = exerciseInputs;
    newList.appendChild(newExercise);
    
    // Add Draggable Event Listeners
    newExercise.addEventListener('dragstart', dragStart);
    newExercise.addEventListener('touchstart', handleStart, true);

    addDelete(newExercise);

    // Alert User
    if (exerciseInputs === '') {
        confirm("Please Add Exercise!");
        newExercise.remove('li');
    };

};

function addDelete(newExercise) {
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('delete-btn');
    removeBtn.innerText = 'X';
    newExercise.appendChild(removeBtn);
 };

function addExercises(event) {

        event.preventDefault();

        newExercises();
    
        // Clear field after input
    document.getElementById('exercise-input').value = '';
};


// Remove Exercises from List

function deleteExercises(event) {
    let exerciseItems = event.target;
    if(exerciseItems.classList[0] === 'delete-btn') {
        let liItem = exerciseItems.parentElement;
        liItem.remove();
    };
};

// Drag Exercise to Calendar

let exerciseLists = document.querySelectorAll('.exercise-items')
let allDays = document.querySelectorAll('.drop-area')
let dragExercise = null;

exerciseLists.forEach((exerciseList) => {
    exerciseList.addEventListener('dragstart', dragStart)
    exerciseList.addEventListener('touchstart', handleStart, {passive: true});
    exerciseList.addEventListener('touchmove', touchMove, {passive: true})
})

allDays.forEach((day) => {
    day.addEventListener('dragover', dragOver)
    day.addEventListener('dragenter', dragEnter)
    day.addEventListener('dragleave', dragLeave)
    day.addEventListener('drop', dragDrop)

    day.addEventListener('touchend', touchEnd, {passive: true})
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
    clonedExercises = dragExercise.cloneNode(true)
    this.appendChild(clonedExercises)
    // Delete Dragged Exercise Li
    this.addEventListener('click', deleteExercises)
    this.style.border = 'none'
}

// ---- Touch Events 

function handleStart() {
    dragExercise = this;
    console.log('Hello')
}

function touchMove() {
    console.log('Moving')
}

function touchEnd() {
    this.appendChild(dragExercise)
    this.addEventListener('click', deleteExercises)
    console.log('End')
}



// BMI Inputs

function bmiResults(event) {

    event.preventDefault();

    let weight = document.getElementById('user-weight').value;
    let height = document.getElementById('user-height').value;
    let resultSection = document.getElementById('result-section')
    if (weight === '' && height === '') {
        confirm('Please add your weight and height!')
    }
    else if (weight === '') {
        confirm('Please add your weight!')
    } else if (height === '') {
        confirm('Please add your height!')
    } else {
        let calculation = Math.floor((weight / height / height) * 10000);
        resultSection.style.backgroundColor = 'Red'
        let bmiResults = document.getElementById('bmi-results').innerText = (`Your BMI Result: ${calculation}`);
        bmiResults;
    }


}