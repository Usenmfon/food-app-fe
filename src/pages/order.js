import { Stack, Typography, SnackbarContent, Card, CardMedia, CardContent, Grid } from "@mui/material";
import DefaultLayout from "../../layouts";

export default function Order(){
    return (
        <DefaultLayout>
            <Grid container paddingTop="5rem">
            <Grid item md={12} sm={12} xs={12} marginX="1rem">
                <Stack sx={{ display: 'flex', marginBottom: '2rem'}}>
                    <Typography variant="h4" sx={{ marginBottom: '1rem', width: {md: '50vw', xs: '70vw'}, textAlign: 'left'}}>Order Information</Typography>
                    <SnackbarContent elevation={0} sx={{ background: 'gray' }}
                        message={
                            'We currently deliver to specific areas in Ikot-Ekpene'
                        }
                    />
                </Stack>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <hr />
            </Grid>
            <Grid item md={12} sm={12} xs={12} marginTop="2rem">
                <OrderedMeals orders={MEALS}/>
            </Grid>
        </Grid>
        </DefaultLayout>
    )
}

function OrderedMeals({ orders }){
    const meals = [];
    orders.forEach((item, index) => {
        meals.push(
            <Card key={index} sx={{ maxWidth: 500, display: 'flex', alignItems: 'center', padding: '.5rem', marginX: "1rem", marginBottom: '1.5rem' }}>
                    <CardMedia
                      sx={{ height: 70, width: 100 }}
                      image={item.img}
                      title="meal"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Stack display="flex" flexDirection="row" justifyContent="space-between" sx={{width: {md: '50vw', xs: '60vw'}}}>
                        <Typography variant="body2" color="text.secondary">
                          {item.meal}
                        </Typography>
                        <Typography sx={{ fontWeight: 'bolder' }} color="primary">N{item.price}</Typography>
                      </Stack>
                    </CardContent>
                </Card>
        )
    })
    return (
        <>
            {meals}
        </>
    )
}

const MEALS = [
    { name: 'Sir Monty', meal: 'Edikang Ikong Soup & Garri', price: 3100, img: '/images/edikang.png' },
    { name: 'Sir Monty', meal: 'Edikang Ikong Soup & Garri', price: 3100, img: '/images/edikang.png' },
    { name: 'Sir Monty', meal: 'Edikang Ikong Soup & Garri', price: 3100, img: '/images/edikang.png' },
]