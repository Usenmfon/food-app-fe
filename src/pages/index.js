import Head from "next/head";
import DefaultLayout from "../../layouts";
import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import Vendors from "../../components/vendors";



import { styled, } from '@mui/material/styles';

const MuiTypography = styled(Typography)({
    fontWeight: 900,
    fontStyle: "italic"
})

export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="Biite Landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
            <Grid container gap={1} display="flex" flexDirection="column" alignContent="center" paddingTop="5rem">
                <Grid item md={12} lg={12} xs={12} display="flex" flexDirection="column" textAlign="center">
                  <MuiTypography variant="h1" color="primary" sx={{ fontStyle: "normal" }}>Order</MuiTypography>
                  <MuiTypography variant="h2" color="custom.blue" >Delicious Meals From Your <br/>
                    Favourite Vendors
                  </MuiTypography>
                  <Typography variant="subtitle1" color="custom.blue">Order Delicious Meals From Your Favourite  Vendors</Typography>
                </Grid>
                <Grid item md={12} xs={12} textAlign="center">
                  <Button variant="contained" sx={{ width: {md: '35vw', xs: '70vw'}, color: "white" }}>Place an order</Button>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Image src="/images/bakery.png" layout="responsive" width="500" height="500" alt="bakery"></Image>
                </Grid>
            </Grid>
            <Vendors />
      </DefaultLayout>
    </>
  );
}
