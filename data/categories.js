const { v4: uuid } = require("uuid");

const categories = {
  data: [
    { id: uuid(), category: "Beach" },
    { id: uuid(), category: "Mountain" },
    { id: uuid(), category: "Desert" },
    { id: uuid(), category: "Arctic" },
    { id: uuid(), category: "Forest" },
    { id: uuid(), category: "City Life" },
    { id: uuid(), category: "Village Life" },
    { id: uuid(), category: "Adventure" },
    { id: uuid(), category: "Romantic" },
    { id: uuid(), category: "Spiritual" },
    { id: uuid(), category: "Wildlife" },
    { id: uuid(), category: "Historical" },
    { id: uuid(), category: "Luxury" },
    { id: uuid(), category: "Budget" },
    { id: uuid(), category: "Family Friendly" },
    { id: uuid(), category: "Pet Friendly" },
    { id: uuid(), category: "Eco-Friendly" },
    { id: uuid(), category: "Remote Work" },
    { id: uuid(), category: "Nightlife" },
    { id: uuid(), category: "Cultural" },
  ],
};

module.exports = categories;
