// images
import aboutUsImg from "../../assets/main/about-us-img.svg";

// Components
import SecondaryButton from "../secondary-button/SecondaryButton";

// Components - Material UI
import { Box, Container, Typography } from "@mui/material";

const AboutUs = () => {
	return (
		<Container
			disableGutters
			maxWidth="lg"
			sx={{
				px: {
					xs: 2,
					sm: 5,
					md: 3.5,
				},
				my: 15,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: {
						xs: "column",
						md: "row",
					},
					justifyContent: "center",
					gap: 4,
					alignItems: "center",
				}}
			>
				<Box sx={{ flex: 1 }}>
					<Typography
						sx={{
							fontFamily: "Poppins",
							fontWeight: "600",
							fontSize: "32px",
							lineHeight: "48px",
							color: "#161414",
							textAlign: {
								xs: "center",
								sm: "left",
							},
						}}
					>
						About Us
					</Typography>

					<Typography
						sx={{
							fontFamily: "Poppins",
							fontWeight: "400",
							fontSize: "16px",
							lineHeight: "32px",
							color: "#5B5B5B",
							my: 4,
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
						eveniet libero tenetur. Itaque quis enim provident adipisci
						voluptate, vel ipsum amet vitae reiciendis dolor, officia inventore
						dolore alias molestias error sunt ipsa, iure ratione. Perspiciatis
						similique velit nemo, repudiandae incidunt natus sapiente quisquam
						enim!
					</Typography>
					<SecondaryButton text="Read More" />
				</Box>

				<Box sx={{ flex: 1 }}>
					<img
						src={aboutUsImg}
						alt="aboutUsImg"
						style={{
							borderRadius: "24px",
							maxWidth: "100%",
						}}
					/>
				</Box>
			</Box>
		</Container>
	);
};
export default AboutUs;
