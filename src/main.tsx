import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css";
import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: 'uzf-N9j8FuRfNw5L_',
  blockHeadless: true,
  limitRate: {
    id: 'app',
    throttle: 10000,
  },
});


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
