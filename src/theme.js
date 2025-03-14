import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#dc004e",
		},
		background: {
			default: "#d4d4d4",
		},
	},
	typography: {
		h1: {
			fontSize: "2.5rem",
			fontWeight: 500,
		},
		h2: {
			fontSize: "2rem",
			fontWeight: 500,
		},
		body1: {
			fontSize: "1rem",
		},
	},
});

export default theme;
