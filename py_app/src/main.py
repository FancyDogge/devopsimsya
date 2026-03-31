from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def hello_world():
    return {'Hello': 'World'}

@app.get('/dict')
def get_dict():
    return {
            1: 'one',
            2: 'two',
            3: 'three'
            }

@app.get('/api/v1/hello')
def read_hello_world():
    return {
            "what": "road",
            "where": "kubernetes", 
            "version": "v1"
            }