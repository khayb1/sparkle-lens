/** @format */
import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Grid } from "@mui/material";
import { FaTimes, FaDownload } from "react-icons/fa";
import { NewHeader } from "../NewHeader";
import { GalleryImg } from "..";
import PictureData from "../../../images/assets/pictures";

const Gallery = () => {
  const [value, setValue] = useState(0);
  const [pictures, setPictures] = useState([]);
  const [filteredPictures, setFilteredPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const categories = ["All", "graduation", "wedding", "nature"];

  useEffect(() => {
    try {
      setPictures(PictureData);
      setFilteredPictures(PictureData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    const selectedCategory = categories[newValue];
    if (selectedCategory === "All") {
      setFilteredPictures(pictures);
    } else {
      setFilteredPictures(
        pictures.filter((pic) => pic.category === selectedCategory)
      );
    }
  };

  const handlePictureClick = (picture) => {
    setSelectedPicture(picture);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const handleClose = () => {
    setSelectedPicture(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <>
      <NewHeader
        backgroundImage={GalleryImg}
        header={"Gallery Page"}
        text={"Browse through our curated collection of stunning photos"}
      />

      <Box sx={{ width: "100%", bgcolor: "background.paper", padding: 2 }}>
        {/* Tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>

        {/* Gallery */}
        <Box sx={{ marginTop: 2 }}>
          {(() => {
            if (loading) {
              return (
                <Box
                  sx={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "gray",
                    marginTop: "20px",
                  }}
                >
                  Loading...
                </Box>
              );
            } else if (error) {
              return (
                <Box
                  sx={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "red",
                    marginTop: "20px",
                  }}
                >
                  {error}
                </Box>
              );
            } else if (filteredPictures.length > 0) {
              return (
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                  {filteredPictures.map((pic, index) => (
                    <Grid key={pic.id || index} item xs={12} sm={6} md={4}>
                      <Box
                        sx={{
                          width: "100%",
                          height: 0,
                          paddingTop: "75%",
                          position: "relative",
                          borderRadius: "8px",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          overflow: "hidden",
                          transition: "transform 0.5s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                        onClick={() => handlePictureClick(pic)}
                      >
                        <img
                          src={pic.src}
                          alt={pic.alt}
                          loading="lazy"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", 
                           objectPosition: "100% 10%",
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              );
            } else {
              return (
                <Box
                  sx={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "gray",
                    marginTop: "20px",
                  }}
                >
                  No pictures available for this category.
                </Box>
              );
            }
          })()}
        </Box>
      </Box>

      {/* Modal for zoom and download */}
      {selectedPicture && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <button
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "red",
              fontSize: "2rem",
            }}
            onClick={handleClose}
          >
            <FaTimes size={'2rem'}
            className="text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-300"
             />
          </button>
          <img
            src={selectedPicture.src}
            alt={selectedPicture.alt}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          />
          <a
            href={selectedPicture.src}
            download
            style={{
              position: "absolute",
              bottom: 20,
              backgroundColor: "#3f51b5",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            <FaDownload  />
          </a>
        </div>
      )}
    </>
  );
};

export default Gallery;
