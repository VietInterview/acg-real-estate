import erppeek

client = erppeek.Client('http://localhost:8069', 'viet-hrm', 'admin','123456')
model = 'viethrm.setting'
method = 'get_required_setting'
paramList = []
paramDict = {}
expected = client.model(model).get_require_setting()
print expected
#result = client.execute(model, method, paramList, paramDict)
#print result
