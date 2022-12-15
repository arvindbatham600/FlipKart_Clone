import { Box } from "@mui/system";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Header />
      <Box sx={{
        marginTop: '70px'
      }} >
        <Home/>
      </Box>
    </>
  );
}

export default App;
