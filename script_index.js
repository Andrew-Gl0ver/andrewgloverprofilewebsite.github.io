document.addEventListener("DOMContentLoaded", function() {

    validateForm();

    const scrollIcon = document.getElementById("scroll");
    const brownColorChanger = document.getElementById("brown-color-changer");
    const blackColorChanger = document.getElementById("black-color-changer");
    const studentImages = document.getElementById("student-images");
    const name = document.getElementById("name");
    const attributes = document.getElementById("attributes");
   

    window.addEventListener("scroll", function() {

        if (window.scrollY > 0) {
            scrollIcon.style.display = "none";
        } 
        else {
            scrollIcon.style.display = "flex";
            scrollIcon.style.justifyContent = "center";
        }

    });


    brownColorChanger.addEventListener("click", function() {
        document.body.style.backgroundColor = "#402B19"; 
        studentImages.style.backgroundColor = "#D7D9D9";
        document.body.style.color = "#D9D9D9";
        name.style.color = "#D9D9D9";
        attributes.style.color = "#D9D9D9"
    });

    blackColorChanger.addEventListener("click", function() {
        document.body.style.backgroundColor = "#000000"; 
        studentImages.style.backgroundColor = "#595959";
        document.body.style.color = "#D9D9D9";
        name.style.color = "#D9D9D9";
        attributes.style.color = "#D9D9D9";
    });
});

function clearDefaultInput(input) {
    if (input.value === input.defaultValue) {
        input.value = ''
    }
}

function restoreDefaultInput(input) {
    if (input.value === '') {
        input.value = input.defaultValue
    }
}

function validateForm() {
    
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phoneNumber");
    const message = document.getElementById("message");
    const submitButton = document.getElementById("submit-button");
    const messagePanel = document.getElementById("message-panel");
    const mailImg = document.querySelector(".image-container");
    let validated = true;
    const emailPattern = /^[^\s@]+@(gmail\.com|hotmail\.com|dal\.ca|yahoo\.com)$/;

    submitButton.addEventListener("click", function validate(event) {
        event.preventDefault();

        messagePanel.innerHTML = "";

        if (firstName.value == 'First Name' || lastName.value == 'Last Name') {
            messagePanel.innerHTML += "Request failed: Please provide your first and last name";
            validated = false;
        }
        else if (!emailPattern.test(email.value)) {
            messagePanel.innerHTML += "Request failed: Email domain is not supported";
            validated = false;
        }
        else if (phoneNumber.value.length !== 10 || phoneNumber.value == "0000000000") {
            messagePanel.innerHTML += "Request failed: Please include your phone number and ensure it is exactly 10 digits long";
            validated = false;
        }
        else if (message.value == 'Message') {
            messagePanel.innerHTML += "Request failed: Please include a message/reason for contacting";     
            validated = false;
        }
        else {
            messagePanel.innerHTML += "Contact Submitted!";
            validated = true;
        }

        if (validated) {
            mailImg.style.border = "3px solid green"; 
        } 
        else {
            mailImg.style.border = "3px solid red"; 
        }
    });

    
}