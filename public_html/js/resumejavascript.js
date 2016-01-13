/*
Online Resume
JavaScript file that manages which content is being viewed.
 
    Created on : Jan 12, 2016, 12:50:45 PM
    Author     : Kimberly Stewart
    Last updated: 1/12/2016
*/

var activeElement = "cl-link";

function switchContent(newLink) {
    
    //If the page is changing.
    if (activeElement !== newLink) {
        //Remove the active class from the current page.
        document.getElementById(activeElement).classList.remove("active");
        //Add the active class to the page that was clicked on.
        document.getElementById(newLink).classList.add("active");

        //Hide the previous page content.
        //console.log(newLink);
        if (activeElement === "cl-link") {
            document.getElementById("cover-letter-content").style.display="none";
        } else if (activeElement === "res-link") {
            document.getElementById("resume-content").style.display="none";
        } else if (activeElement === "proj-link") {
            document.getElementById("projects-content").style.display="none";
        } /*else if (activeElement === "ds-link") {
            document.getElementById("dessum-content").style.display="none";
        }*/ else if (activeElement === "con-link") {
            document.getElementById("contact-content").style.display="none";
        }
        //Show the current page content
        if (newLink === "cl-link") {
            document.getElementById("cover-letter-content").style.display="block";
        } else if (newLink === "res-link") {
            document.getElementById("resume-content").style.display="block";
        } else if (newLink === "proj-link") {
            document.getElementById("projects-content").style.display="block";
        } /*else if (newLink === "ds-link") {
            document.getElementById("dessum-content").style.display="block";
        }*/ else if (newLink === "con-link") {
            document.getElementById("contact-content").style.display="block";
        } 
    }
    //Set the active element as the new content
    activeElement = newLink;
};


