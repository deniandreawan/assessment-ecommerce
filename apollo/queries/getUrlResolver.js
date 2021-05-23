import { gql } from "@apollo/client";

export const GET_URL_RESOLVER = gql`
  query resolveUrl($url: String!) {
    urlResolver(url: $url) {
      id
      redirectCode
      relative_url
      type
    }
  }
`;
