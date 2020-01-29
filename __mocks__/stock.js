const data = {
  data: [
    {
      id: 1,
      name: "Winter Jacket",
      category: "Men Accessories",
      price: 20,
      image: "https://www.fillmurray.com/500/340",
    },
    {
      id: 2,
      name: "Wrist Watch",
      category: "Men Accessories",
      price: 30,
      image: "https://www.fillmurray.com/500/310",
    },
    {
      id: 3,
      name: "Wrist Band",
      category: "Women Accessories",
      price: 5,
      image: "https://www.fillmurray.com/600/690",
    },
    {
      id: 4,
      name: "Hand bag",
      category: "Women Accessories",
      price: 20,
      image: "https://www.fillmurray.com/500/500",
    },
    {
      id: 5,
      name: "Shoes",
      category: "Children Accessories",
      price: 20,
      image: "https://www.fillmurray.com/500/600",
    },
    {
      id: 6,
      name: "Kids Scarf",
      category: "Children Accessories",
      price: 10,
      image: "https://www.fillmurray.com/500/399",
    },
    {
      id: 7,
      name: "Soccer Ball",
      category: "Sports Accessories",
      price: 20,
      image: "https://www.fillmurray.com/650/400",
    },
    {
      id: 8,
      name: "Base Ball",
      category: "Sports Accessories",
      price: 15,
      image: "https://www.fillmurray.com/400/350",
    },
  ],
};

export const fetchData = (shouldFail = false) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldFail) {
      return reject();
    }

    return resolve(data);
  }, 200);
});

export default data;
