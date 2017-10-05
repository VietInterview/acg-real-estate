# -*- coding: utf-8 -*-
{
    'name': "ACG Real Estate web",

    'summary': """
        ACG - Real Estate Management""",

    'description': """
        Land and Property Management Module
        """,

    'author': "Thanh Cong A Chau",
    'website': "http://www.vietinterview.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'job, human resource, head hunting',
    'version': '0.1',

    'application': True,

    # any module necessary for this one to work correctly
    'depends': ['base', 'hr', 'hr_recruitment', 'product', 'mail'],

    # always loaded
    'data': [
        'security/group.xml',
        'security/ir.model.access.csv',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
