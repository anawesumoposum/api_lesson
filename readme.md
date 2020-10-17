#First, install venv 
sudo apt-get install python3-venv 

#initialize venv
python3 -m venv flask_venv 

#activate venv
linux: source flask_venv/bin/activate
windows: flask_venv/Scripts/activate

#to deactivate 
linux: deactivate 

#to run flask app, first export the environment variable so your terminal knows what it's executing or referencing 
pip install -r requirements.txt
linux: export FLASK_APP=<app name here>
windows command line: set FLASK_APP=<app name here>
windows powershell: $env:FLASK_APP = "hello.py"

#to run
all, probably: flask run