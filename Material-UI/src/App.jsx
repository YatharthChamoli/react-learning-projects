import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Button color="success" variant="contained" onClick={() => alert("H!")}>
        Contained
      </Button>
      <Button variant="text">Contained</Button>
      <Button variant="outlined">Contained</Button>
    </>
  );
}

export default App;
