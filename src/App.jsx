import { useEffect } from "react";
import AllRoute from "./router/allRoute";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
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
