const axios = require('axios');
const {struct} = require('pb-util');


function fulfil_sentiment(response, temp_intent_fulfilment_action, isaudio=false){
    let parameters = struct.decode(response.queryResult.parameters);


    let moviename = parameters["moviename"] || '';
    moviename = moviename.replace(/\u00a0/g, " ");
    let url = `http://127.0.0.1:5000/imdbreview?moviename=${moviename}`;
    let encoder = new TextEncoder("utf-8");
    axios.get(url, {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0'}})
        .then((response)=>{
            review = response.data;
            score = Math.round(review.score * 100) / 10
            skillAction = {
                userText: isaudio ? response.queryResult.queryText : null,
                botText: encoder.encode(`${moviename} has review sentiment score of ${score}/10`),
                outputAudio: response.outputAudio,
                intentOutput: {
                    title: encoder.encode(`${moviename} review`),
                    body: encoder.encode(`User reviews sentiment for ${moviename} on IMDB: <br>Score: ${score}/10 <br> Negative: ${review.n} <br> Positive: ${review.p}`)
                }
            };

            temp_intent_fulfilment_action(skillAction);

        })

}



module.exports = fulfil_sentiment;