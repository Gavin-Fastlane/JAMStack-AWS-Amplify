const createPrismicLink =  require("apollo-link-prismic").createPrismicLink;
const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
const ApolloClient = require("@apollo/client/core").ApolloClient;
// import gql from "graphql-tag";



global.client = global.client || new ApolloClient({
  link: createPrismicLink({
    uri: "https://tech-hunt.prismic.io/graphql",
    accessToken: "MC5ZajJYNHhFQUFDSUE4aUVv.77-977-9Le-_ve-_vRfvv71K77-977-977-977-9JDvvv71x77-9OkHvv719EHjvv73vv73vv73vv70gMFQzXw"
  }),
  cache: new InMemoryCache()
});

module.exports = global.client;