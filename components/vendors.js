import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function VendorMap({ vendors }) {
  const rows = [];
  vendors.forEach((item, index) => {
    rows.push(
      <Grid key={index} item md={3} xs={6}>
        <Link href={item.url}>
            <figure>
              <Image src={item.img} width="200" height="200" alt="avatar" />
              <figcaption style={{ fontWeight: 700 }}>{item.name}</figcaption>
            </figure>
        </Link>
      </Grid>
    );
  });
  return (
    <Grid container marginTop="2rem">
      {rows}
    </Grid>
  );
}

export default function VendorList() {
  return (
    <Box padding="4rem" sx={{ background: "#FAF8F5" }}>
      <Typography variant="large" color="custom.blue" sx={{ fontWeight: 900 }}>
        Your Favourite Vendors
      </Typography>
      <VendorMap vendors={VENDORS} />
    </Box>
  );
}


const VENDORS = [
    { name: "Sir Monty's FastFood", description: "This is vendor one", img: "/images/rec-placeholder.png", url: "/vendor/1" },
    { name: "Oliver Tweest", description: "This is vendor one", img: "/images/rec-placeholder.png", url: "/vendor/2"},
    { name: "Ibom Executive", description: "This is vendor one", img: "/images/rec-placeholder.png", url: "/vendor/3"},
    { name: "Grills", description: "This is vendor one", img: "/images/rec-placeholder.png", url: "/vendor/4" },
]

