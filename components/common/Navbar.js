import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Badge,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingBasket } from "@material-ui/icons";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const { cart } = useSelector((state) => state.cart);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Ecommerce
            </Typography>
            <Link href="/cart">
              <IconButton
                aria-label="cart"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingBasket />
                </Badge>
              </IconButton>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
