let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

for (i = 0; i < restaurants.length; i++) {
  if (restaurants[i].name === "Paesano") {
    console.log(restaurants[i].name);
  }
}

let someRestaurants = restaurants.filter(
  (restaurant) => restaurant.name === "Paesano"
);

console.log(someRestaurants);
