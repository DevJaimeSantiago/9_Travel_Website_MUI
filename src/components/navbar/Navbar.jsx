import { useState } from "react";
import { navItems } from "../../data.js";

// Components - Material UI
import {
	AppBar,
	Box,
	Container,
	Drawer,
	Link,
	Typography,
} from "@mui/material";

// Material icons - Material UI
import MenuIcon from "@mui/icons-material/Menu";

// images
import logo from "../../assets/main/logo.svg";
import UserAvatar from "../../assets/main/user-avatar.svg";

const Navbar = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

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
						<Typography
							sx={{
								fontWeight: "600",
								fontSize: "14px",
								lineHeight: "21px",
								color: "#FFF",
							}}
						>
							Jaime Santiago
						</Typography>
					</Box>
					<img
						src={UserAvatar}
						alt="avatar-user"
						style={{
							cursor: "pointer",
						}}
					/>
				</Box>
				<MenuIcon
					sx={{
						display: {
							xs: "block",
							lg: "none",
						},
						cursor: "pointer",
						color: "#FFF",
					}}
					onClick={() => setOpenMobileMenu(true)}
				/>
				<Drawer
					anchor="left"
					open={openMobileMenu}
					onClose={() => setOpenMobileMenu(false)}
				>
					<Box
						sx={{
							position: "relative",
							width: 250,
							backgroundColor: "#5243C2",
							height: "100%",
							py: 3,
							px: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 5,
						}}
						role="presentation"
						onClick={() => setOpenMobileMenu(false)}
						onKeyDown={() => setOpenMobileMenu(false)}
					>
						<Box
							sx={{
								display: "flex",
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
								<Typography
									sx={{
										fontWeight: "600",
										fontSize: "14px",
										lineHeight: "21px",
										color: "#FFF",
									}}
								>
									Jaime Santiago
								</Typography>
							</Box>
							<img
								src={UserAvatar}
								alt="avatar-user"
								style={{
									cursor: "pointer",
								}}
							/>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: 3,
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
						<Typography
							sx={{
								color: "#FFF",
								fontWeight: "500",
								cursor: "pointer",
								position: "absolute",
								bottom: "14px",
								left: "50%",
								transform: "translateX(-50%)",
							}}
						>
							© 2rism
						</Typography>
					</Box>
				</Drawer>
			</Container>
		</AppBar>
	);
};
export default Navbar;
