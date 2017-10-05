#! /usr/bin/env python

import os

from flask_script import Server, Manager

from server import create_app


app = create_app(os.getenv('APP_CONFIG', 'default'))
server = Server(host="0.0.0.0", port=5000)
manager = Manager(app)
manager.add_command("runserver", server)


if __name__ == '__main__':
    manager.run()
