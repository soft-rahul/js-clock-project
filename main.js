//clock function

const myClock = () => {
    const dateObj = new Date();

    // accessing different values from date object
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let date = dateObj.getDate();
    let day = dateObj.getDay();
    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    let second = dateObj.getSeconds();
    let timezone;
    let ele = document.getElementById('time');


    // array for month and day 
    let myMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];

    let myDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //make time 12 hours format

        if(hour<12){
            timezone = 'AM';
        }else if(hour>12){
            hour -= 12;
            timezone = 'PM';
        }else if(hour == 12){
            timezone = 'PM';
        }else if(hour == 0){
            timezone = 'AM';
        }

        //adding zero to minute and seconds
        if(second < 10){
            second = '0' + second;
        }

        if(hour < 10){
            hour = '0' + hour;
        }

        if(minute<10){
            minute = '0' + minute;
        }




    //output
    ele.innerHTML = myDays[day] + ' ' + date + ' ' + myMonth[month] + ' , ' + year + ' ' + 
                    hour + ':' + minute + ':' + second + ' ' + timezone;


};

// calling function every second
setInterval(myClock,1000);