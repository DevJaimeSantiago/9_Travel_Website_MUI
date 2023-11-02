import { navItems } from "../../data.js";

// Components - Material UI
import { AppBar, Box, Container, Link, Typography } from "@mui/material";

// Material icons - Material UI
import MenuIcon from "@mui/icons-material/Menu";

// images
import logo from "../../assets/main/logo.svg";

const Navbar = () => {
	return (
		<AppBar
			position="static"
			elevation={0}
			color="transparent"
		>
			<Container
				maxWidth="xl"
				sx={{
					px: 10,
					pt: 3,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: 2,
				}}
				disableGutters
			>
				<img
					src={logo}
					alt="logo"
					style={{ cursor: "pointer" }}
				/>
				<Box
					sx={{
						display: {
							xs: "none",
							lg: "flex",
						},
						alignItems: "center",
						gap: "54px",
					}}
				>
					{navItems.map((navItem) => (
						<Link
							href="#"
							key={navItem.id}
							underline="none"
							color="#FFF"
							sx={{
								fontWeight: "300",
								fontSize: "14px",
								opacity: 0.7,
								"&:hover": {
									opacity: 1,
								},
								"&:first-of-type": {
									opacity: 1,
								},
							}}
						>
							{navItem.name}
						</Link>
					))}
				</Box>
				<Box
					sx={{
						display: {
							xs: "none",
							lg: "flex",
						},
						alignItems: "center",
						gap: "8px",
					}}
				>
					<Box>
						<Typography
							sx={{
								fontWeight: "400",
								fontSize: "14px",
								lineHeight: "21px",
								color: "#FFF",
								opacity: "0.5",
							}}
						>
							Holla.
						</Typography>
					</Box>
				</Box>
			</Container>
		</AppBar>
	);
};
export default Navbar;
