export const CartIcon = ({ color = "#B5B5B5" }) => {
	return (
		<svg
			className="h-6 w-6"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.5 4.5H22.5L20.25 14.25H6.75M20.25 17.25H7.5L3.75 1.5H1.5"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.75 21.75C19.5784 21.75 20.25 21.0784 20.25 20.25C20.25 19.4216 19.5784 18.75 18.75 18.75C17.9216 18.75 17.25 19.4216 17.25 20.25C17.25 21.0784 17.9216 21.75 18.75 21.75Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke={color}
			/>
			<path
				d="M9 21.75C9.82843 21.75 10.5 21.0784 10.5 20.25C10.5 19.4216 9.82843 18.75 9 18.75C8.17157 18.75 7.5 19.4216 7.5 20.25C7.5 21.0784 8.17157 21.75 9 21.75Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke={color}
			/>
		</svg>
	);
};

export const SearchIcon = () => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			className="w-6 h-6"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.5 14H13.71L13.43 13.73C14.4439 12.554 15.0011 11.0527 15 9.5C15 8.21442 14.6188 6.95772 13.9046 5.8888C13.1903 4.81988 12.1752 3.98676 10.9874 3.49479C9.79973 3.00282 8.49279 2.87409 7.23192 3.1249C5.97104 3.3757 4.81285 3.99477 3.90381 4.90381C2.99477 5.81285 2.3757 6.97104 2.1249 8.23192C1.87409 9.49279 2.00282 10.7997 2.49479 11.9874C2.98676 13.1752 3.81988 14.1903 4.8888 14.9046C5.95772 15.6188 7.21442 16 8.5 16C10.11 16 11.59 15.41 12.73 14.43L13 14.71V15.5L18 20.49L19.49 19L14.5 14ZM8.5 14C6.01 14 4 11.99 4 9.5C4 7.01 6.01 5 8.5 5C10.99 5 13 7.01 13 9.5C13 11.99 10.99 14 8.5 14Z"
				className="fill-lightgrey"
			/>
		</svg>
	);
};

