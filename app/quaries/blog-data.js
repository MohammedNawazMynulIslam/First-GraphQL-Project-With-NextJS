import { getClient } from "../lib/graphQLClient";
import { gql } from "graphql-request";
export const getAllPosts = async (tags) => {
  const client = getClient();
  const data = await client.request(
    gql`
      query allPosts ($tag: [ObjectId!]){
      publication(host: "blog.greenroots.info"){
      title
      posts(first:20, filter: {tags: $tag}){
      pageInfo{
      hasNextPage
      endCursor
      }
      edges{
      node{
      author{
      name
      profilePicture
      }
      title
      subtitle
      slug
      brief
      coverImage{
      url}
      tags{
      name
      slug
      id
   }
publishedAt
readTimeInMinutes
      }
      }
      }
      }
      }
      `,
    { tags: tags },
  );

  return data.publication.posts.edges;
};

export const getPost = async (slug) => {
  const client = getClient();
  if (!slug || typeof slug !== "string") {
    throw new Error(`getPost(slug) expected a non-empty string, got: ${slug}`);
  }
  const data = await client.request(
    gql`
      query postDetails($slug: String!){
      publication(host: "blog.greenroots.info"){
      post(slug: $slug){
      author{
      name
      profilePicture
      }
      publishedAt
      readTimeInMinutes
      title
      content{
      html
   }
      coverImage{
      url}
      tags{
      name
      slug
      id
      }
      }
      }
  }
      `,
    { slug },
  );
  return data.publication.post;
};
