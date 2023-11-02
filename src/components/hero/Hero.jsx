// Components - Material UI
import { Container, Typography } from "@mui/material";

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
		></Container>
	);
};
export default Hero;
