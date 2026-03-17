// Sample agency data
const agencies = [
    { name: "Fire Rescue", location: [13.0827, 80.2707], contact: "1234567890" },
    { name: "Medical Aid", location: [13.0674, 80.2376], contact: "9876543210" },
    { name: "Flood Relief", location: [13.0456, 80.2577], contact: "5555555555" }
];

// Initialize map
const map = L.map('map').setView([13.0827, 80.2707], 12);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add markers
agencies.forEach(agency => {
    L.marker(agency.location).addTo(map)
        .bindPopup(`<b>${agency.name}</b><br>Contact: ${agency.contact}`);
});

// Populate agency list
const list = document.getElementById('agency-list');
agencies.forEach(agency => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${agency.name}</b> - Contact: ${agency.contact}`;
    list.appendChild(li);
});