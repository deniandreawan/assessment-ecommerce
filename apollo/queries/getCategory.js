import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categoryList {
      id
      children {
        id
        url_key
        name
        product_count
        children_count
        image
        productPreviewImage: products(pageSize: 1) {
          items {
            small_image {
              url
            }
          }
        }
      }
    }
  }
`;
