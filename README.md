# Time Usage

## Background and Overview
Time Usage is a data visualization of survey results from the American Time Usage Survey (ATUS), conducted from 2003 to 2018. The data is largely in average hours per day, categorized by the type of day (e.g. nonholiday weekday), and occasionally by other relevant categories (e.g. gender). 

## Functionality and MVPs

Users are able to view how Americans have used time on a daily basis based on a number of parameters:
* year (e.g. 2004)
* activity (e.g. Working)
* type of day (e.g. holidays and weekend days)
* averages across years (animated to show proportions change)
* change in one specific category from one year to another year (e.g. Working, from 2003 to 2008)

Additional features:
* When displaying the data for single years, the clock hand can move and slowly reveal the data as the hand moves. 
* The page can also be in dark mode with a button click. The button will be in the selector section. 

## Wireframes
![wireframe](/src/assets/images/time-usage-wireframe.png)

## Architecture and Technology
* Vanilla Javascript to handle the selecting logic
* D3.js for injecting data into the DOM and manipulating the DOM based on the injected data.
* CSS for styling the visulization
* Webpack for bundling scripts for modular composition of Javascript files

## Implementation Timeline

### Day 1
* Setup webpack, package.json.
* Create basic layout of the selectors, clock, and printed data areas.
* Gather and organize necessary data from the Department of Labor website (https://www.bls.gov/tus/).
* Create selectors using Javascript.

### Day 2
* Studying D3, with particular emphasis on pie charts. 
* Visualize static data sets.
* Study D3 visualizations and CSS transitions.

### Day 3
* Add clock effect for display hours.

### Day 4
* Add clock effect for display hours.

### Day 5
* Dark mode, debug, deploy. 

## Bonus Features
* Another clock might be beneficial for comparing and contrasting two specific years.
* Single year selections are largely static, but multiple year selections have the option of being cycled through rather than averaged as a whole. There would be transitions as the proportions change.