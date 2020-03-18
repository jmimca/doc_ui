

function fulfil_welcome(response, temp_intent_fulfilment_action, isaudio=false){
    skillAction = {
        userText: isaudio ? response.queryResult.queryText : null,
        botText: Buffer.from(response.queryResult.fulfillmentText),
        outputAudio: response.outputAudio,
    };
    console.log("Welcome Action Fulfilment Test");
    temp_intent_fulfilment_action(skillAction);
    //console.log(response);
}



module.exports = fulfil_welcome;