const dialogflow = require('dialogflow');
//const uuid = require('uuid');
var path = require('path');
const util = require('util');
const {Transform, pipeline} = require('stream');
const {struct} = require('pb-util');
const pump = util.promisify(pipeline);
const recorder = require('node-record-lpcm16');





class IntentDetect{
    
    constructor(projectId = 'sentibot-rkxfnv'){
        this.sessionClient = new dialogflow.SessionsClient({
            keyFilename: path.join(__dirname, "..", "sentibot.json") // KEY FILE;
        });
        // this.sessionId = uuid.v4();
        this.sessionId = "123456789"; // testing only
        this.sessionPath = this.sessionClient.sessionPath(projectId, this.sessionId);        
    }

    /**
    * Send a query to the dialogflow agent, and return the query result.
    * @param {string} userText The query to be sent
    */
    async detectTextIntent(userText) {

        const request = {
            session: this.sessionPath,
            queryInput: {
              text: {
                // The query to send to the dialogflow agent
                text: userText,
                // The language used by the client (en-US)
                languageCode: 'en-US',
              },
            },
          };
          const responses = await this.sessionClient.detectIntent(request);
          return responses[0];
          /*console.log(`${responses}\n\n`)
          console.log('Detected intent');
          const result = responses[0].queryResult;
          console.log(`  Query: ${result.queryText}`);
          console.log(`  Response: ${result.fulfillmentText}`);
          if (result.intent) {
            console.log(`  Intent: ${result.intent.displayName}`);
          } else {
            console.log(`  No intent matched.`);
          }*/
    }

    async detectAudioIntent(audiodata, samplerate=44100) {

      const encoding = 'AUDIO_ENCODING_LINEAR_16'; 

      const request = {
        session: this.sessionPath,
        queryInput: {
          audioConfig: {
            audioEncoding: encoding,
            sampleRateHertz: samplerate,
            languageCode: 'en-US',
          },
        },
        inputAudio: audiodata,
      };

      // Recognizes the speech in the audio and detects its intent.
     const responses = await this.sessionClient.detectIntent(request);
      return responses[0];
      /* 
      console.log(`Response: ${response}`);
      console.log('Detected intent:');
      const result = response.queryResult;
      // Instantiates a context client
      const contextClient = new dialogflow.ContextsClient();

      console.log(`  Query: ${result.queryText}`);
      console.log(`  Response: ${result.fulfillmentText}`);
      if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
      } else {
        console.log(`  No intent matched.`);
      }*/
    
    }
   
    

}

module.exports = IntentDetect;


