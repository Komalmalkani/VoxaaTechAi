import AppRoutes from "./routes/routes";
// import { ThemeProvider } from "./context/ThemeProvider";
// import { ModeToggle } from "./components/ModeToggle";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Bootstrap JS
import "./index.css";

const App = () => {
  return (
    // <ThemeProvider>
    //   <ModeToggle />
      <AppRoutes />
    // </ThemeProvider>
  );
};

export default App;
