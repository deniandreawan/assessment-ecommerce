import { useEffect } from "react";
import Link from "next/link";
import { useCategories } from "../hooks/useCategories";
import withApollo from "../apollo/client";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  GridList,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
  description: {
    maxWidth: 500,
    margin: "0 auto 20px auto",
  },
  rootCard: {
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
        <h1>Mini Ecommerce</h1>
        <p className={classes.description}>
          A Shopping Cart built with NextJS, React, Redux, Apollo Client,
          Magento GraphQL API, and Material UI.
        </p>

        <div className={classes.rootCard}>
          {categories.map((item, index) => (
            <GridList cellHeight={320} cols={4} spacing={20}>
              <div>
                <Link href="/[...slug]" as={`/${item.url_key}`} key={index}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className="cardMedia"
                        image={
                          item.productPreviewImage?.items[0]?.small_image
                            ?.url ||
                          "https://swiftpwa-be.testingnow.me/static/version1621477697/frontend/Pearl/weltpixel_custom/en_US/Magento_Catalog/images/product/placeholder/small_image.jpg"
                        }
                        title="Image title"
                      />
                      <CardContent className="cardName">
                        <Typography variant="subtitle2">{item.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </div>
            </GridList>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default withApollo({ ssr: true })(Index);
