import { Box, Typography } from "@mui/material";

const SignInHeader = ({}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Box
                component="img"
                src="/sitemark_logo.svg"
                alt="Logo"
                sx={{
                    height: 35,
                    marginRight: "auto",
                }}
            ></Box>
            <Typography
                variant="h4"
                component="h1"
                align="left"
                fontWeight="bold"
            >
                Sign In
            </Typography>
        </Box>
    );
};

export default SignInHeader;
