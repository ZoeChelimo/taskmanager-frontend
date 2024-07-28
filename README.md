Task Manager Project
Table of Contents
Introduction
Features
Technologies
Setup
Backend Setup (Django)
Frontend Setup (React)
Usage
Running the Backend
Running the Frontend
Deployment
Deploying the Backend
Deploying the Frontend
License
Introduction
This is a full-stack task manager application built using Django for the backend and React for the frontend. The application allows users to create, read, update, and delete tasks.

Features
User authentication (login required to manage tasks)
Create, read, update, and delete tasks
Responsive UI
Technologies
Backend: Django, Django REST framework
Frontend: React, Axios
Database: SQLite (for development)
Deployment: Heroku (backend), Netlify (frontend)
Setup
Backend Setup (Django)
Clone the repository:

bash
Copy code
git clone <repository-url>
cd taskmanager
Create a virtual environment:

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install the required packages:

bash
Copy code
pip install -r requirements.txt
Apply migrations:

bash
Copy code
python manage.py makemigrations
python manage.py migrate
Create a superuser:

bash
Copy code
python manage.py createsuperuser
Run the development server:

bash
Copy code
python manage.py runserver
Frontend Setup (React)
Navigate to the frontend directory:

bash
Copy code
cd taskmanager-frontend
Install the required packages:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
Usage
Running the Backend
Ensure you are in the taskmanager directory and have your virtual environment activated.
Run the Django development server:
bash
Copy code
python manage.py runserver
Running the Frontend
Ensure you are in the taskmanager-frontend directory.
Run the React development server:
bash
Copy code
npm start
Deployment
Deploying the Backend
Install Heroku CLI:

bash
Copy code
curl https://cli-assets.heroku.com/install.sh | sh
Login to Heroku:

bash
Copy code
heroku login
Create a Procfile in the root of your backend project:

makefile
Copy code
web: gunicorn taskmanager.wsgi
Install Gunicorn:

bash
Copy code
pip install gunicorn
Commit changes:

bash
Copy code
git add .
git commit -m "Prepare for deployment"
Create a Heroku app:

bash
Copy code
heroku create
Deploy to Heroku:

bash
Copy code
git push heroku master
Run database migrations on Heroku:

bash
Copy code
heroku run python manage.py migrate
Deploying the Frontend
Install Netlify CLI:

bash
Copy code
npm install -g netlify-cli
Login to Netlify:

bash
Copy code
netlify login
Build the React app:

bash
Copy code
npm run build
Deploy to Netlify:

bash
Copy code
netlify deploy --dir=build
Publish the site:

bash
Copy code
netlify deploy --dir=build --prod
License
This project is licensed under the MIT License. See the LICENSE file for details.
