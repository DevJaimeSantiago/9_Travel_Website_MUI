import { hotelsRestaurants } from "../../data";

// Components
import HotelRestaurantItem from "../hotel-restaurant-item/HotelRestaurantItem";
import SecondaryButton from "../secondary-button/SecondaryButton";

// Components - Material UI
import { Box, Container, Typography } from "@mui/material";

const HotelAndRestaurants = () => {
	return (
		<Container
			disableGutters
			maxWidth="xl"
			sx={{
				px: {
					xs: 2,
					sm: 5,
					md: 10,
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
					alignItems: "center",
					justifyContent: "space-between",
					mb: 8,
					gap: 2,
				}}
			>
				<Typography
					sx={{
						fontFamily: "Poppins",
						fontWeight: "600",
						fontSize: "32px",
						color: "#161414",
						textAlign: {
							xs: "center",
							md: "left",
						},
					}}
				>
					Hotels and Restaurants
				</Typography>
				<SecondaryButton text="View All" />
			</Box>
			<Box
				sx={{
					display: "flex",
					gap: 4,
					justifyContent: "space-between",
					alignItems: {
						xs: "center",
						md: "flex-start",
					},
					flexDirection: {
						xs: "column",
						md: "row",
					},
				}}
			>
				{hotelsRestaurants.map((item) => (
					<HotelRestaurantItem
						key={item.id}
						name={item.name}
						location={item.location}
						image={item.image}
						ratingImage={item.ratingImage}
					/>
				))}
			</Box>
		</Container>
	);
};
export default HotelAndRestaurants;
