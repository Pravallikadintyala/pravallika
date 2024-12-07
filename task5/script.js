// Simulating Events Data
const events = [
    "Broadway Show: Hamilton - Dec 10",
    "Central Park Winter Festival - Dec 15",
    "NYC New Year's Eve Ball Drop - Dec 31",
];

const eventsContainer = document.getElementById('events-container');
eventsContainer.innerHTML = events.map(event => `<p>${event}</p>`).join('');

// Weather API Simulation
const weatherInfo = document.getElementById('weather-info');
setTimeout(() => {
    weatherInfo.innerHTML = `<p>Current Temperature: 48°F</p><p>Condition: Clear Sky</p>`;
}, 1000);

// Form Submit Handling
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering!');
});
