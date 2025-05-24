// Set current year
const yearSpan = document.getElementById('currentyear');
const today = new Date();
yearSpan.textContent = today.getFullYear();

// Set last modified date
const lastMod = document.getElementById('lastModified');
lastMod.textContent = `Last Modified: ${document.lastModified}`;
