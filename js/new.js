// other skill//////////////////////////

const circles = document.querySelectorAll('.circle1');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;



    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');

    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
});


const form = document.querySelector('form');
const fullname = document.getElementById("name1");
const email = document.getElementById("email2");
const phonenumber = document.getElementById("number1");
const subject = document.getElementById("Subject1");
const message = document.getElementById("meassage1");



function sendEmail() {
    const bodymessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> PhoneNumber: ${phonenumber.value}<br>
     Subject: ${subject.value}<br> Message: ${message.value}<br> `;
    Email.send({
        SecureToken:"f5ebe820-6033-4416-ab29-e9b52382068f",
        To: 'owais2309c@aptechgdn.net',
        From: "owais2309c@aptechgdn.net",
        Subject: subject.value,
        Body: bodymessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item1");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }

            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a Valid Email Address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

    if (!fullname.classList.contains("error") && !email.classList.contains("error") && !phonenumber.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail();
    }

    form.reset();
    return false;
});
