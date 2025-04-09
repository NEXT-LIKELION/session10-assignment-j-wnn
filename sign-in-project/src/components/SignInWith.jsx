import { Button } from "@mui/material";

const SignInWith = ({ signInWith, startIcon }) => {
    return (
        <Button
            variant="contained"
            sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                border: "1px solid rgba(118,118,118,118)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: 1,
            }}
            startIcon={startIcon}
        >
            {signInWith}
        </Button>
    );
};

export default SignInWith;
