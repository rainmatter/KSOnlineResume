/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var activeElement = "cl-link";

function switchContent(newLink) {
    

    document.getElementById(activeElement).classList.remove("active");

    document.getElementById(newLink).classList.add("active");
    
    if (activeElement !== newLink) {
        console.log(newLink);
        if (activeElement === "cl-link") {
            console.log(newLink);
            document.getElementById("cover-letter-content").style.display="none";
        } else if (activeElement === "res-link") {
            console.log(newLink);
            document.getElementById("resume-content").style.display="none";
        } else if (activeElement === "proj-link") {
            console.log(newLink);
            document.getElementById("projects-content").style.display="none";
        } else if (activeElement === "ds-link") {
            console.log(newLink);
            document.getElementById("dessum-content").style.display="none";
        } else if (activeElement === "con-link") {
            console.log(newLink);
            document.getElementById("contact-content").style.display="none";
        }
        if (newLink === "cl-link") {
            document.getElementById("cover-letter-content").style.display="block";
        } else if (newLink === "res-link") {
            document.getElementById("resume-content").style.display="block";
        } else if (newLink === "proj-link") {
            document.getElementById("projects-content").style.display="block";
        } else if (newLink === "ds-link") {
            document.getElementById("dessum-content").style.display="block";
        } else if (newLink === "con-link") {
            document.getElementById("contact-content").style.display="block";
        } 
    }
    activeElement = newLink;
};


