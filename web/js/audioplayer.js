'use strict';



class Playlist{
    constructor(){
        this.playList = [];
    };
    getItem(){
        return this.playList.shift();
    }
    addItem(song){
        this.playList.push(song);
    }
}

class audioPlayerUI{
    
    setSongTitle(title){
        $('#songTitle').html(title);
    }
    setSongSubtitle(subtitle){
        $('#songSubtitle').html(subtitle);
    }
    changeSongImage(url){
        var img=`<img class="art" src="${url}">`;
        $('#runningSongImage').html(img);
    }
    updateCurrentRunningTime(runningtime){
        $('#audioRunningTime').html(runningtime);
    }
    updateEndTime(endTime){
        $('#audioDurationTime').html(endTime);
    }
    //for changing fill color of song bar  by percentage provind in int type
    songBarFillColor(percentage){
        var actualpercentage=100-percentage;
        var p="translateX(-"+actualpercentage+"%)";
        $('#barstyle hr').css("-webkit-transform",p);
        $('#barstyle hr').css("transform",p);
    }

    // Chnage UI for current song
    loadsong(song){
        this.setSongTitle(song.title);
        this.setSongSubtitle(song.author);
        this.changeSongImage(song.thumbnail);
    }
    
    //for adding song to back list
    addSongToList(song){
        var item=`<div>
                <a style="padding:5px;" > 
                  <img src="${song.thumbnail}">
                  <div>
                    <h3 style="margin:0;">${song.title}</h3>
                    <h4>${song.author}</h4>
                  </div>
                </a>
                <hr style="margin:0;width:100%;">
            </div>
        `;
        $('#audiolist').append(item);
    }

    removeSongFromList(){
        $('#audiolist').children().eq(0).remove()
    }

    setPlayIcon(){
        $('#play-icon').removeClass('hide');
        $('#pause-icon').addClass('hide');

    }
    setPauseIcon(){
        $('#pause-icon').removeClass('hide');
        $('#play-icon').addClass('hide');
    }
}

class audioPlayer {
    constructor(){
        this.state = 'IDLE';
        this.player = new Audio();
        this.ui = new audioPlayerUI();
        this.playlist = new Playlist();

        this.setevents(this);
    }
    

    setevents(self){
                // Playeer Events:
                self.player.ontimeupdate = function(){
                    let newtime = self.toMinSec(self.player.currentTime);
                     self.ui.updateCurrentRunningTime(self.toMinSec(self.player.currentTime));
                    self.ui.songBarFillColor((self.player.currentTime * 100)/self.player.duration);
                    self.ui.updateEndTime(self.toMinSec(self.player.duration));
                }
                self.player.onended = function(){
                    self.ui.setPlayIcon();
                    self.loadNextSong();
                }
    }

    loadNextSong(){
        let song = this.playlist.getItem();
        console.log(song);
        if($.isEmptyObject(song)){
            this.state = 'IDLE';
            return;
        }
        this.ui.loadsong(song);
        this.player.src = song.streamlink;
        this.player.load();
        this.ui.removeSongFromList();
        
    }
 
    toMinSec = function(time){
        return `${Math.floor(time/60)}:${Math.floor(time%60)}`;
    }

    togglePlayback(){
        if(this.player.paused) this.playSong();
        else this.pauseSong();
    }

    playSong(){
        this.state = 'PLAYING';
        this.player.play();
        this.ui.setPauseIcon();
    }
    pauseSong(){
        this.state = 'PAUSED'
        this.player.pause();
        this.ui.setPlayIcon();
        
    }

    playNext(){
        this.loadNextSong();
        this.playSong();
    }

    add(song){
        this.playlist.addItem(song);
        this.ui.addSongToList(song);
        if(this.state == 'IDLE') this.playNext();
    }

};


