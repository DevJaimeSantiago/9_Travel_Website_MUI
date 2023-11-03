// Components
import Navbar from "../navbar/Navbar";
import MainButton from "../main-button/MainButton"

// Components - Material UI
import { Box, Container, Typography } from "@mui/material";

// imagenes
import BgImage from "../../assets/main/bg-image.svg";
import BtnGlobalIcon from "../../assets/main/btn-global-icon.svg";

const Hero = () => {
	return (
		<Container
			maxWidth="false"
			disableGutters
			sx={{
				p: { xs: 2, sm: 5, md: 2 },
				background: `url(${BgImage}) center center/cover`,
				minHeight: "800px",
				borderRadius: {
					xs: "0px 0px 27px 27px",
					md: "0px 0px 54px 54px",
				},
			}}
		>
			<Box
				sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
			>
				<Navbar />
				<Typography
					sx={{
						color: "#FFF",
						marginTop: "196.5px",
						textAlign: "center",
						fontWeight: "600",
						fontSize: {
							xs: "38px",
							md: "48px",
						},
						lineHeight: "62px",
						mb: 4,
					}}
				>
					Discover the most engaging places
				</Typography>
				<MainButton text="Discover on 3D globe" iconImg={BtnGlobalIcon} />
			</Box>
		</Container>
	);
};
export default Hero;
