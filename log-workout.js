let loggedWorkouts = [{"date":"2023-10-20","length":"34","name":"Something","exercises":[{"exercise":"[Exercise 1]","reps":"4","sets":"7","weight":"9"}]}]


document.addEventListener('DOMContentLoaded', function () {

    function renderLoggedWorkouts() {
        
        const workoutContainer = document.querySelector('.workout-log');
        workoutContainer.innerHTML = '';
        loggedWorkouts.forEach((workout) => {
            const workoutElement = document.createElement('div');
            workoutElement.classList.add('logged-workout');
            workoutElement.innerHTML = `
                <p><strong>Date:</strong> ${workout.date}</p>
                <p><strong>Length (mins):</strong> ${workout.length}</p>
                <p><strong>Workout Name:</strong> ${workout.name}</p>
                `;

                console.log(workout.exercises);
                for (ex of workout.exercises) {
                let exHTML =
                `<p><strong>Exercise:</strong> ${ex.exercise}
                    <ul>
                        <li><strong>Reps:</strong> ${ex.reps}</li>
                        <li><strong>Sets:</strong> ${ex.sets}</li>
                        <li><strong>Weight:</strong> ${ex.weight}</li>
                    </ul>
                </p>`;

                workoutElement.innerHTML += exHTML;
                }
            workoutContainer.appendChild(workoutElement);
        });
    }

    function logWorkout() {
        const workoutDate = document.getElementById('date').value;
        const workoutLength = document.getElementById('len').value;
        const workoutName = document.getElementById('name').value;

        exerciseList = []
        fieldsets = document.querySelectorAll("fieldset.exercise-set");
        for ( fs of fieldsets ) {

            const workoutExercise = fs.querySelector('.exerciseName').value;
            const workoutReps = fs.querySelector('.reps').value;
            const workoutSets = fs.querySelector('.sets').value;
            const workoutWeight = fs.querySelector('.weight').value;
            exerciseList.push( { "exercise" : workoutExercise, "reps" : workoutReps, "sets" : workoutSets, "weight" : workoutWeight} )
        }

        const workout = {
            date: workoutDate,
            length: workoutLength,
            name: workoutName,
            exercises : exerciseList
        };

        loggedWorkouts.push(workout);
        renderLoggedWorkouts();
        document.getElementById('date').value = '';
        document.getElementById('len').value = '';
        document.getElementById('name').value = '';

        while (document.getElementById("exercise-collection").querySelectorAll("fieldset").length > 1) {
            document.getElementById("exercise-collection").removeChild( document.getElementById("exercise-collection").querySelector("fieldset"));
        }

            fs.querySelector('.exerciseName').value = '';
            fs.querySelector('.reps').value = '';
            fs.querySelector('.sets').value = '';
            fs.querySelector('.weight').value = '';
    }

    const submitButton = document.getElementById('log-workout-button');
    submitButton.addEventListener('click', logWorkout);

    document.getElementById("addExerciseButton").onclick = extendExercises;

    renderLoggedWorkouts();
});

function extendExercises() {
    fieldsets = document.querySelectorAll("fieldset.exercise-set");
    exerciseFields = document.querySelector(".exercise-set").cloneNode(true);
    flds = exerciseFields.querySelectorAll("input");
    for (f of flds) {
        if (f.classList.contains("exerciseName")) {
            f.value = "[Exercise " + (1+fieldsets.length) + "]";
        } else {
            f.value = "";
        }
    }
    document.querySelector("#exercise-collection").appendChild(exerciseFields);
    
}