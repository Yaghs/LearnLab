//creates a function called dropdownMenu with no parameters
function dropdownMenu() {
    //assigns variable x to method document.getElementID and selects dropdownClick as the ID for the method parameter
    //this is used for toggling the display of the menu when the three lines are touched
    var x = document.getElementById("dropdownClick");
    //if statement checks if className, an attribute of x IS topnava nd if so add it to the responsive class
    if (x.className === "topnav") {
        x.className += " responsive";
        //changes topnav to topnav.responsive//
        //if the condition is not met, the classname attribute of x is set to topnav removing the responsive class from the element 
    } else {
        x.className = "topnav";
    }
}


dropdownMenu();