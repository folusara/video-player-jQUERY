$(document).ready(function (){
"use strict";
  var play_pause     = $('#playButton'),
  container      = $('#videoContainer'),
  intensity      = $('#intensity'),
  progressBar    = $('#progressbar'),
  progress       = $('#progressBar #progress'),
  timer          = $('#intialTime'),
  vidDuration    = $('#fullTime'),
  timeState      = $('#time')
   
 $("#pause").hide()
$('#videoContainer').click(function () {
  $("#videoo").hide()
})
$("#addviddiv").click(function () {
  $("#addvid").click()  
})
$("#addviddivv").click(function () {
  $("#addvidd").click()  
})
// $("#addvid").change(function () {
//   console.log($("#addvid")[0].files[0])
// })



   $("#progressbar").click(function () {
    let prog = progressBar.offset()
    var mousePositionX = event.pageX- prog.left
    var width = progressBar.outerWidth()
    var currentSeconds = Math.round((mousePositionX / width) * videoo.duration);
    var currentMinutes  = Math.floor(currentSeconds/60);
    var currentHour =Math.floor(currentMinutes/60);
  
      if (currentMinutes > 0) {
       currentSeconds -= currentMinutes * 60;
    }
    if (currentSeconds.toString().length === 1) {
        currentSeconds = "0" + currentSeconds;
    }
     if (currentMinutes.toString().length === 1) {
         currentMinutes = "0" + currentMinutes;
   }
   if (currentHour.toString().length === 1) {
    currentHour = "0" + currentHour;
}
  
  
    timer.innerHTML = `${currentHour}:${currentMinutes}:${currentSeconds}`
    
  }) 
})

function skip() {
  let prog = $("#progressbar").offset()
  var mousePositionX = event.pageX - prog.left,
      width  =$("#progressbar").outerWidth();
 videoo.currentTime = (mousePositionX / width) * videoo.duration;
 updateplayer();
}

$("#progressbar").click(function () {
  skip(); 
});

function updateplayer() {
  // let percentage = (videoo.currentTime / videoo.duration) * 100;
  // $("#progress").css({'width': percentage + '%'});
  $("#intialTime").text(getPresentTime());
  $("#fullTime").text(getTimee());
}

function getTimee() {
setInterval(function () {
  let second = Math.ceil(videoo.duration % 60);
  let minute = parseInt((videoo.duration % 3600) / 60);
  let hour = parseInt((videoo.duration) / 3600);

//   if (minute > 0) {
//     second -= minute * 60;
//  }
   if (minute<10) {
       minute = "0" + minute;
   }
 
  if (second < 10) {
      second = "0" + second;
  }
  if (second == 60) {
    second = "0" + 0;
    minute++
    minute = "0" + minute;
}
if (minute == 60) {
  minute = "0" + 0;
  hour++
  hour = "0" + minute;
}

 
  let videoDuration=`${hour}:${minute}:${second}`
  
  $("#timerFullTime").html(videoDuration)
})
}
getTimee()

function getPresentTime() {
 
  var second = Math.round(videoo.currentTime);
  var minute  = Math.floor(second / 60);
  var hour =Math.floor(minute / 60);

   if (minute > 0) {
     second -= minute * 60;
  }
   if (second.toString().length === 1) {
       second = "0" + second;
    }
    if (minute.toString().length === 1) {
        minute = "0" + minute;
    }
    if (hour.toString().length === 1) {
      hour = "0" + hour;
  }
   let videoPresentTime=`${hour}:${minute}:${second}`
  
   $("#timerIntialTime").html(videoPresentTime)

}

$("#play").click(function () {
  videoo.play();
  $("#pause").show()
  $(this).hide()
  getTimee()
})

let progress = document.getElementById("progress");
const timer = document.getElementById("timer");


