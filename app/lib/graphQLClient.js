import {GraphQLClient} from "graphql-request";

export const getClient=()=>{
   const client = new GraphQLClient("http://gql.hashnode.com");
   return client; 
}