/** @format */
import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Grid } from "@mui/material";
import { NewHeader } from "../NewHeader";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import { GalleryImg } from "../index";
import PictureData from "../../../images/assets/pictures";
// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  const [value, setValue] = useState(0);
  const [pictures, setPictures] = useState([]);
  const [filteredPictures, setFilteredPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
                <LightGallery plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
                  <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {filteredPictures.map((pic, index) => (
                      <Grid key={pic.id || index} item xs={12} sm={6} md={4}>
                        {/* Ensure href and data-src are properly set */}
                        <a
                          key={pic.id}
                          href={pic.src} // High-res image URL
                          data-src={pic.src} // Ensure correct data-src for LightGallery
                          data-sub-html={`<h4>${pic.alt}</h4>`} // Optional caption
                        >
                          <Box
                            sx={{
                              width: "100%",
                              height: 0,
                              paddingTop: "75%", // Aspect ratio 4:3
                              position: "relative",
                              borderRadius: "8px",
                              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                              overflow: "hidden",
                              transition: "transform 0.5s ease-in-out",
                              "&:hover": {
                                transform: "scale(1.05)",
                              },
                            }}
                          >
                            <img
                              src={pic.src}
                              alt={pic.alt}
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                        </a>
                      </Grid>
                    ))}
                  </Grid>
                </LightGallery>
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
    </>
  );
};

export default Gallery;
