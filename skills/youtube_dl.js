const  ytdl = require('ytdl-core');
const ytsr = require('ytsr');

const {struct} = require('pb-util');

async function get_info(snname){	
    results = await ytsr(snname);
    const songInfo = await ytdl.getInfo(results["items"][0]["link"], {filter: 'audioonly'});
    
    return ytdl.getInfo(results["items"][0]["link"], {filter: 'audioonly'}).then((songInfo)=>{
        let allAudioFormats = ytdl.filterFormats(songInfo.formats, 'audioonly');
        let format = ytdl.chooseFormat(allAudioFormats, { quality: 'highest' });
        return song = {
            title: songInfo.title,  //Name
            url: songInfo.video_url,  //Url
            author: songInfo.author,  //Author
            thumbnail: results["items"][0].thumbnail, 
            streamlink: format.url
        };
    });
}

/**
 * Search and Get youtube playable link and send to front end.
 *
 * @param {*} response - DialogFlow response
 * @param {*} temp_intent_fulfilment_action - Callback Function to interact with BOTUI
 * @param {boolean} [isaudio=false] - True if audio input was given false if text input was given
 */
function fulfil_music(response, temp_intent_fulfilment_action, isaudio=false){
    let parameters = struct.decode(response.queryResult.parameters);
    let encoder = new TextEncoder("utf-8");
    let cmd = parameters["musiccmd"] || '';
    let search_string = parameters["song"] || null;
    if(search_string){
        get_info(search_string).then((song)=>{
            skillAction = {
                userText: isaudio ? response.queryResult.queryText : null,
                botText: encoder.encode(`Playing ${song.title}`),
                outputAudio: response.outputAudio,
                music: {
                    song: song,
                    cmd: 'play'
                }
            };
            temp_intent_fulfilment_action(skillAction);
        }) 
    }else{
        skillAction = {
            userText: isaudio ? response.queryResult.queryText : null,
            botText: encoder.encode(response.queryResult.fulfillmentText),
            outputAudio: response.outputAudio,
            music: {
                song: null,
                cmd: cmd
            }
        };
        temp_intent_fulfilment_action(skillAction);
    }


}



module.exports = fulfil_music;