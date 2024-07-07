import BestSeller from "../components/home/BestSeller";
import HomeHero from "../components/home/HomeHero";
import NewsLetter from "../components/home/NewsLetter";
import MainLayout from "../components/layout/MainLayout";

const Home = () => {
	return (
		<MainLayout>
			<HomeHero />
			<BestSeller />
			<NewsLetter />
		</MainLayout>
	);
};

export default Home;
