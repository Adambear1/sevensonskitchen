export default [
    {
        type: "Chicken",
        offers: [
            {title: "Full Order", price: 25},
            {title: "Half Order", price: 15},
            {title: "Quarter Order", price: 10},
            {title: "Three Wings", price: 10},
        ]

    },
    {
        type: "Ribs",
        offers: [
            {title: "Full Slab", price: 30, misc: "Comes with Rib Tips"},
            {title: "8 Bones", price: 20},
            {title: "4 Bones", price: 15},
            {title: "Rib Tip", price: 10},
        ]
    },
    {
        type: "Brisket",
        offers: [
            {title: "Whole Brisket (per lb)", price: 18},
            {title: "10-12oz", price: 25},
            {title: "6-8oz", price: 15},
        ]
    },
    {
        type: "Combo Plates",
        offers: [
            {title: "Ribs + Chicken", price: 20, misc: "Three Ribs or 6-8oz rib tips with quarter Chicken"},
            {title: "Substitute 6oz Brisket", price: 25},
        ]
    },
    {
        type: "Sandwiches",
        offers: [
            {title: "Pulled Pork", price: 6},
            {title: "Pulled Chicken", price: 6},
            {title: "Brisket", price: 8},
            {title: "BBQ Hot Dog Link", price: 6, misc: "Comes with pulled BBQ meat on top."},
            {title: "BBQ Mac n Cheese Bowl", price: 10, misc: "Comes with pulled BBQ meat on top."},
        ]
    },
    {
        type: "Sides",
        pricing: {eight: 2.5, sixteen: 5, thirtytwo: 10},
        offers: [
            {title: "Mac n Cheese"},
            {title: "Baked Beans"},
            {title: "Collard Greens"},
            {title: "Fried Corn",},
            {title: "Roasted Garlic + Cheesed Mashed Potatoes"},
            {title: "Smoked Potatoes"},
            {title: "White Bread"},
            {title: "Cornbread"},
            {title: "Chips"},
            {title: "Cornbread"},
        ]
    },
    {
        type: "Drink",
        offers: [
            {title: "Water", price: 1},
            {title: "Soda/Juice", price: 2},
        ]
    },
    {
        type: "Desserts",
        offers: [
            {title: "Pound Cake", price: 3},
            {title: "Lemon Pound Cake", price: 3},
            {title: "Banana Nut Pound Cake", price: 3},
            {title: "Banana Pudding", price: 3},
        ]
    }
]