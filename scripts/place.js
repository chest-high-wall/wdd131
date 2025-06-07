document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temp, speed) {
  if (temp <= 50 && speed > 3) {
    return Math.round(
      35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) +
      (0.4275 * temp * Math.pow(speed, 0.16))
    ) + "°F";
  } else {
    return "N/A";
  }
}

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
document.getElementById("chill").textContent = calculateWindChill(temp, speed);
