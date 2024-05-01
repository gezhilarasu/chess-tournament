document.addEventListener("DOMContentLoaded", function() {
    const leaderboardList = document.getElementById("leaderboard-list");

    // Dummy data for demonstration
    const players = [
        { rank: 1, name: "Player 1", score: 5 },
        { rank: 2, name: "Player 2", score: 4 },
        { rank: 3, name: "Player 3", score: 3 },
        { rank: 4, name: "Player 4", score: 2 },
        { rank: 5, name: "Player 5", score: 1 }
    ];

    // Populate leaderboard
    players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = `${player.rank}. ${player.name} - Score: ${player.score}`;
        leaderboardList.appendChild(li);
    });
});
