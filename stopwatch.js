window.onload = function () {
  var sec = '00';
  var mili = '00';
  var min = '00'
  var appendmili = document.getElementById("mili");
  var appendsec = document.getElementById("sec");
  var appendmin = document.getElementById("min");
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var reset = document.getElementById("reset");
  var lap = document.querySelector("#lap");
  var i=0;
  function Time() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    const time = `${hours}:${mins}:${secs}`;
    document.getElementById('time').textContent = time;
  }

  setInterval(Time, 1000);
  Time();
  start.onclick = function () {
    clearInterval(time);
    time = setInterval(startTimer, 10);
    console.log(i)
  };

  stop.onclick = function () {
    clearInterval(time);
  };

  lap.onclick = function () {
    if(mili!=0||sec!=0||min!=0){
      if(i<=5)
      {
        i++;
        sec2=sec
        if(sec<9&&sec>0)
         var sec2='0'+sec.toString()
      z="r"+i
      document.getElementById(z).innerHTML=i+". "+min+":"+sec2+"."+mili;
    }
    else{
      clearInterval(time);
      alert("Max numer of laps reached!!");
    }
  }
    else
      alert("Start the watch first!!");
  };

  reset.onclick = function () {
    clearInterval(time);
    mili = "00";
    sec = "00";
    min = "00";
    appendmili.innerHTML = mili;
    appendsec.innerHTML = sec;
    appendmin.innerHTML = min;
    for (i=1;i<=6;i++)
    document.getElementById("r"+i).innerHTML=i+". "+"00:00.00";
    i=0
  };

  function startTimer() {
    mili++;

    if (mili <= 9) {
      appendmili.innerHTML = "0" + mili;
    }

    if (mili > 9) {
      appendmili.innerHTML = mili;
    }

    if (mili > 99) {
      sec++;
      appendsec.innerHTML = "0" + sec;
      mili = 0;
      appendmili.innerHTML = "0" + 0;
    }

    if (sec > 9) {
      appendsec.innerHTML = sec;
    }
    if (sec > 59) {
      min++;
      appendmin.innerHTML = "0" + min;
      sec = 0;
      appendsec.innerHTML = "0" + 0;
    }
  }
};
var current=new Date()
  while(1) 
    {document.getElementById('time').innerHTML=current.getHours()+":"+current.getMinutes()+":"+current.getSeconds();
}
