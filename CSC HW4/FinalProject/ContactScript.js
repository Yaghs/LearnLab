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

const form = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
    validate: function() {
        if (this.name.value == "") {
            alert("Please enter your name");
            return false;
        }
        if (this.email.value == "") {
            alert("Please enter your email");
            return false;
        }
        if (this.subject.value == "") {
            alert("Please enter the subject of your message");
            return false;
        }
        if (this.message.value == "") {
            alert("Please enter your message");
            return false;
        }
        return true;
    }
};

const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', function() {
    if (form.validate()) {
        alert("Request sent!");
    }
});