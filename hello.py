from flask import Flask, request, render_template 
from flask_cors import CORS
import csv
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def stuff():
    with open('./database.csv', 'w') as outfile: #wipe database clean
        writer = csv.writer(outfile)
        writer.writerow(['Pokemon', 'Height', 'Weight'])
    return "Hello, World!"


@app.route('/update', methods=['POST', 'GET']) #why might we want both POST and GET?
def moreStuff():
    if(request.method == 'POST'):
        try:
            print(request.json)
            with open('./database.csv', 'a') as outfile:
                writer = csv.writer(outfile)
                writer.writerow(request.json.values())
        except:
            print('nope')

    data = pd.read_csv('./database.csv', header=[0])
    print(data)
    return render_template('./view_db.html', mytable=data.to_html())

