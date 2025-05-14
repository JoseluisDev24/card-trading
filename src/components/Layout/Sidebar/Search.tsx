"use client"

import { InputAdornment, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {

return (
  <div className="flex items-center justify-center gap-2 w-full">
    <TextField
      placeholder="Search for an item"
      variant="outlined"
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "gray" }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        background: "#f1f1f1",
        borderRadius: "20px",
        width: "100%",
        padding: "0 10px",
        "& fieldset": {
          border: "none",
        },
        "& input::placeholder": {
          fontSize: "0.90rem",
        },
        "& .MuiInputBase-input": {
          paddingLeft: "20px",
        },
      }}
    />
  </div>
);
}
