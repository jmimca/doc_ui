const axios = require('axios');
const {struct} = require('pb-util');

function getPrice(symbol){
  url = `https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?formatted=true&lang=en-IN&region=IN&modules=price`;
  return axios.get(url)
    .then((response)=>{
        let p=response.data.quoteSummary.result[0].price.regularMarketPrice.fmt
      return p;
    })
    .catch(error => {
      console.log(error);
    }); 
};

function getSymbol(searchQuery){
  url=
 `https://query2.finance.yahoo.com/v1/finance/search?q=${searchQuery}&quotesCount=6&newsCount=0&enableFuzzyQuery=false&quotesQueryId=tss_match_phrase_query&multiQuoteQueryId=multi_quote_single_token_query&newsQueryId=news_ss_symbols&enableCb=false&enableNavLinks=false&vespaNewsTimeoutMs=600`;
    return axios.get(url)
        .then((response)=>{
            r=response.data.quotes[0].symbol;
            return getPrice(r);
        })
        .catch(error => {
            console.log(error);
        });

};

function fulfil_currency(response, temp_intent_fulfilment_action, isaudio=false){
	
	let encoder = new TextEncoder("utf-8"); 
	let parameters = struct.decode(response.queryResult.parameters);
	let currency_from = parameters["currency-from"];
	let currency_to = parameters["currency-to"];
	let amount = parameters["amount"];
	getSymbol(currency_from+currency_to).then((ans)=>{
		if(amount!=0)
			ans=amount*ans;
		skillAction = {
			userText: isaudio ? response.queryResult.queryText : null , 
			botText: encoder.encode(`${response.queryResult.fulfillmentText} ${ans}`),
			outputAudio: response.outputAudio,
			stt: {
				text: encoder.encode(ans),
				lang: 'en'
			}
		};
		temp_intent_fulfilment_action(skillAction);
	})
};

function fulfil_stock(response, temp_intent_fulfilment_action, isaudio=false){
	
	let encoder = new TextEncoder("utf-8"); 
	let parameters = struct.decode(response.queryResult.parameters);
	let company_name = parameters["Company-Name"];
	getSymbol(company_name).then((ans)=>{
		skillAction = {
			userText: isaudio ? response.queryResult.queryText : null , 
			botText: encoder.encode(`${response.queryResult.fulfillmentText} ${ans}`),
			outputAudio: response.outputAudio,
			stt: {
				text: encoder.encode(ans),
				lang: 'en'
			}
		};
		temp_intent_fulfilment_action(skillAction);
	})
};


function main(response, temp_intent_fulfilment_action, isaudio=false){

	subaction = response.queryResult.action.split('.')[1];
	if(subaction=="currency") 
	{
		fulfil_currency(response, temp_intent_fulfilment_action, isaudio);
	}
	
	
	else if(subaction=="stock") 
	{
		fulfil_stock(response, temp_intent_fulfilment_action, isaudio);
	}
}

module.exports = main;