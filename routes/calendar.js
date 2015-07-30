var async = require('async');
var request = require('supertest');

//var host_labs = "http://192.168.244.81";
//var cal_test_host = "172.28.153.176"
var host_labs = "https://labs.ocset.net:443";
var host_stock = "stock-inform-lz.til.dotcom.tesco.org:80";

var prod_key_stock = "appKeyToken=InformUser001&appKey=BQiClXwUqUKBvxU7_EGrZqcKsxrfLCUbRQMbwNwIDbxIsHyiycXhqQlnMih-njsE0";
var cal_key_stock = "appKeyToken=StockUser001&appKey=C9B40E4C-D099-4432-A41D-733D0B78BF8D";

var calendar = {
	
    //json end point of product details
    load: function(req, res) {
		async.series({
			startDate: function(callback){
						callback(null, getCalendarDates(0));
						},
			endDate: function(callback){
						callback(null, getCalendarDates(1));
						}
			},
			function(err, results) {
				if (err)
					console.log(err);
				else {
					console.log(host_stock+"/v1/storeorder/"+req.params.store+"/"+req.params.products+"?startDate="+results.startDate+"&endDate="+results.endDate+"&user=STOCK");
					request(host_stock)
						.get("/v1/storeorder/"+req.params.store+"/"+req.params.products+"?startDate="+results.startDate+"&endDate="+results.endDate+"&user=STOCK")
						.set('Authorization', cal_key_stock) 
						.set('Accept', "application/json")
						.end(function(err,_res){
							if(err)
								console.log(err);
							else {
								console.log(_res);
							}
						});
				}
		});
	},
	save: function(req, res) {
        request(host_stock)
            .post("/v1/storeorder/add/"+req.params.store+"/"+req.params.products)
            .set('Authorization', cal_key_stock) 
            .set('Content-Type', 'application/json; charset=utf-8')
			.send(req.body)			
            .end(function(err,_res){
                if(err)
                    console.log(err);
                else {
								console.log(_res);
							}
            });
	},
	
	revert: function(req, res) {
		var obj = {};
		obj.OrderDate = req.params.date;
		obj.Quantity = 0;
		obj.StoreOrderReactive = "YES";
		obj.User = "vn92"; //Will need updating
		request(host_stock)
			.put("/v1/storeorder/remove/"+req.params.store+"/"+req.params.products)
			.set('Authorization', cal_key_stock) 
			.set('Content-Type', 'application/json; charset=utf-8')
			.send(obj)
			.end(function(err,_res){
				if(err)
					console.log(err);
				else {
								console.log(_res);
							}
			});
    }
}

function getCalendarDates(when) {
    //use 0 for prev Monday, use 1 for next Sunday
    if (when !== 0 && when !== 1) {
        return; //returns nothing with invalid input
    }
    var d = new Date();
    var n = d.getDay();
    var b;
    if (n===0) {
        n=n+7;
    }
    var day_time=86400000; //millisecond day.
    if (when === 0) {
        b = new Date(d-(n+6)*day_time); //monday of the previous week
    } else {
        d=d.getTime();
        b = new Date(d+(14-n)*day_time); //sunday of next week
    }
    //date formatting
    var day = b.getDate();
    if (day<10) {
        day = "0"+day;
    }
    var month = b.getMonth()+1;
    if (month<10) {
        month = "0"+month;
    }
    var year = b.getFullYear();
    //output e.g. 24-06-2015
    return (day + "-" + month + "-" + year);
}

module.exports = calendar;