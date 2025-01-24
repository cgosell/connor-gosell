import React from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Box,
	Chip,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import GosellGardens from "../images/GosellGardens.png";
import ops from "../images/ops.JPG";
import { Email } from "@mui/icons-material";

const projects = [
	{
		title: "All Round Contracting",
		description:
			"A small landscaping and snow removal company in Inver Grove Heights, MN.",
		imageUrl:
			"https://allroundcontractingllc.com/static/media/ARC.fce879f1b4533f68cf02.png",
		services: ["Snow Removal", "Landscaping", "Tree Installation"],
		servicesLink: "https://allroundcontractingllc.com/services",
		link: "https://allroundcontractingllc.com",
		phone: "651-239-4444",
		email: "contactus@allroundcontractingllc.com",
		active: true,
	},
	{
		title: "Gosell Gardens",
		description:
			"Family-owned farm located in Inver Grove Heights, MN offering a wide variety of annuals, perrenials, trees, shrubs and produce for sale.",
		imageUrl: GosellGardens,
		services: ["Annuals", "Perrenials", "Trees", "Shrubs", "Produce"],
		servicesLink: "https://gosellgardens.com",
		link: "https://gosellgardens.com",
		email: "connor@gosellgardens.com",
		active: true,
	},
	{
		title: "No Line Feast",
		description:
			"A food ordering system for restaurants that allows customers to order food from their phone.",
		imageUrl:
			"https://nolinefeast.com/static/media/NoLineLogo.639e935d76429259f2c7.jpeg",
		services: ["Food Ordering", "Mobile SaaS"],
		link: "https://nolinefeast.com",
	},
	{
		title: "Antler Card",
		description: "A digital timecard system for small businesses.",
		imageUrl:
			"https://antlercard.com/static/media/AntlerCard.ab9e9b5c35de0897d5f0.png",
		services: ["Timecard", "Mobile SaaS"],
		link: "https://antlercard.com",
	},
	{
		title: "Else If Software Development",
		description:
			"A software development company specializing in small business web applications and SaaS.",
		imageUrl: ops,
		services: ["Web Applications", "SaaS", "Mobile Applications"],
	},
	{
		title: "Connors Plants",
		description:
			"Connors Plants was a tiny backyard nursery and the origin of Gosell Gardens",
		imageUrl:
			"https://connorsplants.com/static/media/ConnorsPlantsLogoTransparentBackground.645ce6d5aa102887581f.png",
		services: ["Annuals", "Perrenials", "Trees", "Shrubs"],
	},
];

function Projects() {
	return (
		<Box my={4}>
			<Typography variant="h2" gutterBottom>
				Projects & Companies
			</Typography>
			<Typography variant="body1" gutterBottom>
				All of these projects were created by Connor Gosell. Some are active and
				some are not. If you have any questions about any of these projects,
				feel free to reach out to me.
			</Typography>
			<Grid container spacing={4}>
				{projects.map((project, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<Card>
							<CardMedia
								component="img"
								height="140"
								image={project.imageUrl}
								alt={project.title}
								style={{ objectFit: "contain" }}
							/>
							<CardContent>
								<Typography variant="h5" component="div">
									{project?.active ? (
										project.title
									) : (
										<Box>
											{project.title} <Chip label="Inactive" color="error" />
										</Box>
									)}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{project.description}
								</Typography>
								<Box mt={2}>
									{project.services.map((service, idx) => (
										<Chip key={idx} label={service} sx={{ mr: 1, mb: 1 }} />
									))}
								</Box>
								<Box display={"flex"} justifyContent={"left"}>
									{project.link && (
										<Box pr={1}>
											<Button
												variant="contained"
												color="primary"
												href={project.link}
												target="_blank"
												sx={{ mt: 2 }}
											>
												Visit Website
											</Button>
										</Box>
									)}
									{project.phone && (
										<Box pr={1}>
											<Button
												variant="contained"
												color="primary"
												href={`tel:${project.phone}`}
												sx={{ mt: 2 }}
											>
												<PhoneIcon />
											</Button>
										</Box>
									)}
									{project.email && (
										<Box pr={1}>
											<Button
												variant="contained"
												color="primary"
												href={`mailto:${project.email}`}
												sx={{ mt: 2 }}
											>
												<Email />
											</Button>
										</Box>
									)}
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default Projects;
