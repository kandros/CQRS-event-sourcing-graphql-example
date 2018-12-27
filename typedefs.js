const { gql } = require('apollo-server')

const typedefs = gql`
  type Product {
    name: String!
    price: Float!
  }

  type Query {
    allProducts: [Product!]!
  }

  input AddProductInput {
    name: String!
    price: Float!
  }

  type Mutation {
    addProduct(input: AddProductInput): Boolean
    seedProducts: Boolean
  }
`

module.exports = typedefs
