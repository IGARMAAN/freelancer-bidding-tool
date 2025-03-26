# Freelancer Bidding Tool

## Overview
Freelancer Bidding Tool is a **Tampermonkey userscript** that streamlines the bidding process on Freelancer.com. It allows users to **quickly copy project details** and **paste pre-generated bids** with a single click, reducing manual effort and enhancing efficiency.

I developed this tool out of necessity—Freelancer’s built-in bid suggestion system isn’t great, and writing custom bids manually for each project was too time-consuming. Originally, I planned for a **fully automated** AI-based solution, but due to API costs and restrictions, I built a semi-automated alternative that combines **manual AI-generated responses** with automated copying and pasting.

This tool is ideal for **Freelancer users who regularly bid on projects** and want a faster, more effective way to submit personalized proposals.

## Features
✅ **Copy Project Details** – Instantly copies the full project description for easy pasting into ChatGPT or another AI tool.  
✅ **Paste AI-Generated Bid** – With one click, inserts your pre-written bid into Freelancer’s bid submission form.  
✅ **Smart UI Integration** – The script automatically detects Freelancer project pages and adds buttons for a seamless experience.  
✅ **Lightweight & Fast** – No external dependencies; works efficiently in the browser.  

## Installation Guide
### Step 1: Install Tampermonkey
To run the script, you’ll need **Tampermonkey**, a popular browser extension for running userscripts.

- **Chrome**: [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Edge**: [Tampermonkey for Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/)

### Step 2: Install the Script
1. Open Tampermonkey from your browser toolbar.
2. Click **"Create a new script"**.
3. Delete the default template and paste the Freelancer Bidding Tool script from the repository, named 'script.user.js'.
4. Click **"Save"** (or Ctrl + S).

### Step 3: Enable the Script
1. In Tampermonkey, go to the **"Installed Userscripts"** tab.
2. Ensure the script is **enabled**.
3. Visit **Freelancer.com**, open a project page, and you should see the new buttons appear.

## How It Works
1. **Click "Copy Project Info"** – Copies the project description to your clipboard.
2. **Paste into ChatGPT or an AI tool** – Generate a custom bid.
3. **Click "Paste Generated Bid"** – Inserts your AI-generated response into the Freelancer bid form.
4. **Submit the bid** – Save time and bid smarter!

## Troubleshooting
- If the buttons don't appear, **refresh the page**.
- Ensure Tampermonkey is installed and the script is **enabled**.
- If the script stops working, check for updates or reinstall.

## Future Improvements
🔹 Automate AI-based bid generation (if API access becomes feasible).  
🔹 Improve UI with a more integrated look.  
🔹 Allow quick editing of the bid before pasting.  

## Contributing
This project is open-source. Feel free to **fork, modify, and improve**!  

**GitHub Repository**: [Freelancer Bidding Tool](github.com/armaanux/freelancer-bidding-tool)

## License
MIT License – Free to use and modify.  
