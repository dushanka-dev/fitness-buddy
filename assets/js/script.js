document.addEventListener('DOMContentLoaded', function() {
    let addBtn = document.getElementById('exercise-btn');

    addBtn.addEventListener('click', function(event) {
        if (this.getAttribute('id') === 'exercise-btn') {
            alert("Hello")
        }
    })

})