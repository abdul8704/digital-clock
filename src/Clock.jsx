import React, {useState, useEffect} from "react";

function Clock(){
    console.log(new Date());
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    })

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const am_pm = (hours >= 12) ? "PM" : "AM";

        hours = (hours%12) || 12;
        
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${am_pm}`;
    }
    function formatDate(){
        const date = time.getDate();
        let day = time.toLocaleDateString("en-US", { weekday: "long" });
        const month = time.toLocaleString("en-US", { month: "long" });
        const year = time.getFullYear();



        return `${day}, ${padZero(date)} ${month} ${year}`
    }

    function padZero(num){
        if(num < 10)
            return "0" + num;
        return num; 
    }

    return (
      <div className="time-container">
        <div className="time">{formatTime()}</div>
        <div className="day">{formatDate()}</div>
      </div>
    );
}

export default Clock;