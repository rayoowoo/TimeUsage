# Time Usage

## Background and Overview
Time Usage is a data visualization of survey results from the American Time Usage Survey (ATUS), conducted from 2009 to 2018, by the Bureau of Labor Statistics. The data is largely in average hours per day, categorized by the type of day (e.g. nonholiday weekday), and occasionally by other relevant categories (e.g. gender). More information about the survey can be found on [their website](https://www.bls.gov/tus/).

[Click here](https://rayoowoo.github.io/TimeUsage) for the live app.

## Functionality and MVPs

Users are able to view how Americans have used time on a daily basis based on a number of parameters:
* year (e.g. 2004)
* activity (e.g. Working)
* type of day (e.g. holidays and weekend days)
* gender
* averages across years
* change in one specific category from one year to another year (e.g. Working, from 2003 to 2008)

Additional features:
* The clock hands move as the data loads, acting as a loading animation. 
* The page can also be in dark mode with a button click. The button will be in the selector section. 

## Wireframes
![wireframe](/src/assets/images/time-usage-wireframe.png)

## Architecture and Technology
* Vanilla Javascript to handle the selecting logic and shaping the data received from ATUS.
* D3.js for injecting data into the DOM and manipulating the DOM based on the injected data.
* CSS for styling the visulization
* SCSS for modular CSS structure
* Themify for employing CSS themes
* Webpack for bundling scripts for modular composition of Javascript files

## Implementation Timeline

### Day 1
* Setup webpack, package.json.
* Create basic layout of the selectors, clock, and printed data areas.
* Gather and organize necessary data from the Department of Labor [website](https://www.bls.gov/tus/).
* Studying D3, with particular emphasis on pie charts. 

### Day 2
* Create selectors using Javascript.
* Visualize static data sets.

### Day 3
* Study D3 visualizations and CSS transitions.
* Add tabs for selecting which category (employed by gender, gender comparison, everyone by day, day comparison, app academy student, first year medical resident)
* Add clock effect for display hours.

### Day 4
* Dark Mode
* Instruction Modal
* Add clock effect for display hours.

### Day 5
* Debug, deploy. 

## Bonus Features
* Dark mode
* Introduction modal.