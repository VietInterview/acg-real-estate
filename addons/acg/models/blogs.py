# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from datetime import datetime
import random

from odoo import api, models, fields, _


class Blog(models.Model):
    _name = 'iess.blog'


class BlogTag(models.Model):
    _name = 'iess.blog.tag'


class BlogPost(models.Model):
    _name = 'iess.blog.post'

    image = fields.Binary('Image', attachment=True)

