from flask import Blueprint
import json
from flask import Flask, jsonify, request
import erppeek
from .. import app
from flask import abort

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        username = request.json['username']
        password = request.json['password']
        uid = client.common.login(app.config['ERP_DB'], username, password)
        user = client.read('res.users',uid)
        user["avatar"] =  client.model('res.users').get(uid).partner_id.image
        return jsonify(user)
    except Exception as exc:
        print ('Login error ', exc, request.json)
        abort(401)

@api.route('/search', methods=['POST'])
def search():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        offset = int(request.json['offset']) if 'offset' in request.json else 0
        limit = int(request.json['limit']) if 'limit' in request.json else None
        order = request.json['order'] if 'order' in request.json else None
        domain = request.json['domain'] if 'domain' in request.json else []
        parsed_domain = domainParser(domain)
        ids = client.search(model,domain=parsed_domain,offset=offset,limit=limit,order=order)
        return jsonify(ids)
    except Exception as exc:
        print ('Searching error ', exc, request.json)
        abort(401)

@api.route('/count', methods=['POST'])
def count():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        domain = request.json['domain'] if 'domain' in request.json else []
        parsed_domain = domainParser(domain)
        record_num = client.count(model,domain=parsed_domain)
        return record_num
    except Exception as exc:
        print ('Counting error ', exc, request.json)
        abort(401)

@api.route('/read', methods=['POST'])
def read():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        fields = request.json['fields'] if 'fields' in request.json else None
        ids = request.json['ids'] if 'ids' in request.json else []
        records = client.read(model,domain=ids,fields=fields)
        return jsonify(records)
    except Exception as exc:
        print ('Reading error ', exc, request.json)
        abort(401)

@api.route('/search_read', methods=['POST'])
def search_read():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        fields = request.json['fields'] if 'fields' in request.json else None
        offset = int(request.json['offset']) if 'offset' in request.json else 0
        limit = int(request.json['limit']) if 'limit' in request.json else None
        order = request.json['order'] if 'order' in request.json else None
        domain = request.json['domain'] if 'domain' in request.json else []
        parsed_domain = domainParser(domain)
        records = client.read(model,domain,fields=fields,offset=offset,limit=limit,order=order)
        return jsonify(records)
    except Exception as exc:
        print ('Searching and Reading error ', exc, request.json)
        abort(401)


@api.route('/create', methods=['POST'])
def create():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        values = request.json['values']
        id = client.create(model,values)
        return jsonify(id=id, success=True)
    except Exception as exc:
        print ('Creating error ', exc, request.json)
        abort(401)


@api.route('/update', methods=['POST'])
def update():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        id = int(request.json['id'])
        values = request.json['values']
        obj = client.model(model).get(id)
        obj.write(values)
        return jsonify(success=True)
    except Exception as exc:
        print ('Updating error ', exc, request.json)
        abort(401)


@api.route('/delete', methods=['POST'])
def delete():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        id = request.json['id']
        client.unlink(model,[id])
        return jsonify(success=True)
    except Exception as exc:
        print ('Deleting error ', exc, request.json)
        abort(401)


@api.route('/execute', methods=['POST'])
def execute():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        method = request.json['method']
        paramList = request.json['paramList'] if 'paramList' in request.json else []
        paramDict = request.json['paramDict'] if 'paramDict' in request.json else {}
        result = client.execute(model, method, paramList, paramDict)
        return jsonify(result)
    except Exception as exc:
        print ('Executing error ', exc, request.json)
        abort(401)


@api.route('/exec_workflow', methods=['POST'])
def exec_workflow():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        id = int(request.json['id'])
        signal = request.json['signal']
        client.exec_workflow(model,signal, id)
        return jsonify(success=True)
    except Exception as exc:
        print ('Executing workflow error ', exc, request.json)
        abort(401)


@api.route('/render_report', methods=['POST'])
def render_report():
    try:
        client = erppeek.Client(app.config['ERP_SERVER_URL'], app.config['ERP_DB'], app.config['ERP_DB_USER'],
                                app.config['ERP_DB_PASS'])
        model = request.json['model']
        ids = request.json['ids']
        datas = request.json['datas']
        report = client.render_report(model,ids, datas)
        return jsonify(success=True, report=report)
    except Exception as exc:
        print ('Rendering report error ', exc, request.json)
        abort(401)

def domainParser(domain):
    return []
