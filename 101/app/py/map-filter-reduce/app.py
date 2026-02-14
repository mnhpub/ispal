from flask import Flask, jsonify
import json
import os
app = Flask(__name__)

@app.route('/names', methods=['GET'])
def names():
    obj = 'data/names.json'
    if not os.path.exists(obj):
        return jsonify({"error": "File not found"}), 404
    with open(obj, 'r') as f:
        data = json.load(f)
    return jsonify(data), 200

@app.route('/fizz', methods=['GET'])
def fizz():
    obj = 'data/fizz.json'
    if not os.path.exists(obj):
        return jsonify({"error": "File not found"}), 404
    with open(obj, 'r') as f:
        data = json.load(f)
    return jsonify(data), 200

@app.route('/buzz', methods=['GET'])
def buzz():
    obj = 'data/fizz.json'
    if not os.path.exists(obj):
        return jsonify({"error": "File not found"}), 404
    with open(obj, 'r') as f:
        data = json.load(f)
    key = data[1][3]
    return jsonify(key), 200