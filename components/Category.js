import Link from "next/link";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  GridList,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useProducts } from "../hooks/useProducts";
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

export default function Category({ id }) {
  const classes = useStyles();
  const { products, loadMore, loading } = useProducts({
    categoryId: id,
  });

  return (
    <div className={classes.root}>
      <h1>Products</h1>
      <div className={classes.rootCard}>
        {products.map((item, index) => (
          <GridList cellHeight={320} cols={4} spacing={20} key={index}>
            <div>
              <Link href="/[...slug]" as={`/${item.url_key}`}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className="cardMedia"
                      image={
                        item.small_image.url ||
                        "https://swiftpwa-be.testingnow.me/static/version1621477697/frontend/Pearl/weltpixel_custom/en_US/Magento_Catalog/images/product/placeholder/small_image.jpg"
                      }
                      title="Image title"
                    />
                    <CardContent className="cardName">
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: "bold" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle2">
                        Rp {item.price_range.minimum_price.final_price.value}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </GridList>
        ))}
      </div>
      <Button
        variant="contained"
        onClick={loadMore}
        style={{ marginBottom: 20 }}
      >
        Load More
      </Button>
    </div>
  );
}
