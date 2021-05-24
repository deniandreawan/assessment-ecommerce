import { useEffect } from "react";
import { useCategories } from "../hooks/useCategories";
import withApollo from "../apollo/client";
import { GridList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Layout, CardCategory } from "../components/common";
import { Header, Loading } from "../components/shared";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
  description: {
    maxWidth: 500,
    margin: "0 auto 20px auto",
  },
  main: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  card: {
    padding: 5,
    margin: 5,
    maxWidth: 200,
    minWidth: 200,
    minHeight: 280,
    maxHeigth: 280,
    "& .cardMedia": {
      paddingTop: "100%",
      maxWidth: 200,
    },
    "& .cardName": {
      paddingTop: 5,
    },
  },
}));

function Index() {
  const classes = useStyles();
  const { getCategories, categories, loading } = useCategories();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <div className={classes.root}>
        <Header
          title="Mini Ecommerce"
          subtitle="A Shopping Cart built with NextJS, React, Redux, Apollo Client, Magento
        GraphQL API, and Material UI."
        />
        <div className={classes.main}>
          {categories.map((item, index) => (
            <GridList cellHeight={320} cols={4} spacing={20}>
              <div key={index}>
                <CardCategory
                  image={item.productPreviewImage?.items[0]?.small_image?.url}
                  title={item.name}
                  link={item.url_key}
                  key={index}
                />
              </div>
            </GridList>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default withApollo({ ssr: true })(Index);
