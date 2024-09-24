# Advizr 🎓📙

## Welcome to Advizr

Have you ever spent hours waiting for academic advising to end up more confused than you started? Advizr is here to help! With Advizr, we provide accurate and reliable course info at your fingertips. Made 

go to localhost:5137

## Technologies Used 💻


- **React**: Creating an interactive, dynamic, and smooth user interface.
- **Flask**: Building out the backend for API calls
- **Python**: Utilizing the Cohere API and building a RAG model

## Features 🚀

- **Deterministic Academic Course Advice**: Utilizing a RAG model, the answers that are delivered are always true. Therefore giving the best academic advice for courses
- **Planning your degree**: Advizr is a key player in crafting an amazing degree plan. With Advizr, knowing all course information, one can ask any question about any course at a university and it will be delivered instantly.
- **Fast Responses**: Optimizing data storage and utilizing re-ranking by Cohere we sped up responses by 500%

## Guide

create virtual environment in command line
```
python3.9 -m venv ./venv
source venv/bin/activate
```

clone the repo
```
git clone https://github.com/romansinkus/advizr.git
```

cd into backend, install dependencies, and run
```
cd advizr/backend
pip install Flask Flask-Cors cohere
Add descriptions.py
python3.9 ./app
```

make a new terminal and cd into the frontend
```
cd advizr/frontend/Advizr
npm install
npm run dev
```

