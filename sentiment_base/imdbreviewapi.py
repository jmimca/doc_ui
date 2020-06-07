import re
import pickle
from nltk.corpus import stopwords # Import the stop word list
from nltk.stem import PorterStemmer

import tensorflow as tf
from tensorflow.python.keras.backend import set_session
from keras.models import load_model
from keras.preprocessing.sequence import pad_sequences

import numpy
import requests
from bs4 import BeautifulSoup as bs

from flask import Flask, request, jsonify



app = Flask(__name__)
sess = tf.Session()
set_session(sess)
graph = tf.get_default_graph()   
MAX_REVIEW_LENGTH_FOR_KERAS_RNN = 500 

with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)
themodel = load_model('rnn_lstm_porter_stemming.h5')
ps = PorterStemmer() 

def reviewWords(review):
    data_train_Exclude_tags = re.sub(r'<[^<>]+>', " ", review)      # Excluding the html tags
    data_train_num = re.sub(r'[0-9]+', 'number', data_train_Exclude_tags)  # Converting numbers to "NUMBER"
    data_train_lower = data_train_num.lower()              # Converting to lower case.
    data_train_no_punctuation = re.sub(r"[^a-zA-Z]", " ", data_train_lower )
       
    stemmedWords = [ps.stem(word) for word in re.findall(r"\w+", data_train_no_punctuation)]
    return(" ".join(stemmedWords))         
        

def getSentiment(inputReview): 
    global graph, sess
    testcleanWords = []
        
    testcleanWords.append( reviewWords( inputReview))
    test_review_tokenized = tokenizer.texts_to_sequences(testcleanWords)
    x_test = pad_sequences(test_review_tokenized, maxlen = MAX_REVIEW_LENGTH_FOR_KERAS_RNN)       
        
    # Prediction.
    with graph.as_default():
        set_session(sess)
        ytest_prediction = themodel.predict(x_test)[0][0]
    return ytest_prediction, numpy.round(ytest_prediction)

    
def getReviews(moviename):
    title = id_search(moviename)
    url = f"https://www.imdb.com/title/{title}/reviews?sort=helpfulnessScore&dir=desc&ratingFilter=0"
    r = requests.get(url)
    soup = bs(r.text, "lxml")
    reviews = soup.find_all("div", class_="content")
    reviews = list(map(lambda x: x.div.text, reviews))
    return reviews

def id_search(moviename):
        moviename = moviename.lower()
        try:
            r = requests.get(f"https://v2.sg.media-imdb.com/suggestion/{moviename[0]}/{moviename}.json")
            r.raise_for_status()
            jdata = r.json()
            return jdata.get('d')[0]['id']

        except requests.exceptions.HTTPError:
            return None


@app.route('/imdbreview', methods=['GET'])
def calc_sentiment():
    moviename = request.args.get('moviename')
    reviews = getReviews(moviename)
    if not reviews:
        return jsonify({'message': 'Could not run tests.'})
    data = {'p':0, 'n':0}    
    total = 0
    for review in reviews:
        v, s = getSentiment(review)
        total+=v
        if(s == 1):
            data['p'] += 1
        else:
            data['n'] += 1
    
    data['score'] = total/len(reviews)
        
    return jsonify(data)
    
    
    
    
if __name__ == '__main__':
    #set_globals()
    app.run()
