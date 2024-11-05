import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrackingDetails from "./pages/TrackingDetails";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:trackingNumber" element={<TrackingDetails />} />
      </Routes>
    </div>
  );
};

export default App;
