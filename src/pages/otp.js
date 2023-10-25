import { Box, Grid, Button, Typography, Stack, TextField, InputLabel, SnackbarContent } from "@mui/material";
import Image from "next/image";

export default function Register(){
    return(
        <Grid container paddingTop="5rem">
            <Grid item md={12} xs={12} textAlign="center">
                <Image src="/images/biite-b.png" width="100" height="70" alt="biite" />
                <Typography variant="h5">Confirm OTP</Typography>
                <Stack sx={{ display: 'flex', alignItems: 'center'}}>
                    <SnackbarContent elevation={0} sx={{ width: {md: '50vw', xs: '70vw'}, background: 'gray' }}
                        message={
                            'An OTP has been sent to your phone input it below to proceed'
                        }
                    />
                </Stack>
            </Grid>
            <Grid item md={12} sm={12} xs={12} >
                <Box component="form" noValidate display="flex" flexDirection="column" alignItems="center" sx={{ mt: 3, }}>
                    <Stack sx={{ textAlign: 'left' }}>
                        <InputLabel htmlFor="otp" sx={{ fontWeight: 700, fontSize: "18px",}}>Enter OTP</InputLabel>
                        <TextField id="outlined-basic" sx={{ marginBottom: '1rem', width: {md: '50vw', xs: '70vw'} }} fullWidth name="otp" variant="filled"/>
                    </Stack>
                    <Button type="submit" fullWidth sx={{ marginBottom: '1rem',width: {md: '50vw', xs: '70vw'}, color: 'white' }} variant="contained" color="primary">Proceed</Button>
                </Box>
            </Grid>
        </Grid>
    )
}