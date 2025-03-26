// ==UserScript==
// @name         Freelancer Auto Bid (Manual ChatGPT)
// @namespace    http://tampermonkey.net/
// @version      4.2
// @description  Auto-fills bid proposal using a manually generated ChatGPT response
// @author       Armaan
// @match        https://www.freelancer.in/projects/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    let currentUrl = window.location.href;

    // Function to check if the current page is a project detail page
    function isProjectDetailPage() {
        return window.location.href.startsWith("https://www.freelancer.in/projects/");
    }

    // Add buttons only if on project detail page
    function initializeButtons() {
        if (isProjectDetailPage()) {
            createButton();
            createPasteButton();
        }
    }

    // Initialize buttons when script starts
    initializeButtons();

    // Observe for URL change or page content change (for dynamic loading of content)
    let observer = new MutationObserver(() => {
        if (window.location.href !== currentUrl) {
            currentUrl = window.location.href;
            if (isProjectDetailPage()) {
                initializeButtons();
            } else {
                removeButtons();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    function createButton() {
        let button = document.createElement("button");
        button.innerText = "Copy Project Info"; // Button text
        button.style.position = "fixed";
        button.style.left = "20px";  // Positioned to the left side
        button.style.bottom = "80px";  // Adjusted bottom position
        button.style.background = "linear-gradient(135deg, #00c6ff, #0078d4)"; // Modern gradient
        button.style.color = "#fff";  // White text color for contrast
        button.style.padding = "10px 20px"; // Minimal padding
        button.style.border = "none";  // No border
        button.style.borderRadius = "5px"; // Rounded corners (10px)
        button.style.cursor = "pointer";
        button.style.zIndex = "9999";
        button.style.fontSize = "14px"; // Subtle font size
        button.style.fontWeight = "600"; // Light weight for elegance
        button.style.transition = "all 0.3s ease-out"; // Smooth transition
        button.style.outline = "none";
        button.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)"; // Soft shadow for depth

        // Hover effect with scaling and subtle color change
        button.onmouseover = function() {
            button.style.transform = "scale(1.05)";
            button.style.background = "linear-gradient(135deg, #005f8e, #00c6ff)"; // Darker gradient on hover
            button.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
        };
        button.onmouseout = function() {
            button.style.transform = "scale(1)";
            button.style.background = "linear-gradient(135deg, #00c6ff, #0078d4)"; // Return to original gradient
            button.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
        };

        button.onclick = copyProjectDetails;
        document.body.appendChild(button);
    }

    function createPasteButton() {
        let pasteButton = document.createElement("button");
        pasteButton.innerText = "Paste Generated Bid"; // Button text
        pasteButton.style.position = "fixed";
        pasteButton.style.left = "20px"; // Positioned to the left side
        pasteButton.style.bottom = "20px";  // Adjusted bottom position
        pasteButton.style.background = "linear-gradient(135deg, #28a745, #218838)"; // Green gradient
        pasteButton.style.color = "#fff";  // White text color for contrast
        pasteButton.style.padding = "10px 20px"; // Minimal padding
        pasteButton.style.border = "none";  // No border
        pasteButton.style.borderRadius = "5px"; // Rounded corners (10px)
        pasteButton.style.cursor = "pointer";
        pasteButton.style.zIndex = "9999";
        pasteButton.style.fontSize = "14px"; // Subtle font size
        pasteButton.style.fontWeight = "600"; // Light weight for elegance
        pasteButton.style.transition = "all 0.3s ease-out"; // Smooth transition
        pasteButton.style.outline = "none";
        pasteButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)"; // Soft shadow for depth

        // Hover effect with scaling and subtle color change
        pasteButton.onmouseover = function() {
            pasteButton.style.transform = "scale(1.05)";
            pasteButton.style.background = "linear-gradient(135deg, #218838, #28a745)"; // Darker green gradient on hover
            pasteButton.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
        };
        pasteButton.onmouseout = function() {
            pasteButton.style.transform = "scale(1)";
            pasteButton.style.background = "linear-gradient(135deg, #28a745, #218838)"; // Return to original gradient
            pasteButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
        };

        pasteButton.onclick = pasteBid;
        document.body.appendChild(pasteButton);
    }

    function removeButtons() {
        let buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.remove());
    }

    function copyProjectDetails() {
        let projectDescription = document.querySelector('.ProjectDescription')?.innerText.trim();

        if (!projectDescription) {
            showPopup("❌ Could not find project details. Try manually selecting the text and copying.");
            return;
        }

        // Copy only the project description to clipboard
        navigator.clipboard.writeText(projectDescription).then(() => {
            showPopup("✅ Project details copied! Paste it in ChatGPT.");
        }).catch(err => {
            console.error("Clipboard copy failed:", err);
            showPopup("❌ Failed to copy project details.");
        });
    }

    function pasteBid() {
        navigator.clipboard.readText().then((bidText) => {
            let bidTextArea = document.querySelector("#descriptionTextArea");

            if (bidTextArea) {
                bidTextArea.value = bidText;
                showPopup("✅ AI-generated bid inserted!");
            } else {
                showPopup("❌ Bid textarea not found!");
            }
        }).catch(err => {
            console.error("Clipboard read failed:", err);
            showPopup("❌ Failed to paste bid.");
        });
    }

    function showPopup(message) {
        // Create and show popup with modern style
        let popup = document.createElement("div");
        popup.innerText = message;
        popup.style.position = "fixed";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.bottom = "80px";
        popup.style.backgroundColor = "#333";
        popup.style.color = "white";
        popup.style.padding = "8px 16px";
        popup.style.borderRadius = "30px";
        popup.style.zIndex = "9998";
        popup.style.fontSize = "12px";
        popup.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";
        popup.style.transition = "opacity 0.5s ease-in-out";
        document.body.appendChild(popup);

        // Automatically hide the popup after 1.5 seconds
        setTimeout(() => {
            popup.style.opacity = "0";
            setTimeout(() => {
                popup.remove();
            }, 500);
        }, 1500);
    }
})();
