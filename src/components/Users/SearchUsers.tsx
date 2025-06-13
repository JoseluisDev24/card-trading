"use client"

import { InputAdornment, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";

export const SearchUsers = () => {

return (
  <div className="flex items-center justify-center gap-2 w-full">
    <TextField
      placeholder="Search username or keywords"
      variant="outlined"
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#F97316" }} />
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
          fontSize: "0.85rem",
        },
        "& .MuiInputBase-input": {
          paddingLeft: "20px",
        },
      }}
    />
  </div>
);
}
