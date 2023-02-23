import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

import "./App.css";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />

      <AllRoutes />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
