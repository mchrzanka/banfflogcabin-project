module.exports = {
  routes: [
    {
      method: "GET",
      path: "/seed",
      handler: "seed.seedData",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
