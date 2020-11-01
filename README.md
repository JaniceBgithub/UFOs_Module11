# UFOs_Module11

## Overview

This project created a webpage from a database of UFO sitings and then filters information based on the user inputs

## Results

Initially, the entire table is displayed on the webpage

![full](https://github.com/JaniceBgithub/UFOs_Module11/blob/main/static/images/full_table.png)

Then, the user can enter a value in one of the fields and the table updates.  The code runs each time the user changes something and then clicks on the page.  This example shows the site filtered for California:

![Ca](https://github.com/JaniceBgithub/UFOs_Module11/blob/main/static/images/Ca_table.png)

### Summary

The main drawback of this code is that it will re-run a number of times after each field is updated. It would probably be more efficient to just run through the code one time and then update. 

Improvements that could be made include:

- Better error checking.  If the user inputs things in the wrong form or case, then no values will be found
- It may be inefficient to keep the code in a javascript file - the data could be stored in a database and then only the entries of interest can be loaded onto the webpage 








