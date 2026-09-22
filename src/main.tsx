
window.addEventListener('error', (event) => {
  fetch('http://localhost:4444', { method: 'POST', body: event.error ? event.error.stack : event.message, mode: 'no-cors' });
});
window.addEventListener('unhandledrejection', (event) => {
  fetch('http://localhost:4444', { method: 'POST', body: event.reason ? event.reason.stack : 'Unhandled Rejection', mode: 'no-cors' });
});

  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  