export const UserIcon = () => {
	return (
		<svg
			className="w-6 h-6"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z"
				className="stroke-lightgrey"
				strokeWidth="2"
			/>
			<path
				d="M4 18.6667C4 17.429 4.42143 16.242 5.17157 15.3668C5.92172 14.4917 6.93913 14 8 14H16C17.0609 14 18.0783 14.4917 18.8284 15.3668C19.5786 16.242 20 17.429 20 18.6667C20 19.2855 19.7893 19.879 19.4142 20.3166C19.0391 20.7542 18.5304 21 18 21H6C5.46957 21 4.96086 20.7542 4.58579 20.3166C4.21071 19.879 4 19.2855 4 18.6667Z"
				className="stroke-lightgrey"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const LogoIcon = () => {
	return (
		<svg
			width="127"
			height="18"
			viewBox="0 0 127 18"
			fill="none"
			className="w-24 lg:w-32 h-5"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.4023 0.628906L18.668 17H14.2852L12.9375 13.7656H5.61328L4.39453 17H0.0703125L6.66797 0.628906H11.4023ZM11.7305 10.9062L9.09375 4.54297L6.69141 10.9062H11.7305ZM29.8594 13.9766V16.4727C28.5 16.9648 27.2539 17.2109 26.1211 17.2109C24.1758 17.2109 22.6211 16.6914 21.457 15.6523C20.293 14.6055 19.7109 13.2227 19.7109 11.5039C19.7109 9.82422 20.2969 8.44141 21.4688 7.35547C22.6484 6.26172 24.1484 5.71484 25.9688 5.71484C27.1406 5.71484 28.3828 5.95703 29.6953 6.44141V9.03125C28.7344 8.53906 27.7891 8.29297 26.8594 8.29297C25.8203 8.29297 24.9883 8.58203 24.3633 9.16016C23.7383 9.73828 23.4258 10.5117 23.4258 11.4805C23.4258 12.457 23.7305 13.2461 24.3398 13.8477C24.9492 14.4414 25.75 14.7383 26.7422 14.7383C27.4766 14.7383 28.5156 14.4844 29.8594 13.9766ZM37.8984 5.71484C39.6328 5.71484 41.1016 6.22266 42.3047 7.23828C43.5156 8.25391 44.1211 9.66797 44.1211 11.4805C44.1211 13.3008 43.5078 14.7109 42.2812 15.7109C41.0547 16.7109 39.5938 17.2109 37.8984 17.2109C36.0625 17.2109 34.5586 16.6797 33.3867 15.6172C32.2227 14.5469 31.6406 13.1602 31.6406 11.457C31.6406 9.72266 32.2344 8.33203 33.4219 7.28516C34.6172 6.23828 36.1094 5.71484 37.8984 5.71484ZM37.8984 15.1484C39.5625 15.1484 40.3945 13.8945 40.3945 11.3867C40.3945 8.98828 39.5625 7.78906 37.8984 7.78906C37.1016 7.78906 36.4766 8.10547 36.0234 8.73828C35.5781 9.37109 35.3555 10.2773 35.3555 11.457C35.3555 13.918 36.2031 15.1484 37.8984 15.1484ZM52.1719 5.71484C53.9062 5.71484 55.375 6.22266 56.5781 7.23828C57.7891 8.25391 58.3945 9.66797 58.3945 11.4805C58.3945 13.3008 57.7812 14.7109 56.5547 15.7109C55.3281 16.7109 53.8672 17.2109 52.1719 17.2109C50.3359 17.2109 48.832 16.6797 47.6602 15.6172C46.4961 14.5469 45.9141 13.1602 45.9141 11.457C45.9141 9.72266 46.5078 8.33203 47.6953 7.28516C48.8906 6.23828 50.3828 5.71484 52.1719 5.71484ZM52.1719 15.1484C53.8359 15.1484 54.668 13.8945 54.668 11.3867C54.668 8.98828 53.8359 7.78906 52.1719 7.78906C51.375 7.78906 50.75 8.10547 50.2969 8.73828C49.8516 9.37109 49.6289 10.2773 49.6289 11.457C49.6289 13.918 50.4766 15.1484 52.1719 15.1484ZM64.2891 0.628906V11.4102H64.3359L68.6367 5.9375H72.7148L68.3906 11.4102L72.9023 17H68.6367L64.3359 11.5508H64.2891V17H60.8086V0.628906H64.2891ZM81.9258 11.1875L79.1367 17.2109H77.5078L72.5156 5.9375H76.0664L78.3984 12.0312L80.8711 5.9375H82.9805L85.4297 12.0312L87.75 5.9375H91.3125L86.3438 17.2109H84.6797L81.9258 11.1875ZM104.027 14.2695V16.2031C102.871 16.875 101.785 17.2109 100.77 17.2109C99.6758 17.2109 99.0273 16.7969 98.8242 15.9688C97.6133 16.7969 96.3984 17.2109 95.1797 17.2109C94.3203 17.2109 93.5898 16.9414 92.9883 16.4023C92.3867 15.8555 92.0859 15.2227 92.0859 14.5039C92.0859 13.543 92.3945 12.7695 93.0117 12.1836C93.6367 11.5898 95.5195 10.8281 98.6602 9.89844C98.7383 8.66406 98.0977 8.04688 96.7383 8.04688C95.2617 8.04688 93.9023 8.66406 92.6602 9.89844V7.0625C94.1133 6.16406 95.7109 5.71484 97.4531 5.71484C100.578 5.71484 102.141 6.83594 102.141 9.07812V14.1172C102.141 14.6328 102.332 14.8906 102.715 14.8906C103.004 14.8906 103.441 14.6836 104.027 14.2695ZM98.6602 14.3164V11.6445C97.4961 12.0508 96.6953 12.418 96.2578 12.7461C95.8281 13.0664 95.6133 13.4766 95.6133 13.9766C95.6133 14.2969 95.7227 14.5742 95.9414 14.8086C96.1602 15.0352 96.4258 15.1484 96.7383 15.1484C97.3945 15.1484 98.0352 14.8711 98.6602 14.3164ZM109.055 5.9375V9.10156H109.102C110.109 6.84375 111.285 5.71484 112.629 5.71484C113.27 5.71484 114.039 6.05078 114.938 6.72266L113.977 9.80469C113.117 9.25781 112.43 8.98438 111.914 8.98438C111.109 8.98438 110.43 9.48438 109.875 10.4844C109.328 11.4766 109.055 12.0547 109.055 12.2188V17H105.574V5.9375H109.055ZM126.539 13.5664V15.7578C125.211 16.7266 123.566 17.2109 121.605 17.2109C119.66 17.2109 118.105 16.6914 116.941 15.6523C115.777 14.6055 115.195 13.2227 115.195 11.5039C115.195 9.81641 115.742 8.42969 116.836 7.34375C117.93 6.25781 119.324 5.71484 121.02 5.71484C122.723 5.71484 124.117 6.28906 125.203 7.4375C126.297 8.57812 126.809 10.1094 126.738 12.0312H118.793C118.863 13.0312 119.219 13.8008 119.859 14.3398C120.5 14.8789 121.359 15.1484 122.438 15.1484C123.742 15.1484 125.109 14.6211 126.539 13.5664ZM118.863 10.2031H123.668C123.48 8.59375 122.68 7.78906 121.266 7.78906C119.836 7.78906 119.035 8.59375 118.863 10.2031Z"
				fill="#1D3B4A"
			/>
		</svg>
	);
};

export const FooterLogo = () => {
	return (
		<svg
			width="254"
			height="34"
			viewBox="0 0 254 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="w-[200px] lg:w-[254px] h-34px"
		>
			<path
				d="M22.8047 0.257812L37.3359 33H28.5703L25.875 26.5312H11.2266L8.78906 33H0.140625L13.3359 0.257812H22.8047ZM23.4609 20.8125L18.1875 8.08594L13.3828 20.8125H23.4609ZM59.7188 26.9531V31.9453C57 32.9297 54.5078 33.4219 52.2422 33.4219C48.3516 33.4219 45.2422 32.3828 42.9141 30.3047C40.5859 28.2109 39.4219 25.4453 39.4219 22.0078C39.4219 18.6484 40.5938 15.8828 42.9375 13.7109C45.2969 11.5234 48.2969 10.4297 51.9375 10.4297C54.2812 10.4297 56.7656 10.9141 59.3906 11.8828V17.0625C57.4688 16.0781 55.5781 15.5859 53.7188 15.5859C51.6406 15.5859 49.9766 16.1641 48.7266 17.3203C47.4766 18.4766 46.8516 20.0234 46.8516 21.9609C46.8516 23.9141 47.4609 25.4922 48.6797 26.6953C49.8984 27.8828 51.5 28.4766 53.4844 28.4766C54.9531 28.4766 57.0312 27.9688 59.7188 26.9531ZM75.7969 10.4297C79.2656 10.4297 82.2031 11.4453 84.6094 13.4766C87.0312 15.5078 88.2422 18.3359 88.2422 21.9609C88.2422 25.6016 87.0156 28.4219 84.5625 30.4219C82.1094 32.4219 79.1875 33.4219 75.7969 33.4219C72.125 33.4219 69.1172 32.3594 66.7734 30.2344C64.4453 28.0938 63.2812 25.3203 63.2812 21.9141C63.2812 18.4453 64.4688 15.6641 66.8438 13.5703C69.2344 11.4766 72.2188 10.4297 75.7969 10.4297ZM75.7969 29.2969C79.125 29.2969 80.7891 26.7891 80.7891 21.7734C80.7891 16.9766 79.125 14.5781 75.7969 14.5781C74.2031 14.5781 72.9531 15.2109 72.0469 16.4766C71.1562 17.7422 70.7109 19.5547 70.7109 21.9141C70.7109 26.8359 72.4062 29.2969 75.7969 29.2969ZM104.344 10.4297C107.812 10.4297 110.75 11.4453 113.156 13.4766C115.578 15.5078 116.789 18.3359 116.789 21.9609C116.789 25.6016 115.562 28.4219 113.109 30.4219C110.656 32.4219 107.734 33.4219 104.344 33.4219C100.672 33.4219 97.6641 32.3594 95.3203 30.2344C92.9922 28.0938 91.8281 25.3203 91.8281 21.9141C91.8281 18.4453 93.0156 15.6641 95.3906 13.5703C97.7812 11.4766 100.766 10.4297 104.344 10.4297ZM104.344 29.2969C107.672 29.2969 109.336 26.7891 109.336 21.7734C109.336 16.9766 107.672 14.5781 104.344 14.5781C102.75 14.5781 101.5 15.2109 100.594 16.4766C99.7031 17.7422 99.2578 19.5547 99.2578 21.9141C99.2578 26.8359 100.953 29.2969 104.344 29.2969ZM128.578 0.257812V21.8203H128.672L137.273 10.875H145.43L136.781 21.8203L145.805 33H137.273L128.672 22.1016H128.578V33H121.617V0.257812H128.578ZM163.852 21.375L158.273 33.4219H155.016L145.031 10.875H152.133L156.797 23.0625L161.742 10.875H165.961L170.859 23.0625L175.5 10.875H182.625L172.688 33.4219H169.359L163.852 21.375ZM208.055 27.5391V31.4062C205.742 32.75 203.57 33.4219 201.539 33.4219C199.352 33.4219 198.055 32.5938 197.648 30.9375C195.227 32.5938 192.797 33.4219 190.359 33.4219C188.641 33.4219 187.18 32.8828 185.977 31.8047C184.773 30.7109 184.172 29.4453 184.172 28.0078C184.172 26.0859 184.789 24.5391 186.023 23.3672C187.273 22.1797 191.039 20.6562 197.32 18.7969C197.477 16.3281 196.195 15.0938 193.477 15.0938C190.523 15.0938 187.805 16.3281 185.32 18.7969V13.125C188.227 11.3281 191.422 10.4297 194.906 10.4297C201.156 10.4297 204.281 12.6719 204.281 17.1562V27.2344C204.281 28.2656 204.664 28.7812 205.43 28.7812C206.008 28.7812 206.883 28.3672 208.055 27.5391ZM197.32 27.6328V22.2891C194.992 23.1016 193.391 23.8359 192.516 24.4922C191.656 25.1328 191.227 25.9531 191.227 26.9531C191.227 27.5938 191.445 28.1484 191.883 28.6172C192.32 29.0703 192.852 29.2969 193.477 29.2969C194.789 29.2969 196.07 28.7422 197.32 27.6328ZM218.109 10.875V17.2031H218.203C220.219 12.6875 222.57 10.4297 225.258 10.4297C226.539 10.4297 228.078 11.1016 229.875 12.4453L227.953 18.6094C226.234 17.5156 224.859 16.9688 223.828 16.9688C222.219 16.9688 220.859 17.9688 219.75 19.9688C218.656 21.9531 218.109 23.1094 218.109 23.4375V33H211.148V10.875H218.109ZM253.078 26.1328V30.5156C250.422 32.4531 247.133 33.4219 243.211 33.4219C239.32 33.4219 236.211 32.3828 233.883 30.3047C231.555 28.2109 230.391 25.4453 230.391 22.0078C230.391 18.6328 231.484 15.8594 233.672 13.6875C235.859 11.5156 238.648 10.4297 242.039 10.4297C245.445 10.4297 248.234 11.5781 250.406 13.875C252.594 16.1562 253.617 19.2188 253.477 23.0625H237.586C237.727 25.0625 238.438 26.6016 239.719 27.6797C241 28.7578 242.719 29.2969 244.875 29.2969C247.484 29.2969 250.219 28.2422 253.078 26.1328ZM237.727 19.4062H247.336C246.961 16.1875 245.359 14.5781 242.531 14.5781C239.672 14.5781 238.07 16.1875 237.727 19.4062Z"
				fill="white"
			/>
		</svg>
	);
};

export const FacebookLogo = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.9 2H3.1C2.80826 2 2.52847 2.11589 2.32218 2.32218C2.11589 2.52847 2 2.80826 2 3.1V20.9C2 21.1917 2.11589 21.4715 2.32218 21.6778C2.52847 21.8841 2.80826 22 3.1 22H12.68V14.25H10.08V11.25H12.68V9C12.6261 8.47176 12.6885 7.93813 12.8627 7.43654C13.0369 6.93495 13.3188 6.47755 13.6885 6.09641C14.0582 5.71528 14.5068 5.41964 15.0028 5.23024C15.4989 5.04083 16.0304 4.96225 16.56 5C17.3383 4.99521 18.1163 5.03528 18.89 5.12V7.82H17.3C16.04 7.82 15.8 8.42 15.8 9.29V11.22H18.8L18.41 14.22H15.8V22H20.9C21.0445 22 21.1875 21.9715 21.321 21.9163C21.4544 21.861 21.5757 21.78 21.6778 21.6778C21.78 21.5757 21.861 21.4544 21.9163 21.321C21.9715 21.1875 22 21.0445 22 20.9V3.1C22 2.95555 21.9715 2.81251 21.9163 2.67905C21.861 2.54559 21.78 2.42433 21.6778 2.32218C21.5757 2.22004 21.4544 2.13901 21.321 2.08373C21.1875 2.02845 21.0445 2 20.9 2Z"
				fill="white"
			/>
		</svg>
	);
};

