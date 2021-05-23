import { useSelector } from "react-redux";
import { Card } from "@material-ui/core";
import Layout from "../components/Layout";

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <Layout>
      <h1>Cart</h1>
      {cart.map((item, index) => (
        <Card style={{ marginBottom: 20, padding: 20 }} key={index}>
          <h4>{item.name}</h4>
        </Card>
      ))}
    </Layout>
  );
}
