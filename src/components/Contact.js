import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import { LinkedIn } from "@mui/icons-material";

function Contact() {
	return (
		<Box my={4}>
			<Typography variant="h4" gutterBottom>
				Contact Information
			</Typography>
			<Grid2 container spacing={2}>
				<Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
					<Typography variant="body1">
						<strong>All Round Contracting LLC</strong>
					</Typography>
					<Typography variant="body1">
						<strong>Phone:</strong> (651) 239-4444
					</Typography>
					<Typography variant="body1">
						<strong>Email:</strong> connor@allroundcontractingllc.com
					</Typography>
					<Typography variant="body1">
						<strong>Address:</strong> PO Box 2621 Inver Grove Heights, MN 55076
					</Typography>
				</Grid2>
				<Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
					<Typography variant="body1">
						<strong>Gosell Gardens</strong>
					</Typography>
					<Typography variant="body1">
						<strong>Phone:</strong> (651) 239-4444
					</Typography>
					<Typography variant="body1">
						<strong>Email:</strong> connor@gosellgardens.com
					</Typography>
					<Typography variant="body1">
						<strong>Address:</strong> 9226 Old Concord Blvd Inver Grove Heights,
						MN 55076
					</Typography>
				</Grid2>
				<Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
					<Typography variant="h6">
						<strong>Socials</strong>
					</Typography>
					<Typography variant="body1">
						<Link
							href="https://github.com/cgosell"
							target="_blank"
							rel="noopener"
							color="inherit"
							underline="none"
						>
							<GitHubIcon /> GitHub
						</Link>
					</Typography>
					<Typography variant="body1">
						<Link
							href="https://www.linkedin.com/in/connor-g-669b1b131"
							target="_blank"
							rel="noopener"
							color="inherit"
							underline="none"
						>
							<LinkedIn /> LinkedIn
						</Link>
					</Typography>
				</Grid2>
			</Grid2>
		</Box>
	);
}

export default Contact;
