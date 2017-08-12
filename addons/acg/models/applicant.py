# -*- coding: utf-8 -*-

from odoo import models, fields, api


class Applicant(models.Model):
    _name = 'hr.applicant'
    _inherit = 'hr.applicant'

    def website_form_input_filter(self, request, values):
        if 'partner_name' in values:
            values.setdefault('name', '%s\'s Application' % values['partner_name'])
        return values

    @api.multi
    def close_dialog(self):
        return {'type': 'ir.actions.act_window_close'}

class Resume(models.Model):
    _name = 'ir.attachment'
    _inherit = 'ir.attachment'

    preview = fields.Html(readonly=True)

    @api.model
    def create(self, vals):
        if vals['datas']:
            vals['preview'] = '<html></html>'
        conf = super(Resume, self).create(vals)
        return conf

    @api.multi
    def action_apply_to_job(self):
        applicant = self.env['hr.applicant'].create({'name':self.name[:self.name.index('.')],'attachment_ids':[(4,self.id)]})
        return {
            'view_mode': 'form',
            'view_id': self.env.ref('iess.iess_applicant_simple_form').id,
            'res_id': applicant.id,
            'res_model': 'hr.applicant',
            'type': 'ir.actions.act_window',
            'initial_mode': 'edit'
        }
