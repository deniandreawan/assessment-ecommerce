import { gql } from "@apollo/client";

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($url_key: String!) {
    products(filter: { url_key: { eq: $url_key } }) {
      items {
        id
        sku
        name
        small_image {
          url
        }
        description {
          html
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
      total_count
    }
  }
`;
