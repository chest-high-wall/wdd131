console.log("🔥 JavaScript is loaded");

const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "images/salt-lake.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 42300,
    imageUrl: "images/laia-temple.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "images/rome-temple.jpg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah",
    dedicated: "1884-05-17",
    area: 119619,
    imageUrl: "images/logan-temple.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "images/paris-temple.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52590,
    imageUrl: "images/tokyo-temple.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17460,
    imageUrl: "images/accra-temple.jpg"
  },
  {
    templeName: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "2022-05-22",
    area: 6861,
    imageUrl: "images/yigo-temple.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah, USA",
    dedicated: "2016-03-20",
    area: 85770,
    imageUrl: "images/provo-temple.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, USA",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "images/payson-temple.jpg"
  }
];

// Footer updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function createTempleCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");

  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
  `;

  return card;
}

function displayTemples(templesArray) {
  const container = document.getElementById("temples-container");
  container.innerHTML = ""; // Clear current content
  templesArray.forEach(temple => {
    container.appendChild(createTempleCard(temple));
  });
}

// Initially show all temples
displayTemples(temples);

function filterTemples(criteria) {
  console.log("Filtering for:", criteria);
  let filtered = [];

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 50000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

// Add event listeners to nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent page jump
    const filter = event.target.getAttribute("data-filter");
    filterTemples(filter);
  });
});
