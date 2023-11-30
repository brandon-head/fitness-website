document.addEventListener('DOMContentLoaded', function () {
    function fetchUserData() {
        fetch('data.php?action=getUsers')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const leaderboardSection = document.querySelector('.leaderboard');
                leaderboardSection.innerHTML = '<h5>Leaderboard</h5>';

                data.forEach(user => {
                    leaderboardSection.innerHTML += `<p>
                        <span>${user.name}</span>
                        <span>Points: </span>
                    </p>`;
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    fetchUserData();

    document.getElementById('fetchUserDataButton').addEventListener('click', fetchUserData);
});
