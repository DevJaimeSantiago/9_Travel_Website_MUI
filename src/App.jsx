// Components
import Hero from "./components/hero/Hero";
import Destinations from "./components/destinations/Destinations";
import HotelAndRestaurants from "./components/hotels-and-restaurants/HotelAndRestaurants";
import Travel from "./components/travel/Travel";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<>
			<Hero />
			<Destinations />
			<HotelAndRestaurants />
			<Travel />
			<AboutUs />
		</>
	);
};
export default App;
