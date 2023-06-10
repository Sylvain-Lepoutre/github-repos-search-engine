import { createRoot } from "react-dom/client";

import App from "./components/App"

const containerApp = document.getElementById("app");
const root = createRoot(containerApp);
root.render(<App />);