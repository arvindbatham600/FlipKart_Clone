import { Box } from "@mui/system";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/details/Detail";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header />
        <Box
          sx={{
            marginTop: "55px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path = "/cart" element = {<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
