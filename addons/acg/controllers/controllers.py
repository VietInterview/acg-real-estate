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

def default():
    JobCategory = http.request.env['iess.job_category']
    Job = http.request.env['hr.job']
    Company = http.request.env['res.company']
    Province = http.request.env['res.country.state']
    Product = http.request.env['product.product']
    BlogPost = http.request.env['iess.blog.post']
    return http.request.render('iess.home_page', {
        'jobCats': JobCategory.search([], limit=40),
        'hotJobs': Job.search([('is_hot', '=', True)]),
        'employers': Company.search([('is_top', '=', True)]),
        'provinces': Province.getDefaultProvinces(),
        'services': Product.search([('type', '=', 'service')]),
        'blogs': BlogPost.search([], limit=3)
    })

class Website(Website):
    @http.route(auth='public')
    def index(self, data={},**kw):
        super(Website, self).index(**kw)
        return default()

class Session(Session):
    @http.route('/web/session/logout', type='http', auth="none")
    def logout(self, redirect='/home'):
        request.session.logout(keep_db=True)
        return werkzeug.utils.redirect(redirect, 303)

class App(http.Controller):

    @http.route('/home', auth='public', website=True)
    def home(self, **kw):
        return default()

    @http.route('/about', auth='public', website=True)
    def about(self, **kw):
        return http.request.render('iess.aboutus_page')

    @http.route('/about', auth='public', website=True)
    def about(self, **kw):
        return http.request.render('iess.aboutus_page')

    @http.route([
        '/jobs',
        '/jobs/page/<int:page>'
    ], auth='public', website=True)
    def searchJob(self, page=1, **kw):
        url = "/jobs"
        Job = http.request.env['hr.job']
        Province = http.request.env['res.country.state']
        JobPosition = http.request.env['iess.job_position']
        JobCategory = http.request.env['iess.job_category']

        jobTitle = ''
        limit = 1
        if 'job_title' in http.request.params:
            jobTitle = http.request.params['job_title']

        pager = request.website.pager(url=url, total=2, page=page, step=limit, scope=7)
        listJobs = Job.search([('display_name', '=', jobTitle)], limit=limit, offset=pager['offset']);

        return http.request.render('iess.job_list', {
            'listJob': listJobs,
            'pager': pager,
            'provinces': Province.getDefaultProvinces(),
            'positions': JobPosition.search([]),
            'jobCats': JobCategory.search([]),
            'jobCatsShort': JobCategory.search([], limit=10),
        })

    @http.route([
        '/blogs',
        '/blogs/page/<int:page>'
    ], auth='public', website=True)
    def blogs(self, page=1, **kw):
        limit = 1
        url = "/blogs"
        BlogPost = http.request.env['blog.post']
        pager = request.website.pager(
            url=url,
            total=BlogPost.search_count([('website_published', '=', True)]),
            page=page,
            step=limit,
            scope=7
        )
        return http.request.render('iess.blog_list', {
            'blogs': BlogPost.search([('website_published', '=', True)], limit=limit, offset=pager['offset']),
            'pager': pager,
        })

    @http.route('/blogs/<model("blog.post"):blog>', type='http', auth="public", website=True)
    def blog_details(self, blog, **kwargs):
        BlogPost = http.request.env['blog.post']
        return http.request.render("iess.blog_details", {
            'blog': blog,
            'postRelated': BlogPost.search([
                ('website_published', '=', True),
                ('id', '!=', blog.id)
            ], limit=10),
        })

    @http.route('/login', type='http', auth="public")
    def web_login(self, redirect=None, **kw):
        http.request.params['login_success'] = False
        if http.request.httprequest.method == 'GET' and redirect and http.request.session.uid:
            return http.redirect_with_hash(redirect)
        if not http.request.uid:
            http.request.uid = odoo.SUPERUSER_ID
        candidate_group = http.request.env.ref('iess.group_candidate_user')

        values = request.params.copy()
        database = request.session.db or 'iess'
        if request.httprequest.method == 'POST':
            old_uid = request.uid
            uid = request.session.authenticate(database, request.params['login'], request.params['password'])
            if uid is not False:
                request.params['login_success'] = True
                if not redirect or redirect =='' or redirect =='/':
                    user = http.request.env['res.users'].browse(uid)[0]
                    if candidate_group.id in user.groups_id.ids:
                        redirect = '/home'
                    else:
                        redirect = '/web'
                return http.redirect_with_hash(redirect)
            request.uid = old_uid
            values['error'] = _("Wrong login/password")
            return request.render('iess.err_page', values)

    @http.route('/register', type='http', auth="public")
    def web_register(self, redirect=None, **kw):
        http.request.params['login_success'] = False
        if http.request.httprequest.method == 'GET' and redirect and http.request.session.uid:
            return http.redirect_with_hash(redirect)
        values = request.params.copy()
        database = request.session.db or 'iess'
        candidate_group = http.request.env.ref('iess.group_candidate_user')
        hr_group = http.request.env.ref('hr_recruitment.group_hr_recruitment_user')
        if request.httprequest.method == 'POST':
            candidate_user = http.request.env['res.users'].sudo().create({'login':request.params['login'],'password':request.params['password'],'name':request.params['name'],
                                                                    'email':request.params['login'],'groups_id':[(6,0,[candidate_group.id, hr_group.id])]})
            if candidate_user:
                    return http.redirect_with_hash('/home')
            values['error'] = _("Wrong login/password")
            return request.render('iess.err_page', values)

    @http.route('/logout', type='http', auth="none")
    def logout(self, redirect='/home'):
        request.session.logout(keep_db=True)
        return werkzeug.utils.redirect(redirect, 303)

    @http.route('/jobs/detail/<model("hr.job"):job>', type='http', auth="public", website=True)
    def jobs_detail(self, job, **kwargs):
        if http.request.session.uid:
            applicant = http.request.env['hr.applicant'].search([('job_id','=',job.id), ('user_id','=',http.request.session.uid)])
        else:
            applicant =  None
        return http.request.render("iess.detail_job", {
            'job': job,
            'applicant': applicant
        })

    def _get_search_domain(self, search, category, attrib_values):
        domain = request.website.sale_product_domain()
        if search:
            for srch in search.split(" "):
                domain += [
                    '|', '|', '|', ('name', 'ilike', srch), ('description', 'ilike', srch),
                    ('description_sale', 'ilike', srch), ('product_variant_ids.default_code', 'ilike', srch)]

        if category:
            domain += [('public_categ_ids', 'child_of', int(category))]

        if attrib_values:
            attrib = None
            ids = []
            for value in attrib_values:
                if not attrib:
                    attrib = value[0]
                    ids.append(value[1])
                elif value[0] == attrib:
                    ids.append(value[1])
                else:
                    domain += [('attribute_line_ids.value_ids', 'in', ids)]
                    attrib = value[0]
                    ids = [value[1]]
            if attrib:
                domain += [('attribute_line_ids.value_ids', 'in', ids)]

        return domain

    @http.route('/jobs/apply/<model("hr.job"):job>', type='http', auth="user", methods=['POST'], website=True)
    def jobs_apply(self, job, **kwargs):
        error = {}
        try:
            applicant = http.request.env['hr.applicant'].create({'user_id':http.request.session.uid,'job_id':job.id,
                                                                 'name':http.request.env.user.name,'email_from':http.request.env.user.email,
                                                                 'companyl':job.company_id.id})
            return json.dumps({
                'status': True,
                'id': applicant.id
            })
        except Exception as error:
            return json.dumps({
                'status': False,
                'error': error
            })

    @http.route('/account/change-password', type='http', auth='user', methods=['GET', 'POST'], website=True)
    def change_password(self, **kw):
        error = ''
        success = ''
        if http.request.httprequest.method == 'POST':
            if request.params['new_password'] != request.params['confirm_pwd']:
                error = 'Xác nhận mật khẩu không trùng mới mật khẩu mới'
            else:
                try:
                    if request.env['res.users'].change_password(request.params['old_pwd'],
                                                                request.params['new_password']):
                        success = 'Đổi mật khẩu thành công'
                    else:
                        error = 'Mật khẩu hiện tại không đúng, mật khẩu sẽ không được đổi'
                except Exception:
                    error = 'Mật khẩu hiện tại không đúng, mật khẩu sẽ không được đổi'
        return http.request.render('iess.change_password', {
            'error': error,
            'success': success
        })
