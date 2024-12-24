/** @format */

import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Card, CardMedia } from "@mui/material";
import { NewHeader } from "../NewHeader";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import { GalleryImg } from "../index";
import PictureData from "../../../images/assets/pictures"
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
      setError(error);
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            width: "100%",
            gap: 2,
            marginTop: 2,
            flexDirection: "row",
          }}
        >
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
                  {filteredPictures.map((pic) => (
                    <a
                      key={pic.id}
                      href={pic.src}
                      data-sub-html={`<h4>${pic.alt}</h4>`}
                    >
                      <Box
                        sx={{
                          width: "450px",
                          height: "400px",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderRadius: "8px",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            // objectPosition: "top",
                          }}
                        />
                      </Box>
                    </a>
                  ))}
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
