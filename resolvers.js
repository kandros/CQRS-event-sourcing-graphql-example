const resolvers = {
  Query: {
    allProducts: (_parent, _args, context) => context.queries.allProducts(context),
  },
  Mutation: {
    addProduct: (_parent, { input }, context) => {
      return context.commands.addProduct(input, context)
    },
    seedProducts: (_parent, _args, context) => {
      for (let i = 1; i <= 1000; i++) {
        context.commands.addProduct({ name: `product-${i}`, price: 10 * i }, context)
      }
    },
  },
}

module.exports = resolvers
