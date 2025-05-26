const producePrices = [
  { name: "Tomatoes", price: "₹30/kg", market: "Village Market A" },
  { name: "Potatoes", price: "₹20/kg", market: "Town Market B" },
  { name: "Onions", price: "₹25/kg", market: "City Market C" },
];

const nearbyBuyers = [
  { name: "Ravi Traders", product: "Tomatoes", contact: "9876543210", location: "5 km away" },
  { name: "Local Foods", product: "Onions", contact: "9123456780", location: "3 km away" },
  { name: "FreshMart", product: "Potatoes", contact: "9090909090", location: "6 km away" },
];

function displayData(filter = "") {
  const marketDiv = document.getElementById("marketPrices");
  const buyersDiv = document.getElementById("buyers");
  marketDiv.innerHTML = "";
  buyersDiv.innerHTML = "";

  producePrices
    .filter(item => item.name.toLowerCase().includes(filter))
    .forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${item.name}</h3><p>Price: <span class="price">${item.price}</span></p><p>Market: ${item.market}</p>`;
      marketDiv.appendChild(card);
    });

  nearbyBuyers
    .filter(buyer => buyer.product.toLowerCase().includes(filter))
    .forEach(buyer => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${buyer.name}</h3><p>Product: ${buyer.product}</p><p>Contact: ${buyer.contact}</p><p>Location: ${buyer.location}</p>`;
      buyersDiv.appendChild(card);
    });
}

document.getElementById("search").addEventListener("input", (e) => {
  displayData(e.target.value.toLowerCase());
});

// Initial load
displayData();
