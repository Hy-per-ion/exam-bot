from flask import Flask, render_template, request, jsonify
from PIL import Image
import pytesseract
import requests

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_image', methods=['POST'])
def process_image():
    try:
        uploaded_image = request.files['image']
        image = Image.open(uploaded_image)
        extracted_text = pytesseract.image_to_string(image).strip()

        # Use the extracted_text to perform Google search or interact with ChatGPT API
        # For now, let's mock an answer
        answer = "This is a mock answer."

        return jsonify({'extractedText': extracted_text, 'answer': answer})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
