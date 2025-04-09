import { Box, TextField, Typography } from "@mui/material";

const SignInInput = ({ inputCategory, placeholder }) => {
    return (
        <Box>
            <Typography sx={{ mb: 1 }}>{inputCategory}</Typography>
            <TextField
                fullWidth
                placeholder={placeholder}
                variant="outlined"
                InputProps={{
                    sx: {
                        input: {
                            padding: "10px",
                        },
                    },
                }}
            ></TextField>
        </Box>
    );
};

export default SignInInput;
