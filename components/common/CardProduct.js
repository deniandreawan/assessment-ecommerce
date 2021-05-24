import Link from "next/link";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    padding: 5,
    margin: 5,
    borderRadius: 12,
    maxWidth: 200,
    minWidth: 200,
    minHeight: 280,
    maxHeigth: 280,
    "& .cardMedia": {
      paddingTop: "100%",
      maxWidth: 300,
      margin: 8,
      borderRadius: 8,
    },
    "& .cardName": {
      paddingTop: 5,
    },
  },
}));

export default function CardCategory({ image, title, subtitle, link, key }) {
  const classes = useStyles();

  return (
    <Link href="/[...slug]" as={`/${link}`} key={key}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className="cardMedia"
            image={
              image ||
              "https://swiftpwa-be.testingnow.me/static/version1621477697/frontend/Pearl/weltpixel_custom/en_US/Magento_Catalog/images/product/placeholder/small_image.jpg"
            }
            title="Image title"
          />
          <CardContent className="cardName">
            <Typography style={{ fontWeight: "bold" }} variant="subtitle1">
              {title}
            </Typography>
            <Typography variant="subtitle2">{subtitle}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
