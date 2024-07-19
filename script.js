window.addEventListener('DOMContentLoaded', function() {
    let start_btn = document.getElementById('start');
    let stop_btn = document.getElementById('stop');
    let reset_btn = document.getElementById('reset');
    let hour=0;
    let minute = 0;
    let second = 0;
    let milisecond = 0;
    let timer = false;
  
    start_btn.addEventListener("click", function (){
        timer = true;
        stopwatch();
        function stopwatch(){
        
            if (timer){
                milisecond++;
                if(milisecond ==99){
                    second++;
                    milisecond = 00;
                }
                if(second ==60){
                    minute++;
                    second = 00;
                }
                if (minute == 60){
                    hour++;
                    minute = 00;
                }
                if (hour == 10){
                    console.log("It's been a long since 10 hours, now please take some rest, and continue after sometime");
                }
                document.getElementById('hours').textContent= Formattime(hour);
                document.getElementById('minutes').textContent= Formattime(minute);
                document.getElementById('seconds').textContent= Formattime(second);
                document.getElementById('miliseconds').textContent= Formattime(milisecond);
                setTimeout(stopwatch,10);
            }
        };
        function Formattime(e){
            return String(e).padStart(2,'00');
        }
    });
    stop_btn.addEventListener("click", function(){
        timer = false;
    });
    reset_btn.addEventListener("click", function(){
        timer= false;
        hour = 00;
        minute= 00;
        second = 00;
        milisecond = 00;
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
        document.getElementById('miliseconds').innerHTML = "00";
    })
    
})