let btnSendMsg = document.getElementById("btnSendMsg");
let closeBtn = document.querySelector(".close-btn");
let modal = document.querySelector(".custom-model-main");

let txtName = document.getElementById("txtName");
let phoneNumber = document.getElementById("phoneNumber");
let dateDOB = document.getElementById("dateDOB");
let txtFrom = document.getElementById("txtFrom");
let txtTo = document.getElementById("txtTo");
let numberOfPersons = document.getElementById("numberOfPersons");
let dateCheckIn = document.getElementById("dateCheckIn");
let dateCheckOut = document.getElementById("dateCheckOut");
let bookBtn = document.getElementById("bookBtn");
let bookingResult = document.getElementById("modal-container");

let lblName = document.getElementById("lblName");
let lblMobile = document.getElementById("lblMobile");
let lblAge = document.getElementById("lblAge");
let lblFrom = document.getElementById("lblFrom");
let lblTo = document.getElementById("lblTo");
let lblNoOfPersons = document.getElementById("lblNoOfPersons");
let lblDays = document.getElementById("lblDays");

let contactName = document.getElementById("contactName");
let contactEMail = document.getElementById("contactEMail");
let contactNumber = document.getElementById("contactNumber");
let contactSubject = document.getElementById("contactSubject");

phoneNumber.onkeyup = () => {
    if (isNaN(phoneNumber.value)) {
        phoneNumber.value = "";
    }
}

numberOfPersons.onkeyup = () => {
    if (isNaN(numberOfPersons.value)) {
        numberOfPersons.value = "";
    }
}

contactNumber.onkeyup = () => {
    if (isNaN(contactNumber.value)) {
        contactNumber.value = "";
    }
}

// btnSendMsg.addEventListener("click", () => {
//     if (contactName.value == "" || contactEMail.value == "" || contactNumber.value == "" || contactSubject.value == "") {
//         modal.classList.remove('model-open');
//     }
//     else {
//         modal.classList.add('model-open');
//     }
// })

function onSendMessagebtnClick() {
    if (contactName.value == "" || contactEMail.value == "" || contactNumber.value == "" || contactSubject.value == "") {
        modal.classList.remove('model-open');
    }
    else {
        modal.classList.add('model-open');
    }
}

closeBtn.addEventListener("click", () => {
    modal.classList.remove('model-open');
})

// bookBtn.addEventListener("click", () => {
//     showOrHideBookingResult();
//     fillBookingDetailsModal();
//     return;
// })

function bookButtonClick() {
    console.log("Book button click..!");
    showOrHideBookingResult();
    fillBookingDetailsModal();
}

function showOrHideBookingResult() {
    if (txtName.value == "" || phoneNumber.value == "" || dateDOB.value == "" || txtFrom.value == "" || txtTo.value == "" || numberOfPersons.value == "" || dateCheckIn.value == "" || dateCheckOut.value == "") {
        bookingResult.style.display = "none";
    }
    else if (bookingResult.style.display == "none") {
        bookingResult.style.display = "block";
        bookBtn.innerHTML = "Close Details";
        // bookBtn.value = "Close Details";
    }
    else {
        bookingResult.style.display = "none";
        bookBtn.innerHTML = "Book Now";
        // bookBtn.value = "Book Now";
    }
}

function fillBookingDetailsModal() {
    lblName.innerHTML = txtName.value;
    lblMobile.innerHTML = phoneNumber.value;
    lblAge.innerHTML = claculateAge();
    lblFrom.innerHTML = txtFrom.value;
    lblTo.innerHTML = txtTo.value;
    lblNoOfPersons.innerHTML = numberOfPersons.value;
    lblDays.innerHTML = claculateDays();
}

function claculateAge() {
    var userinput = dateDOB.value;
    var dob = new Date(userinput);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
}

function claculateDays() {
    var date1, date2;
    //define two date object variables with dates inside it  
    date1 = new Date(dateCheckIn.value);
    date2 = new Date(dateCheckOut.value);
    //calculate time difference  
    var time_difference = date2.getTime() - date1.getTime();
    //calculate days difference by dividing total milliseconds in a day  
    var days_difference = time_difference / (1000 * 60 * 60 * 24);
    return days_difference;
}