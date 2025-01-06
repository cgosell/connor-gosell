import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
	const handleScroll = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Connor Gosell
				</Typography>
				<Button color="inherit" onClick={() => handleScroll("home")}>
					Home
				</Button>
				<Button color="inherit" onClick={() => handleScroll("about")}>
					About
				</Button>
				<Button color="inherit" onClick={() => handleScroll("projects")}>
					Projects
				</Button>
				<Button color="inherit" onClick={() => handleScroll("contact")}>
					Contact
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
