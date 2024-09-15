from flask import Flask, request, jsonify
from flask_cors import CORS
from rag import callToRag

app = Flask(__name__)
CORS(app)  # This allows the frontend to make requests to the backend from a different origin

# def foo(message, history):
#     print("THIS IS A TEST")
#     return "THIS IS A TEST"

@app.route('/advisor', methods=['POST'])
def send_message():
    
    data = request.get_json()
    message = data.get('message')
    history = data.get('history')
    
    # Call the callToRag function and get ragMessage
    ragMessage = callToRag(message, history)
    print("ragMessage", ragMessage)
    print("type of ragMessage", type(ragMessage))

    # Send the output 'bar' back to the frontend
    return jsonify({'ragMessage': ragMessage.text})

if __name__ == '__main__':
    app.run(debug=True)
