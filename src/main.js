const parse = (timeInput) => {
    let  outputTime, day, workingDate;

    const workingTime = timeInput.split(/((?:(now\/(\/)))[+-]\d+mon|[+-]\d+[smhdy])/).filter(item => item !== "" && item !== undefined);
    
    if (workingTime[0] = 'now()'){
        day = new Date(Date.now())
    } else {
        return
    }

    const parseString = (str) => {
        return (`${str}`);
    }
        
    function updateTime(object){   
        workingDate = day 
        console.log(parseString(`${day.getSeconds()}${timeUnits['s']}`));
        if (timeUnits['s']) workingDate.setSeconds(parseString(day.getSeconds()`${timeUnits['s']}`))
        // if (timeUnits['s']) workingDate.setSeconds(`${day.getSeconds()} ${timeUnits['s']}`)
        // if (timeUnits['m']) workingDate.setMinutes(`${day.getMinutes()} ${timeUnits['m']}`)
        // if (timeUnits['h']) workingDate.setHours(`${day.getHours()} ${timeUnits['h']}`)
        // if (timeUnits['d']) workingDate.seDate(`${day.getDate()} ${timeUnits['d']}`)
        // if (timeUnits['mon']) workingDate.setMonth(`${day.getMonth()} ${timeUnits['mon']}`)
        // if (timeUnits['y']) workingDate.setYear(`${day.getSeconds()} ${timeUnits['y']}`)
        return day
    }
    
    let timeUnits = {
        s: null,
        m: null,
        h: null,
        d: null,
        mon: null,
        y: null
    }

    Object.entries(timeUnits).forEach(([key,value]) =>{
        let match = workingTime.filter(item => item[item.length-1] === key)[0]
        if (match){
            // console.log({match})
            timeUnits[key] = match.substring(0,match.length-1)
            console.log(timeUnits[key], {day})
        }
    });
    workingDate = updateTime(day);
    
    // let outputTime = new Intl.DateTimeFormat(
    //     'en-CA',{
    //         timeZone: 'UTC', 
    //         year: "numeric",
    //         month: "numeric",
    //         day: "numeric",
    //         hour: "numeric",
    //         minute: "numeric",
    //         second: "numeric",
    //         fractionalSecondDigits: 2,
    //         hour12:false}).format(day).replace(', ','T').concat('Z');
            // hour12:false}).format(day).toISOString();
    return workingDate;
};



module.exports = {parse}