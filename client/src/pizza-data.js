const pizzas = [
  {
    name: "Margherita",
    varients: ["small", "medium", "large"],
    sauces: ["None", "Tomato", "Garlic", "Pesto", "Alfredo"],
    cheeses: ["None", "Mozzarella", "Cheddar", "Parmesan"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    sauces_prices: [
      {
        None: 0,
        Tomato: 10,
        Garlic: 15,
        Pesto: 20,
        Alfredo: 25,
      },
    ],
    chees_prices: [
      {
        None: 0,
        Mozzarella: 20,
        Cheddar: 25,
        Parmesan: 30,
      },
    ],
    category: "veg",
    image: "/images/margherita.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    name: "Farmhouse",
    varients: ["small", "medium", "large"],
    sauces: ["None", "Tomato", "Garlic", "Pesto", "Alfredo"],
    cheeses: ["None", "Mozzarella", "Cheddar", "Parmesan"],
    prices: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    sauces_prices: [
      {
        None: 0,
        Tomato: 10,
        Garlic: 15,
        Pesto: 20,
        Alfredo: 25,
      },
    ],
    chees_prices: [
      {
        None: 0,
        Mozzarella: 20,
        Cheddar: 25,
        Parmesan: 30,
      },
    ],
    category: "veg",
    image: "/images/farmhouse.jpg",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    name: "Veggie Paradise",
    varients: ["small", "medium", "large"],
    sauces: ["None", "Tomato", "Garlic", "Pesto", "Alfredo"],
    cheeses: ["None", "Mozzarella", "Cheddar", "Parmesan"],
    prices: [
      {
        small: 180,
        medium: 290,
        large: 460,
      },
    ],
    chees_prices: [
      {
        None: 0,
        Mozzarella: 20,
        Cheddar: 25,
        Parmesan: 30,
      },
    ],
    sauces_prices: [
      {
        None: 0,
        Tomato: 10,
        Garlic: 15,
        Pesto: 20,
        Alfredo: 25,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    image: "/images/veggie_paradise.jpg",
  },
  {
    name: "Chicken Golden Delight",
    varients: ["small", "medium", "large"],
    sauces: ["None", "Tomato", "Garlic", "Pesto", "Alfredo"],
    cheeses: ["None", "Mozzarella", "Cheddar", "Parmesan"],
    prices: [
      {
        small: 249,
        medium: 349,
        large: 599,
      },
    ],
    sauces_prices: [
      {
        None: 0,
        Tomato: 10,
        Garlic: 15,
        Pesto: 20,
        Alfredo: 25,
      },
    ],
    chees_prices: [
      {
        None: 0,
        Mozzarella: 20,
        Cheddar: 25,
        Parmesan: 30,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_golden_delight.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "large"],
    sauces: ["None", "Tomato", "Garlic", "Pesto", "Alfredo"],
    cheeses: ["None", "Mozzarella", "Cheddar", "Parmesan"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    sauces_prices: [
      {
        None: 0,
        Tomato: 10,
        Garlic: 15,
        Pesto: 20,
        Alfredo: 25,
      },
    ],
    chees_prices: [
      {
        None: 0,
        Mozzarella: 20,
        Cheddar: 25,
        Parmesan: 30,
      },
    ],
    category: "nonveg",
    image: "/images/cheesepepperoni.jpg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    name: "Indi Chicken Tikka",
    varients: ["small", "medium", "large"],
    sauces: ["None", "Tomato", "Garlic", "Pesto", "Alfredo"],
    cheeses: ["None", "Mozzarella", "Cheddar", "Parmesan"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 500,
      },
    ],
    sauces_prices: [
      {
        None: 0,
        Tomato: 10,
        Garlic: 15,
        Pesto: 20,
        Alfredo: 25,
      },
    ],
    chees_prices: [
      {
        None: 0,
        Mozzarella: 20,
        Cheddar: 25,
        Parmesan: 30,
      },
    ],
    category: "nonveg",
    image: "/images/IndianTandooriChickenTikka.jpg",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
];
export default pizzas;
