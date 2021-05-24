import { GridList, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardProduct } from "../common";
import { useProducts } from "../../hooks/useProducts";
import Header from "./Header";

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

export default function Category({ id }) {
  const classes = useStyles();
  const { products, loadMore, loading } = useProducts({
    categoryId: id,
  });

  return (
    <div className={classes.root}>
      <Header title="Products" />
      <div className={classes.main}>
        {products.map((item, index) => (
          <GridList cellHeight={320} cols={4} spacing={20} key={index}>
            <div key={index}>
              <CardProduct
                link={item.url_key}
                key={index}
                title={item.name}
                subtitle={`Rp ${item.price_range.minimum_price.final_price.value}`}
                image={item.small_image.url}
              />
            </div>
          </GridList>
        ))}
      </div>
      <Button variant="contained" onClick={loadMore} style={{ margin: 50 }}>
        Load More
      </Button>
    </div>
  );
}