function progressLoop() {
   setInterval(function () {
   
    //  let progressValue = Math.round((videoo.currentTime/videoo.duration) * 100);
    //   var second = Math.round(videoo.currentTime)
    //   var minute  = Math.floor(second / 60);
    
    //    if (minute > 0) {
    //      second -= minute * 60;
    //   }
    //    if (second.toString().length === 1) {
    //        second = "0" + second;
    //     }
    //     if (minute.toString().length === 1) {
    //         minute = "0" + minute;
    //     }

 $total_width=$("#progressbar_wrapper").width();
 $width_inc=$total_width/10;
 if($("#progressbar").width()<$total_width)
 {
  $width=$("#progressbar").width()+$width_inc;
  $("#progressbar").animate({width:''+$width+''},300);
 }



       let videoPresentTime=`${minute}:${second}`
      document.getElementById("timer").innerHTML= videoPresentTime; 
      document.getElementById("timerIntialTime").innerHTML= videoPresentTime; 
      requestAnimationFrame(progressLoop);
    })
   
 };
 
 function reset_progressbar()
{
 $("#progress").animate({width:'0px'},300);
}


 var videoArray=[]

$("#scaleup").click(function () {
  videoo.requestFullscreen()
})


$("#pause").click(function () {
  videoo.pause()
  $(this).hide()
  $("#play").show()
})


$("#volumeImg").click(function () {
  $("#intensityBar").fadeIn(1000)
})

function disappear() {
  $("#addviddivv").hide()
  $("#instruction1").hide()
  $("#buttonn").click(function () {
    $("#left").fadeIn(1000)
  })

}

function setVolume() {
  var rangge = document.getElementById("intensity").value;
  videoo.volume = rangge /100;
  let volumee= videoo.volume * 100
  volumeNo.innerHTML= volumee 
  console.log(volumee)
}





function addTitle() {
  if ($("#addvid")[0].files[0].type !="video/mp4"  ) {
    alert("wrong file")
    return
  }
  addVideo = document.getElementById("addvid").files[0];
  console.log(videoArray);
  videoArray.push(addVideo);
 console.log(videoArray)
tbodyy.innerHTML="";
console.log(document.getElementById("addvid").files[0].name)
  AddVideo()
};


function openFile() {
  if ($("#addvidd")[0].files[0].type !="video/mp4" ) {
    alert("wrong file")
    return
  }
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var videooutput = document.getElementById('videoo');
      videooutput.src = dataURL;
    };
    var addVideo= document.getElementById("addvidd");   
    reader.readAsDataURL(addVideo.files[0]);
    $("#addviddivv").hide()
    $("#instruction1").hide()
  $("#videoCon").show()
    progressLoop()
    // requestAnimationFrame(progressLoop);
};

function AddVideo() {
 
    for (let index = 0; index < videoArray.length; index++) { 

      console.log(videoArray);
      tbodyy.innerHTML+= ` 
       <tr>
        <td onClick="playVideo(${index})"> ${videoArray[index].name}</td>   
        <td><button onClick="deletee(${index})" class="fa fa-dustbin btn btn-light"> Delete Video</button></td>
        </tr>
      `   
   }
 }

 function playVideo(index) {
  $("#addviddivv").hide()
  $("#videoCon").show()
  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    var videooutput = document.getElementById('videoo');
    videooutput.src = dataURL;
    console.log(dataURL)
  };
  
  reader.readAsDataURL(videoArray[index]);
 }


   function deletee(index) { 
    videoArray.splice(index, 1);
    tbodyy.innerHTML="";
    AddVideo();
      console.log(videoArray);
    }
    
        
    //  function saveTodo() {
    //     localStorage.setItem("todos",(videoArray))
    //   alert("onunload")
    //    console.log(videoArray);
    //  }
     
    // function getTodo() {
    //      videoArray=JSON.parse(localStorage.getItem("todos"));
    //      AddVideo()
    //     alert("onload")
    //    console.log(videoArray);
    // }
   

   
 