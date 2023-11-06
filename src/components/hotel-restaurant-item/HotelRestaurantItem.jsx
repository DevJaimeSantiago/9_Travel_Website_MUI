// Images
import hotelsLocationIcon from "../../assets/hotels-restaurants/hotels-location-icon.svg";

// Components - Material UI
import { Box, Typography } from "@mui/material";

const HotelRestaurantItem = ({ name, location, image, ratingImage }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Box
				sx={{
					width: {
						xs: "70vw",
						sm: "60vw",
						md: "auto",
					},
					display: "flex",
					justifyContent: "center",
				}}
			>
				<img
					src={image}
					alt="imageHotels"
					style={{ width: "100%", objectFit: "cover", cursor: "pointer" }}
				/>
			</Box>
			<Typography
				sx={{
					mt: 1.25,
					fontFamily: "Poppins",
					fontWeight: "500",
					fontSize: "16px",
					color: "#161414",
					maxWidth: "252px",
				}}
			>
				{name}
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: {
						xs: "column",
						lg: "row",
					},
					alignItems: {
						xs: "flex-start",
						lg: "center",
					},
					justifyContent: "space-between",
					gap: 1,
					mt: 1.5,
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
					<img
						src={hotelsLocationIcon}
						alt="hotelsLocationIcon"
					/>
					<Typography
						sx={{
							fontFamily: "Poppins",
							fontWeight: "400",
							fontSize: "13px",
							color: "#979797",
						}}
					>
						{location}
					</Typography>
				</Box>
				<img
					src={ratingImage}
					alt="ratingImage"
				/>
			</Box>
		</Box>
	);
};
export default HotelRestaurantItem;
