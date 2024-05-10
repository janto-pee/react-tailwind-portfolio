import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AllRoute from "./router/allRoute";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <AllRoute />
    </>
  );
}
export default App;
