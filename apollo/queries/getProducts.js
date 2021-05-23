import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($id: String!, $pageSize: Int!, $currentPage: Int!) {
    products(
      filter: { category_id: { eq: $id } }
      pageSize: $pageSize
      currentPage: $currentPage
    ) {
      total_count
      items {
        id
        url_key
        name
        sku
        small_image {
          url
        }
        price_range {
          minimum_price {
            final_price {
              currency
              value
            }
          }
        }
      }
    }
  }
`;
