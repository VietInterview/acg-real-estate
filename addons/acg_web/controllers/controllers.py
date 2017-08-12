# -*- coding: utf-8 -*-
import odoo
import odoo.modules.registry
from odoo.tools.translate import _
from odoo import http
from odoo.http import request
from odoo.addons.website.controllers.main import Website
from odoo.addons.web.controllers.main import Session
import werkzeug.utils
import werkzeug.wrappers
import json