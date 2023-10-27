import { Stack, TextField, Select, MenuItem, InputLabel, Typography, Button, SnackbarContent, Box, Grid } from "@mui/material";
import DefaultLayout from "../../layouts";

export default function Delivery(){
    return (
        <DefaultLayout>
            <Grid container paddingTop="5rem">
            <Grid item md={12} sm={12} xs={12} textAlign="center">
                <Stack sx={{ display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
                    <Typography variant="h4" sx={{ marginBottom: '1rem', width: {md: '50vw', xs: '80vw'}, textAlign: 'left'}}>Delivery Information</Typography>
                    <SnackbarContent elevation={0} sx={{ width: {md: '50vw', xs: '80vw'}, background: 'gray' }}
                        message={
                            'We currently deliver to specific areas in Ikot-Ekpene'
                        }
                    />
                </Stack>
                <hr />
            </Grid>
            <Grid item md={12} sm={12} xs={12} >
                <Box component="form" noValidate display="flex" flexDirection="column" alignItems="center" sx={{ mt: 3, }}>
                    <Stack sx={{ textAlign: 'left' }}>
                        <InputLabel htmlFor="name" sx={{ fontWeight: 700, fontSize: "18px",}}>{`Receiver's Name`}</InputLabel>
                        <TextField id="outlined-basic" sx={{ marginBottom: '1.5rem', width: {md: '50vw', xs: '80vw'} }} fullWidth name="name" placeholder="Emmanuel Ekpenyong" variant="filled"/>
                    </Stack>
                    <Stack  sx={{marginBottom: '1.5rem', width: {md: '50vw', xs: '80vw'}, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'  }}>
                        <Stack sx={{ textAlign: 'left', width: {md: '20vw', xs: '35vw'}, }}>
                            <InputLabel htmlFor="phonenumber" sx={{ fontWeight: 700, fontSize: "18px",}}>Phone Number</InputLabel>
                            <TextField id="outlined-basic" name="phonenumber" placeholder="" variant="filled"/>
                        </Stack>
                        <Stack sx={{ textAlign: 'left', width: {md: '20vw', xs: '35vw'} }}>
                            <InputLabel htmlFor="time" sx={{ fontWeight: 700, fontSize: "18px",}}>Expected Delivery Time</InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              variant="filled"
                              name="time"
                            >
                              <MenuItem value={10}>11am - 12pm</MenuItem>
                              <MenuItem value={20}>1pm - 3pm</MenuItem>
                              <MenuItem value={30}>3pm - 6pm</MenuItem>
                            </Select>
                        </Stack>
                    </Stack>
                    <Stack sx={{ textAlign: 'left', marginBottom: '1.5rem', width: {md: '50vw', xs: '80vw'}  }}>
                        <InputLabel htmlFor="address" sx={{ fontWeight: 700, fontSize: "18px",}}>Select Street</InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          variant="filled"
                          fullWidth
                          name="address"
                        >
                          <MenuItem value={10}>Ikot Ekpene</MenuItem>
                        </Select>
                        <Typography>{`Can't find yout street? Select a street close to yours`}</Typography>
                    </Stack>
                    <Stack sx={{ textAlign: 'left', marginBottom: '1.5rem', width: {md: '50vw', xs: '80vw'}  }}>
                        <InputLabel htmlFor="address" sx={{ fontWeight: 700, fontSize: "18px",}}>Delivery Address</InputLabel>
                        <TextField id="outlined-basic" fullWidth name="address" placeholder="Ikot Ekpene" variant="filled"/>
                    </Stack>
                    <Stack sx={{ textAlign: 'left', marginBottom: '2rem', width: {md: '50vw', xs: '80vw'}  }}>
                        <InputLabel htmlFor="note" sx={{ fontWeight: 700, fontSize: "18px",}}>Delivery Note</InputLabel>
                        <TextField id="outlined-basic" multiline rows={3} fullWidth name="note" placeholder="Ikot Ekpene" variant="filled"/>
                    </Stack>
                    <Stack>
                        <Typography sx={{width: {md: '50vw', xs: '80vw', textAlign: 'center', marginBottom: '1rem'}}}>Have something to tell us concerning this delivery, it can be how to locate you etc</Typography>
                    </Stack>
                    <Button type="submit" fullWidth sx={{ marginBottom: '1rem',width: {md: '50vw', xs: '80vw'}, color: 'white' }} variant="contained" color="primary">Proceed to Pay</Button>
                </Box>
            </Grid>
        </Grid>
        </DefaultLayout>
    )
}