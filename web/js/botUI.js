
$(function(){
    //for css particle /////////////////////////////////////////////////////////////////
particlesJS("particles-js", {
  particles: {
    number: { value: 400, density: { enable: true, value_area: 800 } },
    color: { value: "#d45d64" },
    shape: {
      type: "star",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 6,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
    
//////start from  here//////////////////////////////////////////////////////////////

//wait for half second after loading the page to show welcome message and about me
$(window).load(function(){
   function showInitialMessage(){
      $("#botMsg").show();
      $("#info").show();
   };
   window.setTimeout( showInitialMessage, 500); // 1/2 second
});

/////////////////////////Main start//////////////////////////////////////////////
//variables
var username="User";
var userMsgText="";
var botSide="left";
var userSide="right";
var botMsgText="";
var botName="Bot";

// on click of send button
$('#send').click(function(event){
    function showUserMessage(){
        userMsgText = $('#queryInput').val();
        if (userMsgText.trim()) {
            // is empty or whitespace
            addMessageToChat(username,userMsgText,userSide);
           
///////////////////////////////////// temp example of conversation//////////////////////////////
            window.setTimeout(showWaitingBox(),200);
            
            if(userMsgText=="hi" || userMsgText=="hello"){
                botMsgText="Hello! "+username+" how are you? tell me something about yourself please!";
                window.setTimeout(() => {
                    $('#waitMsg').last().remove();
                    addMessageToChat(botName,botMsgText,botSide);
                },1500);
            }else{
                botMsgText="Sorry! I din't understand it.";
                window.setTimeout(() => {
                    $('#waitMsg').last().remove();
                    addMessageToChat(botName,botMsgText,botSide);
                },1500);
                
            }
////////////////////////////////////////////////////////////////////////////////////////////////
        }
    }
    window.setTimeout(showUserMessage, 300);
});

//trigger send message on enter key stroke
$('#queryInput').keypress(function(event){ 
    var keyCode = (event.keyCode ? event.keyCode : event.which);   
    if (keyCode == 13) {
        $('#send').click();
    }
});
    
    
//functions
    //to system time
    function showTime(){
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        $('#msg-info-time-left').text(time);
        return time;
    }

    //to add user massage
    function addMessageToChat(username, textMsg, side){
        var img="";
        if(side=="left"){
            img="bot";
        }else{
            img="user";
        }
        var msgHtml = `
            <div id="userMsg">
                <div class="container-fluid">
                    <div class="row">
                          <img src="images/${img}.png" height="30" width="30" class="pull-${side}">
                          <div class="col-xs-7 pull-${side}" style="padding:3px;">
                              <div id="msg-bubble-${side}" class="container-fluid pull-${side}">
                                  <p id="msg-info-name-${side}" style="font-size:11px; color:chocolate; margin:0px;">${username}</p>
                                  <p style="margin:0px; font-size:12px;">
                                      <span id="msg-text-${side}">${textMsg}</span> &nbsp&nbsp&nbsp<span id="msg-info-time-${side}" class="pull-right" style="font-size:8px; color:grey; padding-top:5px;">${showTime()}</span>
                                  </p>
                              </div>
                          </div>
                     </div>
                 </div>
            </div>
        `;
        $('.chat').append(msgHtml);
        $('.chat').scrollTop($('.chat').height()); 
    }
    //show waiting box for thingking
    function showWaitingBox(){
        var waitHtml=`
            <div id="waitMsg">
                <div class="container-fluid">
                    <div class="row">
                          <img src="images/bot.png" height="30" width="30" class="pull-left">
                          <div class="col-xs-7 pull-left" style="padding:3px;">
                              <div id="msg-bubble-left" class="container-fluid pull-left">
                                    <div id="wave">
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                    </div>
                              </div>
                          </div>
                     </div>
                 </div>
            </div>
        `;
        $('.chat').append(waitHtml);
        $('.chat').scrollTop($('.chat').height());
    }
});