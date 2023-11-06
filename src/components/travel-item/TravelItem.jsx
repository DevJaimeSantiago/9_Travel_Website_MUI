// Components - Material UI
import { Box } from "@mui/material";

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
		</Box>
	);
};
export default TravelItem;
