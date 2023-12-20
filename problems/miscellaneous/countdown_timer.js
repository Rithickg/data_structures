// Countdown Timer 

function countdownTimer(){
    let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

    let x = setInterval(function(){
        let now = new Date().getTime();

        let timeLeft = countDownDate - now;

        const days = Math.floor(timeLeft/(1000*60*60*24));
        const hours = Math.floor(timeLeft/(1000*60*60) % 24);
        const minutes = Math.floor((timeLeft/1000/60) % 60);
        const seconds = Math.floor((timeLeft/1000) % 60);

        console.log(days + 'd' + hours + 'h' + minutes + 'm' + seconds + 's');

        if(timeLeft < 0){
            clearInterval(x);
            console.log("CountDown Finished");
        }
        
    },2000)

    
    return console.log(countDownDate)
}

countdownTimer()

// Count down for 10 seconds 
 function countDown(timeInSeconds){

    const countdownDuration = timeInSeconds;
    let secondsLeft = countdownDuration;
    console.log(secondsLeft)
    const timer = setInterval(function(){
        secondsLeft--;
        console.log(secondsLeft);

        if(secondsLeft <=0){
            clearInterval(timer);
            console.log("Countdown is over!")
        }
    },1000)
 }

 countDown(5)

 export {countdownTimer,countDown}