const mockMenu = {
  data: {
    cards: [
      {
        card: {
          card: {
            info: {
              name: "Pizza Hut",
              cuisines: ["Pizzas", "Fast Food"],
              costForTwoMessage: "₹350 for two",
            },
          },
        },
      },
      {
        card: {
          card: {
            title: "Recommended",
            itemCards: [
              {
                card: {
                  info: {
                    id: "1",
                    name: "Margherita Pizza",
                    price: 19900,
                  },
                },
              },
              {
                card: {
                  info: {
                    id: "2",
                    name: "Veg Farmhouse",
                    price: 29900,
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
};

export default mockMenu;
