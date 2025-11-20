import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function FormDemo() {
  const [name, setName] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  return (
    <Box sx={{ border: "1px solid red", p: 6 }}>
      <h1>Name is: {name}</h1>
      <TextField
        id="outlined-basic"
        placeholder="Puppy Name"
        label="Puppy Name"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
    </Box>
  );
}
