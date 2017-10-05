import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = False
    TESTING = False
    LOCALE = ""
    STATIC_FOLDER = '/static'


class ProductionConfig(Config):
    ERP_SERVER_URL = 'http://localhost:8069'
    ERP_DB = 'vietinterview_1'
    ERP_DB_USER = 'admin'
    ERP_DB_PASS = '123456'


class DevelopmentConfig(Config):
    DEBUG = True
    SECRET_KEY = '\xfd\xb7_N\xd7^\xb4\xf4\xee\xfb\x9fJ\xf3\x85$an\xc4\x81\x1e\xe9o)%'
    ERP_SERVER_URL = 'http://localhost:8069'
    ERP_DB = 'vietinterview_1'
    ERP_DB_USER = 'admin'
    ERP_DB_PASS = '123456'


class TestingConfig(Config):
    TESTING = True
    ERP_SERVER_URL = 'http://localhost:8069'
    ERP_DB = 'vietinterview_1'
    ERP_DB_USER = 'admin'
    ERP_DB_PASS = '123456'


config = {
    'production': ProductionConfig,
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'default': ProductionConfig,
}
