# Daily-Planner-App

## My seventh challenge with the edX Bootcamp

I completed this task for the seventh challenge in the edX Skills Boot Camp in Front-End Web Development. I was tasked with creating code for a daily planner app. I was provided with HTML and CSS starter code and then needed to edit the HTML and CSS, then write JavsScript code.  This task aimed to use the JavaScript and jQuery skills I had learned during the week. I used jQuery syntax to find and create HTML elements and also used dayjs() to display the date and store the current time. I also continued to build on my Javascript skills by using if statements and functions to dynamically add rows to the browser. 

## Usage
This is a daily planner app designed to display the current day at the top of the calendar when a user opens the planner. The user can see the hours for a standard business day and the hours are colour coded for convenience. The user can click on an event for the specified time and input their event. If the user clicks on 'save' then the events will be saved, even if the user refreshes the page. If the user would like to clear the events they can click on 'clear events' at the top of the planner. 
The screenshot clearly shows these buttons and the dynamically added rows. 

[linktoscreenshot](images/screenshot.png)

Here is a link to the final webpage: https://hannahlas.github.io/Daily-Planner-App

## Acknowledgements

I used Chat GPT and Xpert Learning Assistant to help me troubleshoot. In particular, I used code from Xpert Learning Assistant to help correct my code to save content to the local storage. The code below was written by Xpert Learning Assistant:
//Displays any events saved to local storage
    const storedEventText = localStorage.getItem("event_" + hour);
    if (storedEventText) {
      textarea.val(storedEventText);
    }
    eventBlock.append(textarea);

 // Saves to local storage
      const eventText = textarea.val();
      localStorage.setItem("event_" + hour, eventText);
      alert("Event saved!");
      
## License
MIT License

Copyright (c) 2023 Hannah Lassey]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
