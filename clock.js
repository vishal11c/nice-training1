let time = document.getElementById('time')
let day = document.getElementById('day')
let second = document.getElementById('second')
let twelvehour = document.getElementById('twelvehour')
let twelvehourToggle = document.getElementById('format-toggle-twelve')

const dayDict = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

let formatToggle = false
let clock = ()=>{
    let present = new Date();
    let presentHour = present.getHours();
    let presentMinute = present.getMinutes();
    let presentSecond = present.getSeconds();
    twelvehourToggle.addEventListener('click',()=>{
      formatToggle =  twelvehourToggle.classList.toggle('format-toggle-twenty')
    })
    if(formatToggle === false){
        const ampm = presentHour >= 12 ? 'PM' : 'AM';
        presentHour = presentHour % 12 || 12;
        time.innerHTML = `${padZero(presentHour)}:${padZero(presentMinute)}`
        second.innerHTML = `${padZero(presentSecond)}`
        twelvehour.innerHTML = ampm
    }else{
        time.innerHTML = `${padZero(presentHour)}:${padZero(presentMinute)}`
        second.innerHTML = `${padZero(presentSecond)}`
        twelvehour.innerHTML = ''
    }
    day.innerHTML = dayDict[present.getDay()]
}
setInterval(clock,1)

let padZero = (number)=> {
    return number < 10 ? '0' + number : number;
}