# Framingham Risk Score Calculator

## Overview

This single-page web application calculates a user’s 10-year coronary heart disease risk using the Framingham Risk Score. Built with hand‑written HTML, CSS, and JavaScript, it simulates a multi-page experience via DOM manipulation.

## Requirements

- Plain HTML, CSS, and JavaScript (no external frameworks or libraries)  
- Single HTML file (`index.html`) with separate `style.css` and `script.js`  
- Multiple “views” (age/gender, cholesterol, smoking, blood pressure, results) controlled via JS/DOM  
- Appropriate, intuitive input controls (e.g., sliders for age, radio buttons, dropdowns)  

## Structure

```
/ (root)
│   index.html      ← Single HTML containing all views
│   style.css       ← Application stylesheet
│   script.js       ← JavaScript controlling views and calculations
└───assets/
    └───images/     ← (optional) any icons or illustrations
```

## Features

1. **Multi-view navigation**  
   - Five “pages”:  
     1. Age & gender  
     2. Total cholesterol & HDL  
     3. Smoking status  
     4. Treated/untreated blood pressure  
     5. Risk score output  
   - Next/Previous buttons manipulate DOM to show/hide views.  

2. **Framingham calculation**  
   - Implements male/female scoring tables from Wikipedia “Scoring” section  
   - Accumulates points per input, then maps total to 10‑year percentage  

3. **Input controls**  
   - Age: slider (`<input type="range">`)  
   - Cholesterol & HDL: numeric input (`<input type="number">`)  
   - Smoking: radio buttons  
   - Blood pressure: numeric input with radio for treatment status  

4. **Presentation**  
   - Professional CSS design: responsive layout using CSS Grid  
   - Clear form labels, sections, and result display  

## Usage

1. Open `index.html` in a modern browser (Chrome/Firefox).  
2. Navigate through steps, entering values.  
3. On the final view, view and interpret your 10‑year risk percentage.  
4. Click “Restart” to re-run the survey.