$(function(){
    let audpl = new audioPlayer();
    /*let songs = [
        {
            title: 'Beethoven - Für Elise (Klutch Dubstep Trap Remix)',
            url: 'https://www.youtube.com/watch?v=dBb060OPegg',
            author: 'DubstepGutter',
            thumbnail: 'https://i.ytimg.com/vi/dBb060OPegg/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBSIJnFv1P_jLTSTVfFIVwGn4Yzhg',
            streamlink: 'https://r2---sn-xmjpuxa-qxas.googlevideo.com/videoplayback?expire=1591202688&ei=IH_XXouFLoGZ3LUP_oChKA&ip=103.211.15.192&id=o-AKkbHPeSbiVwtaWG5RhwAE2rHsEHj6YkcBPrYgWVacr1&itag=251&source=youtube&requiressl=yes&mh=jK&mm=31%2C29&mn=sn-xmjpuxa-qxas%2Csn-qxa7sn7r&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=628750&vprv=1&mime=audio%2Fwebm&gir=yes&clen=2529009&dur=143.681&lmt=1575058450974654&mt=1591180962&fvip=2&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwQwIge1aKzI-d0WJ7jBJlUVTRIGN9_hdHD1D3iF4j2OEUUncCH26nOceM38lmgVBnt1toAbhUldFBw8SVVN1QNTfgbs4%3D&ratebypass=yes&sig=AOq0QJ8wRAIgVv95y6oYkm2-i1vpIP1aAAoQcemBXtxBqPDEZ9OmJLkCIG3e4nKv8RiQms0Qg0dDIb6UE3ib9kgBFkyiuP9gDFzP'        },

        {
            title: 'Mr. Jazzek - Alla Turca',
            url: 'https://www.youtube.com/watch?v=jH1ooHogiXM',
            author: 'EDM Bot',
            thumbnail: 'https://i.ytimg.com/vi/jH1ooHogiXM/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAdnhuz0eWnvxSvtCz5wJPCnmxmGQ',
            streamlink: 'https://r1---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1591202808&ei=mH_XXoe7G6Tk3LUP3I-wkAw&ip=103.211.15.192&id=o-ANB0IRbPFS8tYhtRrAGlU_7h8rYhaiqFDn6gFqWmx_p1&itag=251&source=youtube&requiressl=yes&mh=H5&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxaeen7l&ms=au%2Crdu&mv=m&mvi=0&pl=24&initcwndbps=768750&vprv=1&mime=audio%2Fwebm&gir=yes&clen=3054398&dur=181.981&lmt=1586607946847079&mt=1591181085&fvip=1&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAMwxxwZZ7QiPEJx_KE6hpdKwX-39dlG2GvnHDat81MxXAiAEBxhaqBFzjaJaQPC-OcyLoDSFVP1wmD-8r_iHu5hvJQ%3D%3D&ratebypass=yes&sig=AOq0QJ8wRQIgW-hEvUM-s_etfpqEdJeCgNhUUD6ji2veqPSBXUmtuSACIQC1Svp5EHgsYJUZSdZZrhbCgQQZBd5pm-m3t0R1N1Pb7w%3D%3D'
        },
        {
            title: 'Kalinka mix (russia)',
            url: 'https://www.youtube.com/watch?v=APH6DNPNbug',
            author: 'Anonymous Fo',
            thumbnail: 'https://i.ytimg.com/vi/jH1ooHogiXM/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAdnhuz0eWnvxSvtCz5wJPCnmxmGQ',
            streamlink: 'https://r8---sn-xmjpuxa-qxal.googlevideo.com/videoplayback?expire=1591202973&ei=PYDXXoaRIpLG1AbXya7YCw&ip=103.211.15.192&id=o-AKCbvroJ4iYprQv2aGMSsBO4SL170yNj133dB3Ux9SZy&itag=251&source=youtube&requiressl=yes&mh=D1&mm=31%2C29&mn=sn-xmjpuxa-qxal%2Csn-qxa7snee&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=740000&vprv=1&mime=audio%2Fwebm&gir=yes&clen=4255867&dur=247.201&lmt=1452546327002772&mt=1591181254&fvip=4&keepalive=yes&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgE05ha3W_WQqX9AvAYkk_5gQ7yL0nNDU7lEdCZOA2mU8CIQCiPviB0mdrKfA_-Gx3myelG1i9ZjbQzcWnUd2iUc1NOA%3D%3D&ratebypass=yes&sig=AOq0QJ8wRQIhAJjFAMtQuCfWRESWTr47_gid_Zoqsi3MnhdbuNDE4xV-AiBwdoxY1QYa8PNprf26dqwmBmUxRyCO3L8E-HOGQPBb0g%3D%3D'
        }
    ];
    audpl.add(songs[0]);
    audpl.add(songs[2]);
    audpl.add(songs[1]);*/
    
    ///****////for audio player  ::take these two after calling any function of audio player ::so put it at the end of this file if calling audioplayer function outside it
    $(".flip, .back a").click(function() {
         $(".aud-player").toggleClass("playlist");
    });

    $(".bottom a")
        .not(".flip")
        .click(function() {
            $(this).toggleClass("active");
    });

    $('#playpause').on('click', ()=>{
        audpl.togglePlayback();
    });
    $('#forwardSkip').on('click', ()=>{
        audpl.playNext();
    });

    window.audpl = audpl;
});
/////////////////////////////////////////////////////////////////////