export const TwitterLogo = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.751 3H20.818L14.118 10.625L22 21H15.828L10.995 14.707L5.464 21H2.394L9.561 12.845L2 3H8.328L12.698 8.752L17.751 3ZM16.675 19.172H18.375L7.404 4.732H5.58L16.675 19.172Z"
				fill="white"
			/>
		</svg>
	);
};

export const YoutubeLogo = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_18_918)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.1612 4.35589 20.0008 4.73643 20.64 5.3626C21.2791 5.98877 21.6768 6.8204 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864L21.763 16.289C21.6768 17.1798 21.2789 18.0115 20.6396 18.6377C20.0002 19.2639 19.1604 19.6443 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9793 12.861 19.9986 12 20C11.139 19.9986 10.2782 19.9793 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83881 19.6441 3.9992 19.2636 3.36004 18.6374C2.72089 18.0112 2.32319 17.1796 2.237 16.289L2.197 15.864L2.122 14.954C2.04583 13.9711 2.00514 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136L2.237 7.711C2.32316 6.82055 2.72071 5.98905 3.35966 5.36291C3.99861 4.73676 4.83799 4.35612 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02073 11.1387 4.00139 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_18_918">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const InstagramLogo = () => {
	return (
		<svg
			width="22"
			height="26"
			viewBox="0 0 22 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.54643 10.7504C9.26042 10.9481 9.01488 11.2022 8.82382 11.498C8.63275 11.7939 8.49991 12.1257 8.43288 12.4747C8.2975 13.1794 8.43839 13.9109 8.82455 14.5082C9.21072 15.1055 9.81052 15.5197 10.492 15.6597C11.1735 15.7997 11.8809 15.654 12.4585 15.2547C13.0361 14.8554 13.4367 14.2351 13.572 13.5304C13.7074 12.8257 13.5665 12.0942 13.1804 11.4969C12.7942 10.8996 12.1944 10.4854 11.5129 10.3454C10.8314 10.2054 10.124 10.3511 9.54643 10.7504ZM16.5344 7.27695C16.279 7.01289 15.9696 6.80469 15.6308 6.66758C14.742 6.30703 12.8022 6.32227 11.55 6.3375C11.3487 6.3375 11.1621 6.34258 11 6.34258C10.8379 6.34258 10.6464 6.34258 10.4402 6.3375C9.18795 6.32227 7.25804 6.30195 6.3692 6.66758C6.03036 6.80469 5.72589 7.01289 5.46562 7.27695C5.20536 7.54102 5.00893 7.86094 4.87634 8.21133C4.52768 9.13047 4.54732 11.1414 4.55714 12.4363C4.55714 12.6445 4.56205 12.8375 4.56205 13C4.56205 13.1625 4.56205 13.3555 4.55714 13.5637C4.54732 14.8586 4.52768 16.8695 4.87634 17.7887C5.00893 18.1391 5.21027 18.4539 5.46562 18.723C5.72098 18.9922 6.03036 19.1953 6.3692 19.3324C7.25804 19.693 9.19777 19.6777 10.45 19.6625C10.6513 19.6625 10.8379 19.6574 11 19.6574C11.1621 19.6574 11.3536 19.6574 11.5598 19.6625C12.8121 19.6777 14.742 19.698 15.6308 19.3324C15.9696 19.1953 16.2741 18.9871 16.5344 18.723C16.7946 18.459 16.9911 18.1391 17.1237 17.7887C17.4772 16.8746 17.4576 14.8738 17.4429 13.5738C17.4429 13.3605 17.4379 13.1625 17.4379 12.9949C17.4379 12.8273 17.4379 12.6344 17.4429 12.416C17.4576 11.1211 17.4772 9.12031 17.1237 8.20117C16.9911 7.85078 16.7897 7.53594 16.5344 7.2668V7.27695ZM13.2393 9.53672C14.1275 10.1509 14.7435 11.1047 14.9516 12.1885C15.1597 13.2722 14.943 14.3971 14.3491 15.3156C13.7552 16.2341 12.8328 16.8711 11.7848 17.0863C10.7367 17.3015 9.64895 17.0774 8.76071 16.4633C8.3209 16.1595 7.94326 15.7692 7.64933 15.3145C7.35541 14.8598 7.15097 14.3497 7.04769 13.8133C6.94441 13.2769 6.9443 12.7248 7.04737 12.1883C7.15045 11.6519 7.35469 11.1417 7.64844 10.6869C7.94218 10.2321 8.31968 9.84159 8.75937 9.53765C9.19906 9.23371 9.69234 9.0223 10.211 8.91549C10.7297 8.80869 11.2637 8.80858 11.7825 8.91517C12.3012 9.02176 12.7946 9.23296 13.2344 9.53672H13.2393ZM14.6732 9.4707C14.521 9.36406 14.3982 9.21172 14.3246 9.03398C14.2509 8.85625 14.2362 8.66328 14.2705 8.47031C14.3049 8.27734 14.3982 8.10977 14.5259 7.97266C14.6536 7.83555 14.8254 7.74414 15.0071 7.70859C15.1888 7.67305 15.3804 7.68828 15.5522 7.76445C15.7241 7.84062 15.8714 7.9625 15.9746 8.11992C16.0777 8.27734 16.1317 8.46523 16.1317 8.6582C16.1317 8.78516 16.1071 8.91211 16.0629 9.02891C16.0187 9.1457 15.9451 9.25234 15.8616 9.34375C15.7781 9.43516 15.6701 9.50625 15.5571 9.55703C15.4442 9.60781 15.3214 9.6332 15.1987 9.6332C15.0121 9.6332 14.8304 9.57734 14.6781 9.4707H14.6732ZM22 4.875C22 3.08242 20.5906 1.625 18.8571 1.625H3.14286C1.40937 1.625 0 3.08242 0 4.875V21.125C0 22.9176 1.40937 24.375 3.14286 24.375H18.8571C20.5906 24.375 22 22.9176 22 21.125V4.875ZM17.5312 19.7539C16.6129 20.7035 15.4982 21.0031 14.2411 21.0691C12.9446 21.1453 9.05536 21.1453 7.75893 21.0691C6.50179 21.0031 5.38705 20.7035 4.46875 19.7539C3.55045 18.8043 3.26071 17.6516 3.20179 16.3516C3.12812 15.0109 3.12812 10.9891 3.20179 9.64844C3.26562 8.34844 3.55045 7.1957 4.46875 6.24609C5.38705 5.29648 6.5067 4.99687 7.75893 4.93594C9.05536 4.85977 12.9446 4.85977 14.2411 4.93594C15.4982 5.00195 16.6129 5.29648 17.5312 6.24609C18.4496 7.1957 18.7393 8.34844 18.7982 9.64844C18.8719 10.984 18.8719 15.0008 18.7982 16.3465C18.7344 17.6465 18.4496 18.7992 17.5312 19.7488V19.7539Z"
				fill="white"
			/>
		</svg>
	);
};

