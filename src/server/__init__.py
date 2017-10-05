from flask import Flask, jsonify, request, render_template
from flask.ext.marshmallow import Marshmallow
from config import config


ma = Marshmallow()
app = Flask(__name__)

def create_app(config_name):
    app.config.from_object(config[config_name])

    ma.init_app(app)

    from .api import api as api_blueprint
    app.register_blueprint(api_blueprint, url_prefix='')

    @app.route('/', methods=['GET'])
    def index():
        return 'HRM v1.0'


    # send CORS headers
    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        if request.method == 'OPTIONS':
            response.headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT'
            headers = request.headers.get('Access-Control-Request-Headers')
            if headers:
                response.headers['Access-Control-Allow-Headers'] = headers
        return response

    return app
