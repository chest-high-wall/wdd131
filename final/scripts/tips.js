const tips = [
  {
    title: "Use the Right Fly",
    description: "Match your fly to local insect hatches for best results.",
    region: "Appalachians"
  },
  {
    title: "Time Your Casts",
    description: "Dawn and dusk are prime feeding times for trout.",
    region: "Southern Rockies"
  },
  {
    title: "Stay Hidden",
    description: "Wear neutral colors and stay low to avoid spooking fish.",
    region: "Ozarks"
  },
  {
    title: "Use a Drift Indicator",
    description: "Helps track subtle strikes in slower-moving water.",
    region: "Blue Ridge Mountains"
  },
  {
    title: "Know the Water",
    description: "Study stream depth and flow to cast to likely feeding spots.",
    region: "Texas Hill Country"
  }
];

// Save how many times the user visited tips page
let visitCount = localStorage.getItem("tipsVisitCount") || 0;
visitCount++;
localStorage.setItem("tipsVisitCount", visitCount);

// DOM Injection
const section = document.querySelector("#tips-section");

if (section) {
  tips.forEach(tip => {
    const card = document.createElement("div");
    card.classList.add("tip-card");
    card.innerHTML = `
      <h4>${tip.title}</h4>
      <p>${tip.description}</p>
      <p><strong>Region:</strong> ${tip.region}</p>
    `;
    section.appendChild(card);
  });

  const notice = document.createElement("p");
  notice.classList.add("visit-counter");
  notice.textContent = `You've viewed this tips page ${visitCount} times.`;
  section.appendChild(notice);
} else {
  console.warn("tips-section element not found.");
}