export const FilledStar = () => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.49542 4.89328L1.24209 5.50995L1.16675 5.52528C1.05271 5.55556 0.948751 5.61555 0.865483 5.69915C0.782214 5.78274 0.722624 5.88694 0.692796 6.0011C0.662969 6.11526 0.663973 6.23529 0.695706 6.34893C0.72744 6.46257 0.788766 6.56576 0.873421 6.64795L3.95475 9.64728L3.22809 13.8839L3.21942 13.9573C3.21244 14.0752 3.23693 14.1929 3.29039 14.2983C3.34384 14.4037 3.42434 14.4929 3.52365 14.557C3.62295 14.621 3.73748 14.6575 3.85552 14.6627C3.97356 14.6679 4.09086 14.6416 4.19542 14.5866L7.99942 12.5866L11.7948 14.5866L11.8614 14.6173C11.9715 14.6606 12.0911 14.6739 12.2079 14.6558C12.3248 14.6377 12.4347 14.5888 12.5265 14.5141C12.6182 14.4395 12.6885 14.3418 12.73 14.231C12.7715 14.1203 12.7828 14.0005 12.7628 13.8839L12.0354 9.64728L15.1181 6.64728L15.1701 6.59062C15.2444 6.49913 15.2931 6.38958 15.3112 6.27315C15.3294 6.15671 15.3164 6.03753 15.2735 5.92777C15.2306 5.818 15.1594 5.72157 15.0671 5.64829C14.9748 5.57501 14.8647 5.52751 14.7481 5.51062L10.4948 4.89328L8.59342 1.03995C8.53841 0.928305 8.45323 0.834292 8.34755 0.768551C8.24186 0.702811 8.11989 0.667969 7.99542 0.667969C7.87096 0.667969 7.74898 0.702811 7.6433 0.768551C7.53761 0.834292 7.45244 0.928305 7.39742 1.03995L5.49542 4.89328Z"
				fill="#E8B42E"
			/>
		</svg>
	);
};

