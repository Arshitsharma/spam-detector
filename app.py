
from flask import Flask, render_template, request, jsonify, send_from_directory
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split

app = Flask(__name__)

# Load the dataset
df_sms = pd.read_csv('spam.csv', encoding='latin-1')
# Data preprocessing steps
df_sms = df_sms.drop(["Unnamed: 2", "Unnamed: 3", "Unnamed: 4"], axis=1)
df_sms = df_sms.rename(columns={"v1": "label", "v2": "sms"})

# Convert 'label' to numerical values
df_sms['label'] = df_sms['label'].map({'ham': 0, 'spam': 1})

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(df_sms['sms'], df_sms['label'], test_size=0.20, random_state=1)

# Create and train the model
count_vector = CountVectorizer()
training_data = count_vector.fit_transform(X_train)
testing_data = count_vector.transform(X_test)
naive_bayes = MultinomialNB()
naive_bayes.fit(training_data, y_train)

# Home page route
@app.route('/')
def home():
    return render_template('index.html')


# Prediction route
@app.route('/predict', methods=['POST'])
def predict():
    message = request.form['message']
    transformed_message = count_vector.transform([message])
    prediction = naive_bayes.predict(transformed_message)
    if prediction[0] == 1:
        result = 'Spam'
    else:
        result = 'Not Spam'
    return jsonify({'prediction': result})  # Respond with the prediction result in JSON format

# Route for serving static files (CSS, JS, etc.)
@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

