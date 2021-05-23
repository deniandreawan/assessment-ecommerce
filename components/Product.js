import { Grid, Button } from "@material-ui/core";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import { useProductDetails } from "../hooks/useProductDetails";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  title: {
    margin: 0,
  },
  formControl: {
    marginBottom: 20,
    minWidth: 200,
  },
}));

export default function Product({ slug }) {
  const classes = useStyles();
  const { product, loading, addToCart } = useProductDetails({
    url: `${slug}`,
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={3}>
          <img src={product.small_image.url} width="100%" />
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          <h1 className={classes.title}>{product.name}</h1>
          <p>{product.description.html}</p>
          <p> Rp {product.price_range.minimum_price.final_price.value}</p>
          <Button variant="contained" color="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
