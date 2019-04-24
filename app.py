from flask import Flask, render_template
from flask_pymongo  import PyMongo


app = Flask(__name__)
app.config['MONGO_DBNAME'] = "test"
app.config["MONGO_URI"] = "mongodb+srv://berkozzambak:1212qw12*@cluster0-oixaf.gcp.mongodb.net/test?retryWrites=true"
mongo = PyMongo(app)

@app.route('/')
def clickingAround():
    return render_template("index.html")

@app.route('/berlin')
def add():
    collection = mongo.db.foundation
    city = collection.find()

    output = ""

    for venue in city:
        map_link = "<a href='" + venue['Berlin'][2] +"'> Map Link </a>"
        output += venue['Berlin'][0] + '  ' + venue['Berlin'][1] + map_link + '<br>'
        
    return output

@app.route('/hamburg')
def add1():
    collection = mongo.db.foundation
    city = collection.find()

    output = ""

    for venue in city:
        map_link = "<a href='" + venue['Hamburg'][2] +"'> Map Link </a>"
        output += venue['Hamburg'][0] + '  ' + venue['Hamburg'][1] + map_link + '<br>'
        
    return output



if __name__ == "__main__":
    app.run(port='23456')
