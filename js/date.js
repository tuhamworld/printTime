// Where you want to show your date
let pDate = document.querySelector('#date')

//  Function to create date
function showTime() {
    let today = new Date();
    let am = 'am';
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let todayDate = today.toDateString();

    if (hour < 12) {
        am = 'am'
    } else {
        am = 'pm'
    }

    pDate.textContent = todayDate + ' | ' + hour + ':' + minutes + ':' + seconds + am;
}

// Automatically change date
setInterval(showTime, 1000);