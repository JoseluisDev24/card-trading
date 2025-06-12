"use client";

import { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

export default function TradesTabs() {
  const [value, setValue] = useState(0);

  const tabLabels = [
    <>
      <span className="block">OFFERS</span>
      <span className="block">(0)</span>
    </>,
    "ACTIVE",
    <>
      <span className="block">SENT</span>
      <span className="block">OFFERS</span>
    </>,
    "ENDED",
  ];

  return (
    <Box className="p-4 h-80 flex flex-col lg:justify-center gap-6">
      <Box className="bg-white rounded-full shadow border border-gray-200 w-fit">
        <Tabs
          value={value}
          onChange={(_, newVal) => setValue(newVal)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#F97316",
              height: "4px",
              borderRadius: "20px",
            },
          }}
        >
          {tabLabels.map((label, i) => (
            <Tab
              key={i}
              label={label}
              disableRipple
              sx={{
                fontSize: "0.875rem",
                height: "60px",
                borderRight:
                  i < tabLabels.length - 1 ? "1px solid #E5E7EB" : "none",
                "&.Mui-selected": {
                  fontWeight: 600,
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Typography variant="body1" className="text-start text-gray-500">
        There are trades in this filter
      </Typography>
    </Box>
  );
}
