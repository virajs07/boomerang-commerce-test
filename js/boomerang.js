var Data={"data":[
	{"category":"Hardware","status":"Retail","date":"2014-12-12","value":"12.0000000","id":1001},
	{"category":"Hardware","status":"Retail","date":"2014-12-13","value":"14.6000000","id":1002},
	{"category":"Hardware","status":"Retail","date":"2014-12-15","value":"12.9000000","id":1003},
	{"category":"Hardware","status":"Retail","date":"2014-12-16","value":"21.3000000","id":1004},
	{"category":"Hardware","status":"Retail","date":"2014-12-19","value":"11.4000000","id":1005},
	{"category":"Hardware","status":"Retail","date":"2014-12-20","value":"16.5000000","id":1006},
	{"category":"Hardware","status":"Wholesale","date":"2014-12-12","value":"12.0000000","id":1007},
	{"category":"Hardware","status":"Wholesale","date":"2014-12-14","value":"14.6000000","id":1008},
	{"category":"Hardware","status":"Wholesale","date":"2014-12-15","value":"12.9000000","id":1009},
	{"category":"Hardware","status":"Wholesale","date":"2014-12-16","value":"21.3000000","id":1010},
	{"category":"Hardware","status":"Wholesale","date":"2014-12-17","value":"11.4000000","id":1011},
	{"category":"Hardware","status":"Wholesale","date":"2014-12-19","value":"16.5000000","id":1012},
	{"category":"Software","status":"FreeWare","date":"2014-12-13","value":"12.0000000","id":1013},
	{"category":"Software","status":"FreeWare","date":"2014-12-14","value":"14.6000000","id":1014},
	{"category":"Software","status":"FreeWare","date":"2014-12-15","value":"12.9000000","id":1015},
	{"category":"Software","status":"FreeWare","date":"2014-12-16","value":"21.3000000","id":1016},
	{"category":"Software","status":"FreeWare","date":"2014-12-17","value":"11.4000000","id":1017},
	{"category":"Software","status":"FreeWare","date":"2014-12-18","value":"16.5000000","id":1018},
	{"category":"Software","status":"Paid","date":"2014-12-15","value":"12.0000000","id":1019},
	{"category":"Software","status":"Paid","date":"2014-12-16","value":"14.6000000","id":1020},
	{"category":"Software","status":"Paid","date":"2014-12-17","value":"12.9000000","id":1021},
	{"category":"Software","status":"Paid","date":"2014-12-18","value":"21.3000000","id":1022},
	{"category":"Software","status":"Paid","date":"2014-12-19","value":"11.4000000","id":1023},
	{"category":"Software","status":"Paid","date":"2014-12-20","value":"16.5000000","id":1024},
	{"category":"Software","status":"In App Purchase","date":"2014-12-15","value":"18.6666600","id":1025},
	{"category":"Software","status":"In App Purchase","date":"2014-12-17","value":"12.8700000","id":1026},
	{"category":"Software","status":"In App Purchase","date":"2014-12-18","value":"12.9000000","id":1027}
]};

function createStatus(){
	var category=$("#category").val();
	if(category=="Hardware"){
		$("#status").html("<option disabled selected>Status</option><option value='Retail'>Retail</option><option value='Wholesale'>Wholesale</option>");
	}
	else{
		$("#status").html("<option disabled selected>Status</option><option value='FreeWare'>Freeware</option><option value='Paid'>Paid</option><option value='In App Purchase'>In App Purchase</option>");
	}
}

function createGraph(){
	var category=$("#category").val();
	var status=$("#status").val();
	var values=[];
	var dates=[];
	_.each(Data.data,function(item){
		if(item.category==category && item.status==status){
			values.push(parseFloat(item.value));
			dates.push(item.date);
		}
	});



	$('#container').highcharts({
        title: {
            text: 'Value Date Chart',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: Boomerang',
            x: -20
        },
        xAxis: {
            categories: dates
        },
        yAxis: {
            title: {
                text: 'Values'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Date-Value',
            data: values
        }]
    });
}