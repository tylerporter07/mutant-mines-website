import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css";
import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: '7H_LGaw0hFK8OQVff',
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