export const StrokedStar = () => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.56716 5.38811L5.82739 5.35038L5.94378 5.11459L7.84578 1.26126L7.84592 1.26096C7.85968 1.23305 7.88097 1.20955 7.90739 1.19311C7.93381 1.17668 7.96431 1.16797 7.99542 1.16797C8.02654 1.16797 8.05703 1.17668 8.08345 1.19311C8.10988 1.20955 8.13117 1.23305 8.14492 1.26096L8.14504 1.26119L10.0464 5.11453L10.1627 5.35033L10.4229 5.3881L14.6763 6.00543L14.6764 6.00545C14.7056 6.00968 14.7331 6.02155 14.7562 6.03987C14.7792 6.05819 14.797 6.0823 14.8078 6.10974C14.8185 6.13718 14.8217 6.16698 14.8172 6.19608C14.8132 6.22186 14.8032 6.24629 14.788 6.26743L14.7592 6.29881L11.6867 9.28896L11.4981 9.4725L11.5426 9.73188L12.27 13.9685L12.27 13.9687C12.275 13.9979 12.2722 14.0278 12.2618 14.0555C12.2514 14.0832 12.2339 14.1076 12.2109 14.1263C12.188 14.1449 12.1605 14.1572 12.1313 14.1617C12.1051 14.1658 12.0785 14.1635 12.0534 14.1552L12.0159 14.138L8.23252 12.1443L7.99969 12.0216L7.76674 12.1441L3.96274 14.1441L3.96255 14.1442C3.93641 14.1579 3.90708 14.1645 3.87758 14.1632C3.84806 14.1619 3.81943 14.1527 3.79461 14.1367L3.52365 14.557L3.7946 14.1367C3.76978 14.1207 3.74965 14.0984 3.73629 14.0721C3.7244 14.0486 3.71824 14.0228 3.71826 13.9966L3.7231 13.9556L4.44756 9.73181L4.49203 9.4725L4.30351 9.28899L1.22218 6.28966L1.22171 6.28921C1.20055 6.26866 1.18522 6.24287 1.17728 6.21446C1.16935 6.18604 1.1691 6.15604 1.17656 6.1275C1.18401 6.09896 1.19891 6.07291 1.21973 6.05201C1.23824 6.03343 1.26084 6.01951 1.28566 6.01133L1.32789 6.00274L5.56716 5.38811Z"
				stroke="#E8B42E"
			/>
		</svg>
	);
};

export const ColorIcon = ({ color }) => {
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="white" />
			<rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#B5B5B5" />
			<rect x="4" y="4" width="22" height="22" rx="11" fill={color} />
		</svg>
	);
};

