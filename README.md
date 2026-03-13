# Fetching-Dog-Data-with-JavaScript
### Student: Victoria Salomon
# Dog API Fetch Assignment

## Project Description

This project uses the JavaScript Fetch API to retrieve data from the Dog API and display it in a web page.  
The application allows the user to load dog breeds, view breed details, and fetch random dog facts.

Dog API used:
https://dogapi.dog/docs/api-v2

---

## Features

- Fetch list of dog breeds
- Display breed names in HTML list
- Click breed to see details
- Fetch dog facts
- Error handling for failed requests
- Interactive UI using JavaScript

---
### index.html
Contains the structure of the web page and buttons to trigger API requests.

### script.js
Contains all JavaScript logic:
- Fetch requests
- Error handling
- DOM updates
- Event listeners

### README.md
Documentation of the project.

---

## How to Run the Project

1. Download or clone the repository
2. Open the project folder
3. Open index.html in Google Chrome

OR using VS Code Live Server:

1. Open folder in VS Code
2. Right click index.html
3. Click "Open with Live Server"

The page should load with buttons:
- Load Breeds
- Load Facts

---

## API Endpoints Used

Get breeds
https://dogapi.dog/api/v2/breeds


Get breed details
https://dogapi.dog/api/v2/breeds/{id}

Get facts
https://dogapi.dog/api/v2/facts

## Test Cases

### Normal Test Cases

1. Load Breeds button shows breed list
2. Clicking a breed shows details
3. Load Facts shows dog facts

### Edge Test Cases

1. Wrong API URL shows error in console
2. Invalid breed ID does not crash program
3. No internet connection shows fetch error


