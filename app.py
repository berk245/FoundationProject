from flask import Flask, render_template
from flask_pymongo  import PyMongo
import os
import jinja2
import json
import ast

app = Flask(__name__)
app.config['MONGO_DBNAME'] = "test"
app.config["MONGO_URI"] = "mongodb+srv://berkozzambak:1212qw12*@cluster0-oixaf.gcp.mongodb.net/test?retryWrites=true"
mongo = PyMongo(app)



@app.route('/')
def clickingAround():
    return render_template("index.html")

@app.route('/berlin', methods=['GET'])
def searchVenues():
    collection = mongo.db.foundation
    
    output = []

    for q in collection.find():
        output.append( {'name': q['name'], 'kiez': q['kiez'], 'link': q['link'], 'city': q['city']})

    return render_template('berlin.html',  output=output)


@app.route('/hamburg', methods=['GET'])
def searchVenues1():
    collection = mongo.db.foundation
    
    output = []

    for q in collection.find():
        output.append( {'name': q['name'], 'kiez': q['kiez'], 'link': q['link'], 'city': q['city']})

    return render_template('hamburg.html', output=output)

@app.route('/frankfurt', methods=['GET'])
def searchVenues3():
    collection = mongo.db.foundation
    
    output = []

    for q in collection.find():
        output.append( {'name': q['name'], 'kiez': q['kiez'], 'link': q['link'], 'city': q['city']})

    return render_template('frankfurt.html', output=output)

    #render_template("search.html", venue_name=venue_name,
                                          #venue_kiez=venue_kiez,
                                          #map_link=map_link  )



if __name__ == "__main__":
    app.run(port='23456')
