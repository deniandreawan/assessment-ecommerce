import Head from "next/head";
import { Box, Container } from "@material-ui/core";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mini Ecommerce</title>
      </Head>
      <Navbar />
      <Box minHeight="100vh">
        <Container maxWidth="md">{children}</Container>
      </Box>
    </>
  );
}
