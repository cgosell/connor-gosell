import React from "react";
import { Box, Typography } from "@mui/material";

function Contact() {
	return (
		<Box my={4}>
			<Typography variant="h4" gutterBottom>
				Contact Information
			</Typography>
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
				<strong>PO Box:</strong> 2621 Inver Grove Heights, MN 55076
			</Typography>
		</Box>
	);
}

export default Contact;
