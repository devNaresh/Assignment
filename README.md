# Uber Assignment Setup
### **Installation**

requires [Node.js](https://nodejs.org/) v6.6.0+ to run.
required Django and Python 2.7

**Install elasticsearch.**
```sh
$ brew update
$ brew doctor
$ brew install elasticsearch
$ elasticsearch
```
**Steps To start APP**

 1. Create virtual env.  
 2. Go to uber_assignment_SF_movies directory.
 3. run below commands
```sh
$ pip install -r requirements.txt
$ python manage.py migrate
$ python manage.py rebuild_index
$ python manage.py runserver
```
4. Now go to uber_assignment_client directory
5. run below commands
```sh
$ npm install
$ npm run dev
```
**DEMO**  

 1. Go to "localhost:8080"  
 2. Type Title of Movie. Eg-- Budding Prospects, Pilot,  Bullitt, About a Boy. There are more than 120 titles on DB.
 3. Auto suggestion will come select title then you can see locations on gmaps.