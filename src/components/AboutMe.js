import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import cartoonFace from "../images/cartoonface.png";

function AboutMe() {
	return (
		<Box my={4}>
			<Typography variant="h1" gutterBottom>
				Who am I?
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} md={3}>
					<img width="100%" src={cartoonFace} alt="Connor Gosell" />
				</Grid>
				<Grid item xs={12} md={9}>
					<Typography variant="body1">
						Who am I is always a difficult question for me - I try so many
						things that it's difficult to narrow down to a short paragraph.
						Throughout my life i've always pushed to find interesting things to
						do. I've always been keen to technology, building things and the
						concept of entrepeneurship or business. It started as{" "}
						<Typography component="span" variant="body1" fontWeight="bold">
							young as 5
						</Typography>{" "}
						when i was coloring antique cars at car shows and selling them to
						the car owners.
					</Typography>
					<Typography variant="body1" mt={2}>
						I attended Illinois State University and studied Computer Science,
						Information Systems and Cybersecurity related items. From there i
						joined a fortune 100 company working on internal enterprise level
						softeware. I've since worked in various industries including
						agriculture, logistics, finance, and technology. I've worked with
						various technologies including Javascript, Node.js, React,
						PostgreSQL and many others.
					</Typography>
					<Typography variant="body1" mt={2}>
						I've come to build a few projects, grow(and fail) a few companies
						and excecute on some really cool ideas. I've built a web app with
						over $100,000 in processed sales. I've worked with various companies
						and technologies to improve business flow and bottom line revenue.
						I've also worked with many individuals to improve their security and
						reduce their risk.
					</Typography>
					<Typography variant="body1" mt={2}>
						When i'm not working, you can find me watching hockey, in the
						garden, or visiting a local brewery. I also enjoy the outdoors and
						traveling.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}

export default AboutMe;
