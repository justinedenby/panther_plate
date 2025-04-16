export const restaurants = [
  // ===== William Pitt Union Locations =====
  {
    id: 1,
    name: "True Burger",
    location: "William Pitt Union",
    deliveryTime: "15-25 min",
    image: "/images/true_burg.png",
    menu: [
      {
        id: 101,
        name: "Americana Burger",
        description: "Classic beef burger with cheese, lettuce, tomato, and special sauce",
        price: 8.99,
        calories: 710,
        category: "burgers",
        isVegetarian: false
      },
      {
        id: 102,
        name: "Americana Turkey Burger",
        description: "Juicy turkey burger with all the classic fixings",
        price: 8.99,
        calories: 690,
        category: "burgers",
        isVegetarian: false
      },
      {
        id: 103,
        name: "Sweet Potato Fries",
        description: "Crispy sweet potato fries",
        price: 3.99,
        calories: 200,
        category: "sides",
        isVegetarian: true
      }
    ]
  },
  {
    id: 2,
    name: "Wicked Pie",
    location: "William Pitt Union",
    deliveryTime: "20-30 min",
    image: "/images/wicked_pie.png",
    menu: [
      {
        id: 201,
        name: "Pepperoni Pizza",
        description: "Individual Traditional Pepperoni Pizza",
        price: 9.99,
        calories: 820,
        category: "pizzas",
        isVegetarian: false
      },
      // ... other Wicked Pie items
    ]
  },
  {
    id: 3,
    name: "crEATe",
    location: "William Pitt Union",
    deliveryTime: "15-20 min",
    image: "/images/create.png",
    menu: []
  },
  {
    id: 4,
    name: "Ft. Pitt Subs",
    location: "William Pitt Union",
    deliveryTime: "10-15 min",
    image: "/images/fort_pitt.png",
    menu: []
  },
  {
    id: 5,
    name: "PA Taco Company",
    location: "William Pitt Union",
    deliveryTime: "15-20 min",
    image: "/images/pa_taco.png",
    menu: []
  },

  // ===== Petersen Events Center Locations =====
  {
    id: 6,
    name: "Burrito Bowl",
    location: "Petersen Events Center",
    deliveryTime: "10-15 min",
    image: "/images/burrito-bowl.jpg",
    menu: []
  },
  {
    id: 7,
    name: "Chick-fil-A",
    location: "Petersen Events Center",
    deliveryTime: "15-20 min",
    image: "/images/chick-fil-a.jpg",
    menu: []
  },
  {
    id: 8,
    name: "Steel City Kitchen",
    location: "Petersen Events Center",
    deliveryTime: "10-15 min",
    image: "/images/steel-city-kitchen.jpg",
    menu: []
  },

  // ===== Cathedral of Learning Locations =====
  {
    id: 9,
    name: "Pom & Honey",
    location: "Cathedral of Learning",
    deliveryTime: "10-15 min",
    image: "/images/pom_honey.png",
    menu: []
  },
  {
    id: 10,
    name: "The Roost",
    location: "Cathedral of Learning",
    deliveryTime: "10-15 min",
    image: "/images/roost.png",
    menu: []
  },

  // ===== Coffee Shops =====
  {
    id: 11,
    name: "Bottom Line Bistro",
    location: "Mervis Hall",
    deliveryTime: "5-10 min",
    image: "/images/bottom_line.png",
    icon: "☕",
    menu: [
      {
        id: 1101,
        name: "Iced Coffee",
        description: "Cold brewed coffee with ice",
        price: 3.50,
        calories: 5,
        category: "drinks",
        isVegetarian: true
      },
      {
        id: 1102,
        name: "Avocado Toast",
        description: "Sourdough bread with mashed avocado, cherry tomatoes, and feta",
        price: 6.99,
        calories: 320,
        category: "food",
        isVegetarian: true
      }
    ]
  },
  {
    id: 12,
    name: "Bunsen Brewer",
    location: "Chevron Science Building",
    deliveryTime: "5-10 min",
    image: "/images/bunsen_brew.png",
    icon: "☕",
    menu: [
      {
        id: 1201,
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: 4.25,
        calories: 120,
        category: "drinks",
        isVegetarian: true
      }
    ]
  },
  {
    id: 13,
    name: "Cafe 1787",
    location: "Alumni Hall",
    deliveryTime: "5-10 min",
    image: "/images/coffee-shop.jpg",
    icon: "☕",
    menu: []
  },
  {
    id: 14,
    name: "Cafe Victoria",
    location: "Victoria Hall",
    deliveryTime: "5-10 min",
    image: "/images/coffee-shop.jpg",
    icon: "☕",
    menu: []
  },
  {
    id: 15,
    name: "Campus Coffee & Tea Co at Public Health",
    location: "Public Health",
    deliveryTime: "5-10 min",
    image: "/images/public_health.png",
    icon: "☕",
    menu: []
  },
  {
    id: 16,
    name: "Campus Coffee & Tea Co at Towers",
    location: "Litchfield Towers",
    deliveryTime: "5-10 min",
    image: "/images/coffee-shop.jpg",
    icon: "☕",
    menu: []
  },
  {
    id: 17,
    name: "Campus Coffee & Tea Co at Sutherland",
    location: "Sutherland Hall",
    deliveryTime: "5-10 min",
    image: "/images/coffee-shop.jpg",
    icon: "☕",
    menu: []
  },
  {
    id: 18,
    name: "RxPresso",
    location: "Salk Hall",
    deliveryTime: "5-10 min",
    image: "/images/coffee-shop.jpg",
    icon: "☕",
    menu: []
  },
  {
    id: 19,
    name: "Sidebar Cafe",
    location: "Barco Law",
    deliveryTime: "5-10 min",
    image: "/images/coffee-shop.jpg",
    icon: "☕",
    menu: []
  }
];

// ===== Location Groupings =====
export const locations = {
  "William Pitt Union": restaurants.filter(r => r.location === "William Pitt Union"),
  "Petersen Events Center": restaurants.filter(r => r.location === "Petersen Events Center"),
  "Cathedral of Learning": restaurants.filter(r => r.location === "Cathedral of Learning"),
  "Coffee Shops": restaurants.filter(r => [
    "Mervis Hall",
    "Chevron Science Building",
    "Alumni Hall",
    "Victoria Hall",
    "Public Health",
    "Litchfield Towers",
    "Sutherland Hall",
    "Salk Hall",
    "Barco Law"
  ].includes(r.location))
};