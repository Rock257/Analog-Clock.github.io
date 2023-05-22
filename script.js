// logic //


// for hour hand 
//  12 hour eq. = 360 deg
 
// 1 hour = 360deg/12 = 30 deg //
 

// 60 min  = 30deg
// 1 min   = 30/60 = 1/2 deg. or 0.5 deg

// for h  hour 

// h hour  = 30deg * h + M/2


// for min hand //

// 60 min  = 360 deg 
// 1 min = 360/60 = 6 deg 

// for m min  = 6deg * m


// for second hand //

// 60 sec = 360 deg
//  1 sec = 360/60 deg  = 6 deg.

// for  s sec = 6deg *s


setInterval( () =>{

    d = new Date();

    htime  = d.getHours(); 
    mtime = d.getMinutes();
    stime = d.getSeconds();

    // console.log(htime +':'+  mtime +':'+stime )

    hrotation = 30*htime +mtime/2;
    mrotation = 6*mtime ;
    srotation = 6*stime ;

    // document.getElementById('hourhand').style.transform = "rotate(${hrotation}deg)";
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform =`rotate(${mrotation}deg)`;
    second.style.transform =`rotate(${srotation}deg)`;
},1000);