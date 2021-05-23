import { useRouter } from "next/router";
import withApollo from "../apollo/client";
import Product from "../components/Product";
import Category from "../components/Category";
import { GET_URL_RESOLVER } from "../apollo/queries/getUrlResolver";
import { useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useQuery(GET_URL_RESOLVER, {
    variables: { url: `${slug}.html` },
  });
  const resolver = data?.urlResolver || {};

  if (resolver.type === "PRODUCT") {
    return (
      <Layout>
        <Product slug={slug} />
      </Layout>
    );
  }

  if (resolver.type === "CATEGORY") {
    return (
      <Layout>
        <Category id={resolver.id} />
      </Layout>
    );
  }

  return <Loading />;
}

export default withApollo({ ssr: true })(Slug);
