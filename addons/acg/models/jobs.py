# -*- coding: utf-8 -*-

from odoo import models, fields, api
from odoo.tools.translate import html_translate


@api.model
def search_title(self, name='', args=None, operator='ilike', limit=100):
    if args is None:
        args = []

    records = self.browse()

    search_domain = [('title', operator, name)]
    if records:
        search_domain.append(('id', 'not in', records.ids))
    records += self.search(search_domain + args, limit=limit)

    # the field 'display_name' calls name_get() to get its value
    return [(record.id, record.title) for record in records]


class JobCategory(models.Model):
    _name = 'iess.job_category'
    title = fields.Text(string="Title", translate=True)
    name_search = search_title

    @api.multi
    def name_get(self):
        return [(category.id, category.title) for category in self]

    @api.multi
    def countOpenJob(self):
        self.ensure_one()
        domain = []
        count = 0
        for job in self.env['hr.job'].search(domain):
            if job.category_ids and self.id in job.category_ids.ids:
                count += 1
        return count


class JobPosition(models.Model):
    _name = 'iess.job_position'
    title = fields.Text(string="Title", translate=True)
    name_search = search_title


class Qualification(models.Model):
    _name = 'iess.qualification'
    title = fields.Text(string="Title", translate=True)
    name_search = search_title


class Job(models.Model):
    _name = 'hr.job'
    _inherit = 'hr.job'

    status = fields.Selection(
        [('initial', 'Initial status'), ('published', 'Published status'), ('closed', 'Closed status')])
    deadline = fields.Date(string="Application deadline")
    category_ids = fields.Many2many('iess.job_category', string="Category List")
    position_id = fields.Many2one('iess.job_position', string="Position")
    country_id = fields.Many2one(string="Country ", related='address_id.country_id')
    province_id = fields.Many2one(string="Province ", related='address_id.state_id')
    is_hot = fields.Boolean(string='Is hot job')
    description = fields.Html('Job Description', sanitize_attributes=False,
                              translate=html_translate)
    interest = fields.Html('Job Interest', sanitize_attributes=False,
                           translate=html_translate)
    requirements = fields.Html('Requirements', sanitize_attributes=False,
                               translate=html_translate)
    salary_min = fields.Integer("Min Salary")
    salary_max = fields.Integer("Max Salary")
    experience = fields.Integer("Work Experience")
    gender = fields.Selection([
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other')
    ])
    qualification = fields.Many2one('iess.qualification', string="Qualification")


class Candidate(models.Model):
    _name = 'res.partner'
    _inherit = 'res.partner'

    experience_ids = fields.One2many('iess.work_experience', 'candidate_id', string="Working experience")
    education_ids = fields.One2many('iess.education_history', 'candidate_id', string="Education history")
    certificate_ids = fields.One2many('iess.certificate', 'candidate_id', string="Certificate")


class WorkExperience(models.Model):
    _name = 'iess.work_experience'

    title = fields.Text(string="Title")
    employer = fields.Text(string="Employer")
    start_date = fields.Date(string="Start date")
    end_date = fields.Date(string="End date")
    cat_ids = fields.Many2many('iess.job_category', string="Job category")
    position_id = fields.Many2one('iess.job_position', string='Job position')
    description = fields.Text(string="Description")
    current = fields.Boolean(string='Is current')
    country_id = fields.Many2one('res.country', string="Country ")
    province_id = fields.Many2one('res.country.state', string="Province ")
    candidate_id = fields.Many2one('res.partner', string="Candidate")


class EducationHistory(models.Model):
    _name = 'iess.education_history'

    institute = fields.Text(string="Institute")
    start_date = fields.Date(string="Start date")
    complete_date = fields.Date(string="Complete date")
    program = fields.Text(string="Program")
    status = fields.Selection([('graduated', 'Graduated'), ('enrolled', 'Current enrolled')])
    level_id = fields.Many2one('hr.recruitment.degree', string="Degree ")
    candidate_id = fields.Many2one('res.partner', string="Candidate")


class Certificate(models.Model):
    _name = 'iess.certificate'

    title = fields.Text(string="Title")
    issuer = fields.Text(string="Issuer")
    issue_date = fields.Date(string="Date of issuer")
    candidate_id = fields.Many2one('res.partner', string="Candidate")


class Employer(models.Model):
    _name = 'res.company'
    _inherit = 'res.company'

    is_top = fields.Boolean(string='Is top')

    @api.multi
    def countOpenJob(self):
        self.ensure_one()
        return self.env['hr.job'].search_count([('company_id', '=', self.id)])


class Province(models.Model):
    _name = 'res.country.state'
    _inherit = 'res.country.state'

    @api.model
    def getDefaultProvinces(self):
        default_country = self.env.ref('base.vn')
        states = self.env['res.country.state'].search([('country_id', '=', default_country.id)])
        return states
