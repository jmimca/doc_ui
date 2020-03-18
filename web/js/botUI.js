//const { ipcRenderer } = require('electron');

const { Buffer } = global;

$(function() {
    //for css particle /////////////////////////////////////////////////////////////////
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#d45d64"
            },
            shape: {
                type: "star",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 10,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
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
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "repulse"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                bubble: {
                    distance: 400,
                    size: 4,
                    duration: 0.3,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    //////start from  here//////////////////////////////////////////////////////////////

    //wait for half second after loading the page to show welcome message and about me
    $(window).load(function() {
        function showInitialMessage() {
            $("#botMsg").show();
            $("#info").show();
        };
        window.setTimeout(showInitialMessage, 500); // 1/2 second
    });

});




var BotUiManipulator = function(options) {

    /*
     * Variables accessible
     * in the class
     */
    var uivars = {
        username: "User",
        botSide: "left",
        userSide: "right",
        botName: "SmashBot",
    };

    /*
     * Can access this.method
     * inside other methods using
     * root.method()
     */
    var root = this;

    /*
     * Constructor
     */
    this.construct = function(options) {
        $.extend(uivars, options);
    };


    this.showMicListener = function() {
        $('#listner').show();
    }

    this.hideMicListener = function() {
        $('#listner').hide();
    }

    var addMessageToChat = function(username, textMsg, side) {
        var img = "";
        if (side == "left") {
            img = "bot";
        } else {
            img = "user";
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


    this.addBotMessage = function(msg) {
        addMessageToChat(uivars.botName, msg, uivars.botSide);
    }

    this.addUserMessage = function(msg) {
        addMessageToChat(uivars.username, msg, uivars.userSide);
    }

    var showTime = function() {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        $('#msg-info-time-left').text(time);
        return time;
    }

    this.showWaitingBox = function() {
        var waitHtml = `
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

    this.hideWaitingBox = function() {
        $('#waitMsg').last().remove();
    }

    /*
     * Pass options when class instantiated
     */
    this.construct(options);

};


var homepageui = new BotUiManipulator();

// All User Events
$(function() {

    $('#send').click(function(event) {
        userMsgText = $('#queryInput').val();
        $('#queryInput').val("");
        if (userMsgText.trim()) { // is empty or whitespace
            ipcRenderer.send("intentDetectText", userMsgText); // send to main electron process
            homepageui.addUserMessage(userMsgText);
            homepageui.showWaitingBox();
        }
    });
    
    //trigger send message on enter key stroke
    $('#queryInput').keypress(function(event) {
        var keyCode = (event.keyCode ? event.keyCode : event.which);
        if (keyCode == 13) {
            $('#send').click();
        }
    });

    //trigger the mic icon function
    $('#mic').click(function() {
        homepageui.showMicListener();
        hwdetect.pause_detect();
        audRecoder.recordUtterence();
        //To do: bypass hotword detection and directly call audiorecorder
        //
    });


});

let playAudioFromBytes = function( bytes, afterwards=null ) {  

    var buffer = new Uint8Array( bytes.length );
    buffer.set( new Uint8Array(bytes), 0 );
    let context = new AudioContext();
    var source = context.createBufferSource();

    context.decodeAudioData(buffer.buffer, function(audbuffer){  
        source.buffer = audbuffer;
        source.connect( context.destination );
        source.start(0);
    });

    // to be called when bot audio response ends
    if(afterwards != null){
        source.onended = function(event){
            console.log("Audio From Bytes ended");
            console.log(afterwards);
            afterwards.fn(afterwards.params);
        };
    }

}

let speechToText = function(stt){
    console.log("SPEECH TO TEXT CALLED!");
    var utterThis = new SpeechSynthesisUtterance(stt.text);
    utterThis.lang = stt.lang || 'en';
    speechSynthesis.speak(utterThis);
}

/*
ipcRenderer.on('fullfillmentText', (event, data) => {
    if(data.userText != null && data.userText != '')
        homepageui.addUserMessage(data.userText);

    homepageui.hideWaitingBox();
    homepageui.addBotMessage(data.botText);
    //console.log(data.outputAudio);
    //console.log(type(outputAudio));
    playAudioFromBytes(data.outputAudio);
    // playAudio(data.outputAudio)
});*/


// to be replaced with a class with full UI/audio exposure for close to natural output
ipcRenderer.on('newTempfullfillment', (event, data) => {
    console.log(data);
    homepageui.hideWaitingBox();
    let decoder = new TextDecoder("utf-8");
    if(data.userText != null && data.userText != '')
        homepageui.addUserMessage(data.userText);

    if(data.botText != null && data.botText.length)
        homepageui.addBotMessage(decoder.decode(data.botText));

    let afterwards = null;    
    if(data.stt != null && Object.keys(data.stt).length !== 0 ){
        //speechToText({text:Buffer.from(data.stt.text).toString('utf-8'), lang: data.stt.lang});
        afterwards = {}
        afterwards.fn = speechToText;
        afterwards.params = {text:decoder.decode(data.stt.text), lang: data.stt.lang};
    }      

    
    if(data.outputAudio != null && data.outputAudio.length)
        playAudioFromBytes(data.outputAudio, afterwards);   

   
});



    
var BotInteraction = function(options) {
    // this will replace above function to expose better API to interact with bot accespting
    // functions and parameters
}






