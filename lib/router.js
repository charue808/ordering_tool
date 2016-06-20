Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/upload', {name: 'upload'});

Router.route('/demo', {
	name: 'salesList',
	data: function() { return Sales.findOne(this.params._id); }

});

Router.route('/order', {name: 'orderPage'});

Router.route('/order/capstone', {name: 'orderCapstone'});

Router.route('/order/bearport', {name: 'orderBearport'});

Router.route('/order/lerner', {name: 'orderLerner'});

Router.route('/order/salem', {name: 'orderSalem'});



Router.map(function() {
    this.route('home', {
        path: '/',
    });

});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');


