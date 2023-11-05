import { searchNavItems } from "../../data";

// Components
import SearchNavItem from "../search-nav-item/SearchNavItem";
import MainButton from "../main-button/MainButton";

// Components - Material UI
import { Box, Container } from "@mui/material";

// images / Icons
import navBtnIcon from "../../assets/search-nav/nav-btn-icon.svg";

const SearchNav = () => {
	return (
		<Container
			sx={{
				mt: 23,
				padding: "0 30px 0 30px",
				maxWidth: {
					xs: "400px",
					md: "1200px",
				},
			}}
			disableGutters
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: { xs: "flex-start", md: "center" },
					justifyContent: "space-between",
					backgroundColor: "#FFF",
					borderRadius: "12px",
					p: {
						xs: 2,
						md: 1,
					},
					mb: {
						xs: 2,
						md: 0,
					},
				}}
			>
				{searchNavItems.map((item) => (
					<SearchNavItem
						key={item.id}
						normalText={item.normalText}
						boldText={item.boldText}
                        iconImg={item.icon}
					/>
				))}
				<MainButton iconImg={navBtnIcon} />
			</Box>
		</Container>
	);
};
export default SearchNav;
