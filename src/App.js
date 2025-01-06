import React from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import theme from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Container>
				<section id="home"></section>
				<section id="about">
					<AboutMe />
				</section>
				<section id="projects">
					<Projects />
				</section>
				<section id="contact">
					<Contact />
				</section>
			</Container>
		</ThemeProvider>
	);
}
export default App;
