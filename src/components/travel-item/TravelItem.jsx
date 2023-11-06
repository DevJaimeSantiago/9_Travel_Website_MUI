// Components - Material UI
import { Box, Typography } from "@mui/material";

// Images - Icons
import calendarIcon from "../../assets/travel/calendar-icon.svg";
import userIcon from "../../assets/travel/user-icon.svg";
import commentsIcon from "../../assets/travel/comments-icon.svg";

const TravelItem = ({
	image,
	location,
	text,
	calendarText,
	userText,
	commentsText,
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				gap: 2,
				flexDirection: {
					xs: "column",
					md: "row",
				},
			}}
		>
			<Box>
				<img
					src={image}
					alt="image"
					style={{
						objectFit: "cover",
						height: "100%",
						maxWidth: "100%",
						cursor: "pointer",
					}}
				/>
			</Box>
			<Box sx={{ position: "relative", maxWidth: "320px" }}>
				<Typography
					sx={{
						fontFamily: "Poppins",
						fontWeight: "600",
						fontSize: "20px",
						color: "#161414",
						mb: 2,
					}}
				>
					{location}
				</Typography>
				<Typography
					sx={{
						fontFamily: "Poppins",
						fontWeight: "400",
						fontSize: "16px",
						color: "#5B4B4B",
						lineHeight: "32px",
						pb: 7,
					}}
				>
					{text}
				</Typography>
			</Box>
		</Box>
	);
};
export default TravelItem;