export const ArrowLeftIcon = ({ color = "#8F8F8F" }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.47007 12.53C3.32962 12.3893 3.25073 12.1987 3.25073 12C3.25073 11.8012 3.32962 11.6106 3.47007 11.47L9.47007 5.46997C9.53873 5.39628 9.62153 5.33718 9.71353 5.29619C9.80553 5.2552 9.90485 5.23315 10.0056 5.23138C10.1063 5.2296 10.2063 5.24813 10.2997 5.28585C10.3931 5.32357 10.4779 5.37971 10.5491 5.45093C10.6203 5.52215 10.6765 5.60698 10.7142 5.70037C10.7519 5.79376 10.7704 5.89379 10.7687 5.99449C10.7669 6.09519 10.7448 6.19451 10.7039 6.28651C10.6629 6.37851 10.6038 6.46131 10.5301 6.52997L5.81007 11.25L20.0001 11.25C20.199 11.25 20.3898 11.329 20.5304 11.4696C20.6711 11.6103 20.7501 11.8011 20.7501 12C20.7501 12.1989 20.6711 12.3896 20.5304 12.5303C20.3898 12.671 20.199 12.75 20.0001 12.75L5.81007 12.75L10.5301 17.47C10.6038 17.5386 10.6629 17.6214 10.7039 17.7134C10.7448 17.8054 10.7669 17.9047 10.7687 18.0054C10.7704 18.1061 10.7519 18.2062 10.7142 18.2996C10.6765 18.393 10.6203 18.4778 10.5491 18.549C10.4779 18.6202 10.3931 18.6764 10.2997 18.7141C10.2063 18.7518 10.1063 18.7703 10.0056 18.7686C9.90485 18.7668 9.80553 18.7447 9.71353 18.7037C9.62153 18.6628 9.53873 18.6037 9.47007 18.53L3.47007 12.53Z"
				fill={color}
			/>
		</svg>
	);
};

export const ArrowRightIcon = ({ color = "#8F8F8F" }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.5299 11.47C20.6704 11.6107 20.7493 11.8013 20.7493 12C20.7493 12.1988 20.6704 12.3894 20.5299 12.53L14.5299 18.53C14.4613 18.6037 14.3785 18.6628 14.2865 18.7038C14.1945 18.7448 14.0952 18.7668 13.9944 18.7686C13.8937 18.7704 13.7937 18.7519 13.7003 18.7142C13.6069 18.6764 13.5221 18.6203 13.4509 18.5491C13.3797 18.4779 13.3235 18.393 13.2858 18.2996C13.2481 18.2062 13.2296 18.1062 13.2313 18.0055C13.2331 17.9048 13.2552 17.8055 13.2961 17.7135C13.3371 17.6215 13.3962 17.5387 13.4699 17.47L18.1899 12.75L3.99993 12.75C3.80102 12.75 3.61025 12.671 3.4696 12.5304C3.32895 12.3897 3.24993 12.1989 3.24993 12C3.24993 11.8011 3.32895 11.6104 3.4696 11.4697C3.61025 11.329 3.80102 11.25 3.99993 11.25L18.1899 11.25L13.4699 6.53003C13.3962 6.46137 13.3371 6.37857 13.2961 6.28657C13.2552 6.19457 13.2331 6.09526 13.2313 5.99455C13.2296 5.89385 13.2481 5.79382 13.2858 5.70043C13.3235 5.60705 13.3797 5.52221 13.4509 5.45099C13.5221 5.37977 13.6069 5.32363 13.7003 5.28591C13.7937 5.24819 13.8937 5.22966 13.9944 5.23144C14.0952 5.23322 14.1945 5.25526 14.2865 5.29625C14.3785 5.33724 14.4613 5.39634 14.5299 5.47003L20.5299 11.47Z"
				fill={color}
			/>
		</svg>
	);
};

export const CouponIcon = () => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.125 8.75C18.2908 8.75 18.4497 8.68415 18.5669 8.56694C18.6842 8.44973 18.75 8.29076 18.75 8.125V5C18.75 4.66848 18.6183 4.35054 18.3839 4.11612C18.1495 3.8817 17.8315 3.75 17.5 3.75H2.5C2.16848 3.75 1.85054 3.8817 1.61612 4.11612C1.3817 4.35054 1.25 4.66848 1.25 5V8.125C1.25 8.29076 1.31585 8.44973 1.43306 8.56694C1.55027 8.68415 1.70924 8.75 1.875 8.75C2.20652 8.75 2.52446 8.8817 2.75888 9.11612C2.9933 9.35054 3.125 9.66848 3.125 10C3.125 10.3315 2.9933 10.6495 2.75888 10.8839C2.52446 11.1183 2.20652 11.25 1.875 11.25C1.70924 11.25 1.55027 11.3158 1.43306 11.4331C1.31585 11.5503 1.25 11.7092 1.25 11.875V15C1.25 15.3315 1.3817 15.6495 1.61612 15.8839C1.85054 16.1183 2.16848 16.25 2.5 16.25H17.5C17.8315 16.25 18.1495 16.1183 18.3839 15.8839C18.6183 15.6495 18.75 15.3315 18.75 15V11.875C18.75 11.7092 18.6842 11.5503 18.5669 11.4331C18.4497 11.3158 18.2908 11.25 18.125 11.25C17.7935 11.25 17.4755 11.1183 17.2411 10.8839C17.0067 10.6495 16.875 10.3315 16.875 10C16.875 9.66848 17.0067 9.35054 17.2411 9.11612C17.4755 8.8817 17.7935 8.75 18.125 8.75ZM17.5 12.4188V15H13.125V13.125H11.875V15H2.5V12.4188C3.035 12.2789 3.50854 11.9657 3.84651 11.528C4.18449 11.0903 4.36782 10.553 4.36782 10C4.36782 9.44703 4.18449 8.90966 3.84651 8.472C3.50854 8.03434 3.035 7.72108 2.5 7.58125V5H11.875V6.875H13.125V5H17.5V7.58125C16.965 7.72108 16.4915 8.03434 16.1535 8.472C15.8155 8.90966 15.6322 9.44703 15.6322 10C15.6322 10.553 15.8155 11.0903 16.1535 11.528C16.4915 11.9657 16.965 12.2789 17.5 12.4188Z"
				fill="#3A83A1"
			/>
			<path d="M11.875 8.125H13.125V11.875H11.875V8.125Z" fill="#3A83A1" />
		</svg>
	);
};

export const PlusIcon = () => {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.64 11.144V0.0559993H7.736V11.144H4.64ZM0.488 7.064V4.136H11.912V7.064H0.488Z"
				fill="#3A83A1"
			/>
		</svg>
	);
};
export const MinusIcon = () => {
	return (
		<svg
			width="8"
			height="4"
			viewBox="0 0 8 4"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0.248 3.744V0.744H7.04V3.744H0.248Z" fill="white" />
		</svg>
	);
};

