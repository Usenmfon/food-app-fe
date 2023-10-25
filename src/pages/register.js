import { Box, Grid, Button, Typography, Stack, TextField, InputLabel } from "@mui/material";
import Image from "next/image";

export default function Register(){
    return(
        <Grid container display="flex" flexDirection="column" paddingTop="5rem">
            <Grid item md={12} xs={12} textAlign="center">
                <Image src="/images/biite-b.png" width="100" height="70" alt="biite" />
                <Typography variant="h5">Create an Account</Typography>
                <Typography variant="h5">To Complete Your Order</Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12} >
                <Box component="form" noValidate display="flex" flexDirection="column" alignItems="center" sx={{ mt: 3, }}>
                    <Stack sx={{ textAlign: 'left' }}>
                        <InputLabel htmlFor="name" sx={{ fontWeight: 700, fontSize: "18px",}}>Name</InputLabel>
                        <TextField id="outlined-basic" sx={{ marginBottom: '1rem', width: {md: '50vw', xs: '70vw'}}} fullWidth name="name" variant="filled"/>
                    </Stack>
                    <Stack sx={{ textAlign: 'left' }}>
                        <InputLabel htmlFor="name" sx={{ fontWeight: 700, fontSize: "18px",}}>Phone Number</InputLabel>
                        <TextField id="outlined-basic" sx={{ marginBottom: '2.5rem', width: {md: '50vw', xs: '70vw'}}} fullWidth name="phonenumber" variant="filled"/>
                    </Stack>
                    <Button type="submit" fullWidth sx={{ marginBottom: '1rem', width: {md: '50vw', xs: '70vw'}, color: 'white' }} variant="contained" color="primary">Proceed</Button>
                </Box>
            </Grid>
            <Grid item textAlign="center">
                <Typography> Already have an account? <span style={{ color: '#FF9000' }}>Login</span> </Typography>
            </Grid>
        </Grid>
    )
}