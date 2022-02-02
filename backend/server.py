import flask
from flask import Flask
from flask_cors import CORS, cross_origin
import os
from classify import frontend
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/files", methods=["POST"])
@cross_origin()
def starting_url():
    files = flask.request.files.to_dict()
    f = open('transcript.txt', 'wb')
    f.write(flask.request.files.to_dict()['transcript'].read())
    f.close()
    files['story_text'].save(os.path.join('.', 'story_text.txt'))

    story_text, transcript, classified = frontend()

    response = app.response_class(
        response=flask.json.dumps({
            "story_text": story_text,
            "transcript": transcript,
            "classified": classified,
        }),
        status=200,
        mimetype='application/json'
    )
    return response

app.run(host="localhost", port=8080)