export const DeleteIcon = () => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			className="w-5 h-5 md:w-[32px] md:h-[32px]"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.3332 6.66667H18.6665C18.6665 5.95942 18.3856 5.28115 17.8855 4.78105C17.3854 4.28095 16.7071 4 15.9998 4C15.2926 4 14.6143 4.28095 14.1142 4.78105C13.6141 5.28115 13.3332 5.95942 13.3332 6.66667ZM11.3332 6.66667C11.3332 6.05383 11.4539 5.447 11.6884 4.88081C11.9229 4.31462 12.2667 3.80018 12.7 3.36683C13.1333 2.93349 13.6478 2.58975 14.214 2.35523C14.7802 2.12071 15.387 2 15.9998 2C16.6127 2 17.2195 2.12071 17.7857 2.35523C18.3519 2.58975 18.8663 2.93349 19.2997 3.36683C19.733 3.80018 20.0768 4.31462 20.3113 4.88081C20.5458 5.447 20.6665 6.05383 20.6665 6.66667H28.3332C28.5984 6.66667 28.8527 6.77202 29.0403 6.95956C29.2278 7.1471 29.3332 7.40145 29.3332 7.66667C29.3332 7.93188 29.2278 8.18624 29.0403 8.37377C28.8527 8.56131 28.5984 8.66667 28.3332 8.66667H26.5732L25.0132 24.8147C24.8935 26.052 24.3172 27.2003 23.3967 28.0358C22.4763 28.8712 21.2776 29.3338 20.0345 29.3333H11.9652C10.7223 29.3335 9.52397 28.8707 8.60377 28.0353C7.68357 27.1999 7.10748 26.0517 6.98784 24.8147L5.4265 8.66667H3.6665C3.40129 8.66667 3.14693 8.56131 2.9594 8.37377C2.77186 8.18624 2.6665 7.93188 2.6665 7.66667C2.6665 7.40145 2.77186 7.1471 2.9594 6.95956C3.14693 6.77202 3.40129 6.66667 3.6665 6.66667H11.3332ZM13.9998 13C13.9998 12.7348 13.8945 12.4804 13.7069 12.2929C13.5194 12.1054 13.2651 12 12.9998 12C12.7346 12 12.4803 12.1054 12.2927 12.2929C12.1052 12.4804 11.9998 12.7348 11.9998 13V23C11.9998 23.2652 12.1052 23.5196 12.2927 23.7071C12.4803 23.8946 12.7346 24 12.9998 24C13.2651 24 13.5194 23.8946 13.7069 23.7071C13.8945 23.5196 13.9998 23.2652 13.9998 23V13ZM18.9998 12C19.2651 12 19.5194 12.1054 19.7069 12.2929C19.8945 12.4804 19.9998 12.7348 19.9998 13V23C19.9998 23.2652 19.8945 23.5196 19.7069 23.7071C19.5194 23.8946 19.2651 24 18.9998 24C18.7346 24 18.4803 23.8946 18.2927 23.7071C18.1052 23.5196 17.9998 23.2652 17.9998 23V13C17.9998 12.7348 18.1052 12.4804 18.2927 12.2929C18.4803 12.1054 18.7346 12 18.9998 12ZM8.9785 24.6227C9.05042 25.3649 9.39616 26.0537 9.94833 26.5548C10.5005 27.056 11.2195 27.3335 11.9652 27.3333H20.0345C20.7802 27.3335 21.4992 27.056 22.0513 26.5548C22.6035 26.0537 22.9493 25.3649 23.0212 24.6227L24.5652 8.66667H7.4345L8.9785 24.6227Z"
				fill="#5B5B5B"
			/>
		</svg>
	);
};

export const CloseIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18 6L6 18M6 6L18 18"
				stroke="#3A83A1"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export const FilterIcon = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21.25 12H8.895M4.534 12H2.75M4.534 12C4.534 11.4218 4.76368 10.8673 5.17251 10.4585C5.58134 10.0497 6.13583 9.82001 6.714 9.82001C7.29217 9.82001 7.84666 10.0497 8.25549 10.4585C8.66432 10.8673 8.894 11.4218 8.894 12C8.894 12.5782 8.66432 13.1327 8.25549 13.5415C7.84666 13.9503 7.29217 14.18 6.714 14.18C6.13583 14.18 5.58134 13.9503 5.17251 13.5415C4.76368 13.1327 4.534 12.5782 4.534 12ZM21.25 18.607H15.502M15.502 18.607C15.502 19.1853 15.2718 19.7404 14.8628 20.1494C14.4539 20.5583 13.8993 20.788 13.321 20.788C12.7428 20.788 12.1883 20.5573 11.7795 20.1485C11.3707 19.7397 11.141 19.1852 11.141 18.607M15.502 18.607C15.502 18.0287 15.2718 17.4746 14.8628 17.0657C14.4539 16.6567 13.8993 16.427 13.321 16.427C12.7428 16.427 12.1883 16.6567 11.7795 17.0655C11.3707 17.4743 11.141 18.0288 11.141 18.607M11.141 18.607H2.75M21.25 5.39301H18.145M13.784 5.39301H2.75M13.784 5.39301C13.784 4.81484 14.0137 4.26035 14.4225 3.85152C14.8313 3.44269 15.3858 3.21301 15.964 3.21301C16.2503 3.21301 16.5338 3.2694 16.7983 3.37896C17.0627 3.48851 17.3031 3.64909 17.5055 3.85152C17.7079 4.05395 17.8685 4.29427 17.9781 4.55876C18.0876 4.82325 18.144 5.10673 18.144 5.39301C18.144 5.67929 18.0876 5.96277 17.9781 6.22726C17.8685 6.49175 17.7079 6.73207 17.5055 6.93451C17.3031 7.13694 17.0627 7.29751 16.7983 7.40707C16.5338 7.51663 16.2503 7.57301 15.964 7.57301C15.3858 7.57301 14.8313 7.34333 14.4225 6.93451C14.0137 6.52568 13.784 5.97118 13.784 5.39301Z"
				stroke="#3A83A1"
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
		</svg>
	);
};

