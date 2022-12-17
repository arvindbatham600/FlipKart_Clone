import { Box } from "@mui/system";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from "./context/DataProvider";
function App() {
  return (
    <DataProvider>
      <Header />
      <Box sx={{
        marginTop: '70px'
      }} >
        <Home/>
      </Box>
    </DataProvider>
  );
}

export default App;
