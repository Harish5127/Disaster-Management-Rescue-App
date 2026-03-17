
# Disaster Management Rescue App

This web application displays registered rescue agencies during natural or man-made disasters. It helps coordinate rescue efforts by showing locations, contact details, and areas of expertise of different agencies.

---

## Features
- **Map View:** Shows locations of rescue agencies on an interactive map.
- **Agency List:** Displays registered agencies with contact information.
- **Easy Expansion:** Can be integrated with real-time GPS or a central database.
- **User-friendly:** Simple interface for quick access to critical information.

---

## Technologies Used
- HTML, CSS, JavaScript
- [Leaflet.js](https://leafletjs.com/) for interactive maps
- OpenStreetMap for map tiles

---

## How to Run
1. Clone the repository or download the files.
2. Open `index.html` in any web browser.
3. The map will show sample agency locations with markers.
4. Update agencies in `script.js` to display more locations.

---

## Project Code

### 1. index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disaster Management App</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
</head>
<body>
    <header>
        <img src="assets/logo.png" alt="Logo" class="logo">
        <h1>Disaster Management Rescue Agencies</h1>
    </header>

    <main>
        <div id="map"></div>
        <h2>Registered Agencies</h2>
        <ul id="agency-list"></ul>
    </main>

    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="script.js"></script>
</body>
</html>
````

---

### 2. style.css

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #007BFF;
    color: white;
    padding: 15px;
    text-align: center;
}

.logo {
    height: 50px;
    vertical-align: middle;
}

#map {
    height: 400px;
    margin: 20px;
    border: 2px solid #007BFF;
}

h2 {
    text-align: center;
    margin-top: 20px;
}

#agency-list {
    max-width: 600px;
    margin: auto;
    padding: 0;
    list-style: none;
}

#agency-list li {
    background: #f0f0f0;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
}
```

---

### 3. script.js

```javascript
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
```

---

## Future Improvements

* Integrate with a real-time database for dynamic updates.
* Add filters based on disaster type, resources, or location.
* Include secure login for agency administrators.
* Enable direct communication between agencies via the platform.

---

## Project Purpose

This application aims to improve disaster response by providing a central platform for rescue agencies to register, share information, and collaborate efficiently during emergencies.