export const AestheticIcon = () => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.33334 16.6667H36.6667M15 6.66667V10M23.3333 5V10M31.6667 6.66667V10M35 30V16.6667H11.6667V30C11.6667 31.3261 12.1935 32.5979 13.1311 33.5355C14.0688 34.4732 15.3406 35 16.6667 35H30C31.3261 35 32.5979 34.4732 33.5355 33.5355C34.4732 32.5979 35 31.3261 35 30Z"
				stroke="#3A83A1"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export const EcoFriendlyIcon = () => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M38.6922 7.48282C38.6743 7.17701 38.5448 6.88841 38.3282 6.67181C38.1116 6.4552 37.823 6.32567 37.5172 6.30782C29.4297 5.83907 22.9359 8.29844 20.1453 12.9047C18.3016 15.95 18.3047 19.6484 20.1203 23.1766C19.0867 24.4067 18.3314 25.8459 17.9062 27.3953L15.3641 24.8438C16.5859 22.2922 16.5391 19.6328 15.2078 17.4234C13.1453 14.0188 8.38437 12.1938 2.47343 12.5406C2.16763 12.5585 1.87903 12.688 1.66242 12.9046C1.44582 13.1212 1.31629 13.4098 1.29843 13.7156C0.949996 19.6266 2.77656 24.3875 6.18125 26.45C7.30472 27.1366 8.59584 27.4999 9.9125 27.5C11.1904 27.4842 12.4485 27.1814 13.5937 26.6141L17.5 30.5203V35C17.5 35.3315 17.6317 35.6495 17.8661 35.8839C18.1005 36.1183 18.4185 36.25 18.75 36.25C19.0815 36.25 19.3995 36.1183 19.6339 35.8839C19.8683 35.6495 20 35.3315 20 35V30.3922C19.9943 28.4036 20.671 26.4732 21.9172 24.9234C23.5249 25.7637 25.308 26.2134 27.1219 26.2359C28.8756 26.2416 30.5967 25.7625 32.0953 24.8516C36.7016 22.0641 39.1672 15.5703 38.6922 7.48282ZM7.47031 24.3125C5.07343 22.8609 3.71718 19.425 3.75 15C8.175 14.9625 11.6109 16.3234 13.0625 18.7203C13.8203 19.9703 13.9437 21.4281 13.4469 22.9297L9.63281 19.1156C9.39648 18.8911 9.08179 18.7678 8.75584 18.772C8.42989 18.7761 8.11846 18.9075 7.88796 19.138C7.65746 19.3685 7.52612 19.6799 7.52195 20.0058C7.51777 20.3318 7.6411 20.6465 7.86562 20.8828L11.6797 24.6969C10.1781 25.1938 8.72187 25.0703 7.47031 24.3125ZM30.8 22.7156C28.7062 23.9828 26.2453 24.0797 23.7453 23.0281L32.1344 14.6375C32.3589 14.4012 32.4822 14.0865 32.478 13.7605C32.4739 13.4346 32.3425 13.1232 32.112 12.8927C31.8815 12.6622 31.5701 12.5308 31.2442 12.5266C30.9182 12.5225 30.6035 12.6458 30.3672 12.8703L21.9766 21.25C20.9203 18.75 21.0156 16.2875 22.2891 14.1953C24.4672 10.6016 29.6328 8.59844 36.2469 8.75313C36.3969 15.3656 34.3969 20.5375 30.8 22.7156Z"
				fill="#3A83A1"
			/>
		</svg>
	);
};

export const AffordableIcon = () => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20 36.6667C29.205 36.6667 36.6667 29.205 36.6667 20C36.6667 10.795 29.205 3.33333 20 3.33333C10.795 3.33333 3.33334 10.795 3.33334 20C3.33334 29.205 10.795 36.6667 20 36.6667Z"
				stroke="#3A83A1"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M25 14.1667C23.8583 13.025 21.8483 12.2317 20 12.1817M20 12.1817C17.8 12.1217 15.8333 13.1167 15.8333 15.8333C15.8333 20.8333 25 18.3333 25 23.3333C25 26.185 22.56 27.41 20 27.3183M20 12.1817V9.16666M15 25C16.0733 26.4333 18.0717 27.25 20 27.3183M20 27.3183V30.8333"
				stroke="#3A83A1"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export const FastDeliveryIcon = () => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.25 5V31.25H5.195C5.7525 33.3988 7.685 35 10 35C12.315 35 14.2475 33.3988 14.805 31.25H25.195C25.7525 33.3988 27.685 35 30 35C32.315 35 34.2475 33.3988 34.805 31.25H38.75V18.2425L38.3988 17.8512L30.8988 10.3513L30.5075 10H23.75V5H1.25ZM3.75 7.5H21.25V28.75H14.805C14.2475 26.6012 12.315 25 10 25C7.685 25 5.7525 26.6012 5.195 28.75H3.75V7.5ZM23.75 12.5H29.4538L36.25 19.2975V28.75H34.805C34.2475 26.6012 32.315 25 30 25C27.685 25 25.7525 26.6012 25.195 28.75H23.75V12.5ZM10 27.5C11.3962 27.5 12.5 28.6038 12.5 30C12.5 31.3962 11.3962 32.5 10 32.5C8.60375 32.5 7.5 31.3962 7.5 30C7.5 28.6038 8.60375 27.5 10 27.5ZM30 27.5C31.3962 27.5 32.5 28.6038 32.5 30C32.5 31.3962 31.3962 32.5 30 32.5C28.6038 32.5 27.5 31.3962 27.5 30C27.5 28.6038 28.6038 27.5 30 27.5Z"
				fill="#3A83A1"
			/>
		</svg>
	);
};
