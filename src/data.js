import product1 from "./assets/products/product1.png";
import product2 from "./assets/products/product2.png";
import product3 from "./assets/products/product3.png";
import product4 from "./assets/products/product4.png";
import reviewImg1 from "./assets/home/review1.png";
import reviewImg2 from "./assets/home/review2.png";
import reviewImg3 from "./assets/home/review3.png";
import user1 from "./assets/reviews/user1.png";
import user2 from "./assets/reviews/user2.png";
const products = [
	{
		id: 1,
		image: product1,
		name: "Ceramic pot",
		description: "Recycled Ceramic made with natural benzonite clay",
		review: "2.3k Reviews",
		price: "29,999.99",
		colors: ["#830000", "#383838", "#1D3B4A"],
	},
	{
		id: 2,
		image: product2,
		name: "Spatula",
		description: "Recycled Ceramic made with natural benzonite clay",
		review: "21.3k Reviews",
		price: "29,999.99",
		colors: ["#830000", "#383838", "#1D3B4A"],
	},
	{
		id: 3,
		image: product3,
		name: "Stainless Pan",
		description: "Recycled Ceramic made with natural benzonite clay",
		review: "12.3k Reviews",
		price: "29,999.99",
		colors: ["#830000", "#383838", "#1D3B4A"],
	},
	{
		id: 4,
		image: product4,
		name: "Stainless Pan",
		description: "Recycled Ceramic made with natural benzonite clay",
		review: "1.3k Reviews",
		price: "29,999.99",
		colors: ["#830000", "#383838", "#1D3B4A"],
	},
];

export const reviews = [
	{
		id: 1,
		image: user1,
		name: "Bola Balogun",
		text: "The pictures on the website look so beautiful.  When it was delivered i honestly was not expecting much. Wow",
	},
	{
		id: 2,
		image: user2,
		name: "Jackson Jackson",
		text: "I love this product so much",
	},
];

export const homeReviews = [
	{
		id: 1,
		image: reviewImg1,
		name: "Adeola Babalola",
		proffession: "Culinary Chef",
		text: "“I most definitely use my favorite mug every day”",
	},
	{
		id: 2,
		image: reviewImg2,
		name: "Felix Imade",
		proffession: "Foodie",
		text: "“I love this product, improved my culinary experience”",
	},
	{
		id: 3,
		image: reviewImg3,
		name: "Sarah Obi",
		proffession: "Food Vlogger",
		text: "“I really enjoyed using the ceramic bowls. My videos got so many compliments”",
	},
];

export default products;
