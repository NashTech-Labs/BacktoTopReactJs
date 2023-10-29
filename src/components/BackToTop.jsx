import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import "./BackToTop.css";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollHeight = () => {
            if (!showButton && window.scrollY > 400) {
                setShowButton(true);
            } else if (showButton && window.scrollY <= 400) {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", checkScrollHeight);
        return () => {
            window.removeEventListener("scroll", checkScrollHeight);
        };
    }, [showButton]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Box
            sx={{
                display:
                    showButton
                        ? "flex"
                        : "none",
            }}
            className="button-container"
        >
            <Button onClick={scrollToTop} sx={{ textTransform: "initial", color: "#ffffff", fontSize: "14px", fontWeight: "600" }}>
                Back to top
                <ArrowCircleUpIcon className="top-arrow-icon" />
            </Button>
        </Box>
    );
};

export default BackToTop;
