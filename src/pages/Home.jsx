import BestSeller from "../components/home/BestSeller";
import Blog from "../components/home/Blog";
import HomeHero from "../components/home/HomeHero";
import NewsLetter from "../components/home/NewsLetter";
import Reviews from "../components/home/Reviews";
import WhyChooseUs from "../components/home/WhyChooseUs";
import MainLayout from "../components/layout/MainLayout";

const Home = () => {
	return (
		<MainLayout>
			<HomeHero />
			<WhyChooseUs />
			<BestSeller />
			<Reviews />
			{/*
			<Blog />
			<NewsLetter /> */}
		</MainLayout>
	);
};

export default Home;
