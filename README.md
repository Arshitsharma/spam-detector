# Spam Detector using Flask and Naive Bayes Classifier

This project implements a web-based spam detector using Flask, a Python web framework, and a Multinomial Naive Bayes classifier from scikit-learn. The detector can classify messages as either "Spam" or "Not Spam" based on a trained dataset.

## 🚀 Demo

The project is currently deployed and can be accessed at 🚀 [Spam Detector](https://render-spam-detectorflask.onrender.com/).

## Requirements

- Python 3.x
- Listed dependencies can be found in `requirements.txt`

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Run the Flask application:

   ```bash
   python app.py
   ```

2. Open your web browser and go to `http://localhost:5000` to view the application.

3. Enter a message in the input field and click "Predict" to see whether it is classified as "Spam" or "Not Spam".

## Project Structure

- `app.py`: Main Flask application containing routes for homepage and prediction.
- `spam.csv`: Dataset used for training the spam detector.
- `static/`: Directory containing static assets like CSS and JavaScript.
- `templates/`: Directory containing HTML templates for Flask.

## Files and Directories

- `README.md`: This file, providing an overview of the project.
- `app.py`: Flask application script defining routes and integrating the spam detection model.
- `requirements.txt`: List of Python packages required for the project.
- `spam.csv`: Dataset used for training the spam detector.

## Libraries and Tools

- **Flask**: Web framework for Python.
- **scikit-learn**: Machine learning library for Python, used for training the Naive Bayes model.
- **pandas, numpy**: Libraries for data manipulation and numerical operations in Python.
- **Jinja2**: Template engine for Flask, used for rendering HTML templates.
- **NLTK**: Natural Language Toolkit, used for text processing.

