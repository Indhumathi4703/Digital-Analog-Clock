function createRandomNumbers(min,max){
   return Math.floor(Math.random() * (max-min +1) + min)
} 
console.log(createRandomNumbers(100,200));

const clockBox = document.querySelector('.clockBox')
function createClock(){
    const div =document.createElement('div');
    div.setAttribute('class','clock');
    const minuteHand =document.createElement('div');
    minuteHand.setAttribute('class','minuteHand');
    minuteHand.setAttribute('style','transform: rotate('+createRandomNumbers(-360,360)+'deg)');
    const dot =document.createElement('div');
    dot.setAttribute('class','dot');
    const hourHand =document.createElement('div');
    hourHand.setAttribute('class','hourHand');
    hourHand.setAttribute('style','transform: rotate('+createRandomNumbers(-360,360)+'deg)');

    div.appendChild(minuteHand);
    div.appendChild(dot);
    div.appendChild(hourHand);

    return div
}
for(let i=0;i<80;i++) {
    clockBox.append(createClock());
}

const minuteHand = document.querySelector('.minuteHand');
const hourHand = document.querySelector('.hourHand');

var setMinuteArray =[90,90,90,180,90,90,180,230,180,90,-90,0,
                     90,180,0,230,180,0,0,0,230,180,0,230,180,0,0,0,
                     230,180,0,230,180,90,-90,0,90,-90,0,-90,0,-90,90,
                     -90,0,-90,90,0,90,90,-90,180,90,90,-90,180,180,180,
                     90,0,-180,90,-90,-180,180,0,90,-90,0,0,-90,0,90,-90,
                     180,0,30,90,-90,-30,90,-90,-90,-180,180,90,-90,180,90,
                     90,-90,0,0,-90,90,0];

var setHoursArray =[180,-90,-90,-90,-180,-90,-90,-230,0,180,180,180,0,-90,
180,230,0,180,180,180,230,0,180,230,0,180,180,180,230,0,180,230,0,0,180,
180,0,90,180,90,90,-90,0,90,90,-90,-90,180,-90,90,-90,180,-90,90,-90,0,
90,-90,-90,0,180,180,0,0,90,-90,180,130,90,0,-130,0,90,-90,180,180,180,180,
180,180,90,0,0,0,0,0,0,0,-90,90,-90,90,90,-90,-90];  

setTimeout(function(){
    for(let i=0; i< setMinuteArray.length; i++){
        minuteHand[i].setAttribute('style','colour:pink','transition:'+createRandomNumbers(5,10)+'s;transform:rotate('+setMinuteArray[i]+'deg)');
    }
    for(let i=0; i< setHoursArray.length; i++){
        hourHand[i].setAttribute('style','colour:pink','transition:'+createRandomNumbers(5,10)+'s;transform:rotate('+setHoursArray[i]+'deg)');
    }
},4000)

