#install necessary libraries
pip install -r requirements.txt

#to run flask app, first export the environment variable so your terminal knows what it's executing or referencing 
linux: export FLASK_APP=<app name here>
windows command line: set FLASK_APP=<app name here>
windows powershell: $env:FLASK_APP = "hello.py"

#to run
all, probably: flask run