# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from datetime import datetime
import random
from odoo.tools.translate import html_translate

from odoo import api, models, fields, _


class ProductTemplate(models.Model):
    _name = 'product.template'
    _inherit = 'product.template'

    status = fields.Selection(
        [('rent', 'Rent status'), ('sale', 'Sale status'), ('project', 'Project status')])
    year_built = fields.Integer(string="Year Built")
    property_size = fields.Date(string="Property Size")
    bedrooms = fields.Integer(string="Bedrooms")
    bathrooms = fields.Integer(string="Bathrooms")
    available_from = fields.Date(string="Available From")
    garages = fields.Integer(string="Garages")
    description = fields.Html('description', sanitize_attributes=False,
                           translate=html_translate)
