import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import AppProvider from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<NextUIProvider>
		<AppProvider>
			<App />
		</AppProvider>
	</NextUIProvider>
);
