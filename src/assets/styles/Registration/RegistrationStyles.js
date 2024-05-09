import { Box, FormControl, TextField, styled } from "@mui/material";

const RegistrationComponent = styled(Box)(({ theme }) => ({
    padding: "2%"
}));

const RegistrationTextFeild = styled(TextField)(({theme})=>({
    marginTop: "2%",
}))

const RegistrationPreferredGames = styled(FormControl)(({theme})=>({
    marginTop: "2%"
}))

export { RegistrationComponent, RegistrationTextFeild, RegistrationPreferredGames };
