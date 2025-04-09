import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import {
    Container,
    Box,
    Button,
    Typography,
    Checkbox,
    Link,
    Divider,
} from "@mui/material";
import SignInHeader from "./components/SignInHeader";
import SignInInput from "./components/SignInInput";
import SignInWith from "./components/SignInWith";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                sx={{
                    minHeight: "100vh",
                    width: "100vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Container
                    maxWidth="450px"
                    sx={{
                        py: 4,
                        width: "30%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        margin: "0 auto",
                        gap: 2,
                        border: "1px solid #d3d3d3",
                        borderRadius: 2,
                    }}
                >
                    <SignInHeader />
                    {/* 여기부터 SignInInput */}
                    <SignInInput
                        inputCategory="Email"
                        placeholder="your@email.com"
                    />
                    <SignInInput
                        inputCategory="Password"
                        placeholder="******"
                    />
                    {/* 여기는 그냥 박스 */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        <Checkbox></Checkbox>
                        <Typography>Remember Me</Typography>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#ffffff",
                            color: "#272727",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                        }}
                    >
                        Sign In
                    </Button>
                    <Link
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: "#ffffff",
                        }}
                    >
                        Forgot your password?
                    </Link>
                    <Divider>or</Divider>
                    {/* 여기서부터 SignInWith */}
                    <SignInWith
                        startIcon={<FaGoogle />}
                        signInWith="Sign in with Google"
                    />
                    <SignInWith
                        startIcon={<FaFacebook />}
                        signInWith="Sign in with Facebook"
                    />
                    <Typography
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 0.5,
                        }}
                    >
                        Don't have an account?
                        <Link>Sign up</Link>
                    </Typography>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
