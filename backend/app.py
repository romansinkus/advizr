from flask import Flask, request, jsonify

app = Flask(__name__)


# Endpoint to receive a message and respond with Cohere
@app.route('/api/message', methods=['POST'])
def handle_message():
    data = request.json  # Receive JSON data from frontend
    message = data.get('message')  # Extract the message from the JSON

    print("THIS IS THE MESSAGE", message)
    
    # return jsonify({'response': response.generations[0].text})  # Return response to frontend

    # Cohere stuff here

    return jsonify({'response': "RESPOND WITH COHERE OUTPUT"})  # Return response to frontend

if __name__ == '__main__':
    app.run(debug=True)
