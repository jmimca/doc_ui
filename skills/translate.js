const ISO6391 = require('iso-639-1');
const axios = require('axios');
const cheerio = require('cheerio');
const {struct} = require('pb-util');


/**
 * Translates the user text. called only if translate action/intent is detected by dialogflow
 *
 * @param {*} response - DialogFlow response
 * @param {*} temp_intent_fulfilment_action - Callback Function to interact with BOTUI
 * @param {boolean} [isaudio=false] - True if audio input was given false if text input was given
 */
function fulfil_translate(response, temp_intent_fulfilment_action, isaudio=false){
    let parameters = struct.decode(response.queryResult.parameters);
    console.log(parameters.text);
    console.log(parameters);

    let lang_from = ISO6391.getCode(parameters["lang-from"] || '') || 'auto';
    let lang_to = ISO6391.getCode(parameters["lang-to"] || '') || 'en';
    let text = parameters.text;
    let url = `https://translate.google.com/m?hl=en&sl=${lang_from}&tl=${lang_to}&ie=UTF-8&q=${text}`;

    console.log(`lang-from: ${lang_from}\nlang-to: ${lang_to}\nText: ${text}`);
    axios.get(url, {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0'}})
        .then((googletranslatemobile)=>{
            const $ = cheerio.load(googletranslatemobile.data);
            let translated_text = $('body > div.t0').text(); 
            let enver = $('body > div.o1').text() || null; 
            let botoutputtext;
            let encoder = new TextEncoder("utf-8");
            // english version if present
            ans = translated_text;
            if(enver){
                ans = `${enver} (${translated_text})`;
            }

            botoutputtext = `${response.queryResult.fulfillmentText} ${ans}`;

            console.log(botoutputtext);

            skillAction = {
                userText: isaudio ? response.queryResult.queryText : null,
                botText: encoder.encode(botoutputtext),
                outputAudio: response.outputAudio,
                stt: {
                    text: encoder.encode(translated_text || enver),
                    lang: lang_to || 'en'
                },
                intentOutput: {
                    title: encoder.encode('Translation'),
                    body: encoder.encode(`${ans}`),
                }
            };

            temp_intent_fulfilment_action(skillAction);

        })

}



module.exports = fulfil_translate;