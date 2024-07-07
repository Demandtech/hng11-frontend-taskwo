import BestSeller from "../components/home/BestSeller";
import HomeHero from "../components/home/HomeHero";
import MainLayout from "../components/layout/MainLayout";

const Home = () => {
	return (
		<MainLayout>
			<HomeHero />
			<BestSeller />
		</MainLayout>
	);
};

export default Home;
