"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { sections } from "@/data/help/helpSections";
import { Button, TextField, Typography, Box } from "@mui/material";

export default function HelpContent() {
  const [active, setActive] = useState<string | null>("How it works");
  const searchParams = useSearchParams();
  const contactMode = searchParams.get("contact") === "true";

  return (
      <div className="flex flex-col items-center min-h-screen py-6 px-4 lg:py-8 bg-white">
        <section className="w-full flex flex-col items-center">
          <div className="flex flex-col gap-3 items-center justify-center bg-[url('/city.jpg')] bg-cover bg-center pb-16 lg:h-56">
            <h1 className="text-4xl font-bold">Help center</h1>
            <p className="text-2xl font-semibold">
              Have questions? you&apos;re in the right place!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl -mt-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className={`flex justify-center items-center h-24 p-4 rounded-3xl shadow transition-all w-full min-w-[165px] whitespace-nowrap cursor-pointer 
                ${
                  !contactMode && active === section.title
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 hover:bg-gray-200 hover:shadow-lg"
                }`}
                onClick={() => setActive(section.title)}
              >
                <h2
                  className={`${
                    !contactMode && active === section.title
                      ? "text-2xl font-bold"
                      : "text-xl font-bold"
                  }`}
                >
                  {section.title}
                </h2>
              </div>
            ))}
          </div>

          <div className="flex flex-col max-w-md md:max-w-4xl">
            {contactMode ? (
              <Box className="max-w-md lg:max-w-xl mx-auto px-2 py-8">
                <Typography variant="h4" className="font-bold text-center mb-4">
                  Contact us
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="text-center text-gray-600 py-4"
                  sx={{ lineHeight: 1.5 }}
                >
                  Any questions, need help, or just want to say hi? Start a
                  conversation with us using the form below
                </Typography>

                <form className="flex flex-col items-center gap-4 py-4">
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    defaultValue="user123"
                    size="medium"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                        "& fieldset": {
                          borderColor: "gray",
                        },
                        "&:hover fieldset": {
                          borderColor: "#F97316",
                          borderWidth: 2,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#F97316",
                        },
                      },
                    }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    defaultValue="user123@user.com"
                    size="medium"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                        "& fieldset": {
                          borderColor: "gray",
                        },
                        "&:hover fieldset": {
                          borderColor: "#F97316",
                          borderWidth: 2,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#F97316",
                        },
                      },
                    }}
                  />
                  <TextField
                    label="Write message"
                    variant="outlined"
                    fullWidth
                    multiline
                    minRows={4}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                        "& fieldset": {
                          borderColor: "gray",
                        },
                        "&:hover fieldset": {
                          borderColor: "#F97316",
                          borderWidth: 2,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#F97316",
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "#F97316",
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: "1rem",
                      "&:hover": {
                        backgroundColor: "#EA580C",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            ) : (
              sections.find((s) => s.title === active)?.content
            )}
          </div>
        </section>
      </div>
  );
}
