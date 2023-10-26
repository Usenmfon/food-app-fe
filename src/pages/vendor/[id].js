import { useRouter } from "next/router"; 
import DefaultLayout from "../../../layouts";
import { Grid, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuTabs from "../../../components/tabs"
import VendorName from "../../../components/vendor"
import Link from "next/link";

export default function Vendor(){
    const router = useRouter();
    const id = router.query.id;

    return(
        <DefaultLayout>
            <Grid container paddingTop="5rem" sx={{ paddingX: {md: '4rem', xs: '2rem'} }}>
                <Grid item md={12} sm={12} xs={12} > <Link href="/"> <ArrowBackIcon /> </Link> </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Grid item display="flex" justifyContent="space-between">
                        <Typography>Ordering From</Typography>
                        <ShoppingCartOutlinedIcon />
                    </Grid>
                    <Typography variant="large" sx={{ fontWeight: "bolder" }} >
                        <VendorName names={VENDORS} id={id}/>
                    </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <MenuTabs menu={MENU} id={id} />
                </Grid>
            </Grid>
        </DefaultLayout>
    )
}

const VENDORS = [
    {id: 1, title: "Sir Monty's FastFood"},
    {id: 2, title: "Oliver Tweest"},
    {id: 3, title: "Ibom Executive"},
    {id: 4, title: "Grills"},
];

const MENU = [
   {userId: 1, title: 'Okro Soup', price: '2100', img: '/images/rec-placeholder.png', category: 'meal' }, 
   {userId: 1, title: 'Afang Soup', price: '3100', img: '/images/afang.png', category: 'meal' }, 
   {userId: 1, title: 'Edikang Ikong Soup', price: '3100', img: '/images/edikang.png', category: 'meal' }, 
   {userId: 1, title: 'Editan Soup', price: '2600', img: '/images/editan.png', category: 'meal' }, 
   {userId: 1, title: 'Egusi Soup', price: '2600', img: '/images/egusi.png', category: 'meal' }, 
   {userId: 1, title: 'Vegatable Soup', price: '2600', img: '/images/vegetable.png', category: 'meal' }, 
   {userId: 1, title: 'White Soup', price: '4000', img: '/images/rec-placeholder.png', category: 'meal' }, 
   {userId: 1, title: 'Jollof Rice', price: '1200', img: '/images/jollof.png', category: 'meal' }, 
   {userId: 1, title: 'Fried Rice', price: '1200', img: '/images/fried.png', category: 'meal' }, 
   {userId: 1, title: 'Biscuit', price: '4000', img: '/images/rec-placeholder.png', category: 'snack' }, 
   {userId: 1, title: 'Red Wine', price: '4000', img: '/images/rec-placeholder.png', category: 'drink' }, 
   {userId: 1, title: 'Yoghurt', price: '4000', img: '/images/rec-placeholder.png', category: 'drink' }, 
]