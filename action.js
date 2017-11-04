//intializing documetn. 
$(document).ready(function(){
	console.log("ready");
	boxOnClickHandler();
	demo();	

});

//sleep funtion. 
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
	console.log('Taking a break...');
	var i = 3;
	do{
	$("#box").css("opacity:100;");
	await sleep(2000);
        getJSONP('https://api.coindesk.com/v1/bpi/currentprice.json');
			console.log(price +"hdhd");		
	console.log('Two second later');
	}
	while(i = 3);
}
//click handler
function boxOnClickHandler(){
	$("#box").click(function(){
		console.log("got a click");
	});
}
//updates dive with a new price
function updateDiv(price){
		var div = $("<div>"+ price +"</div>");
		$("#box").html(div);
}

/*	
function amountBitcoin(value){
	var requestURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
	var price; 
	console.log(value);
	var request = new XMLHttpRequest();
	request.open('GET',requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function(){
		var data = request.response;
		console.log(data);
	        price = data['bpi']['USD']['rate'];
		updateDiv(price);
//		var price = parseFloat($("#box").text());
//		console.log(price + "hllo");
		console.log(Number.parseFloat(price));
		console.log("The passed in  :" + value);
		var amount = price * value ;
		console.log(amount);
		console.log(price * value); 
		var div = $("<h1>"+ amount +"</h1>");
		$("#price").html(div);
	};
	console.log(price);
}

*
*/
//
// This function is usefull although not universal by anymeans it simply takes a ural and grabs information 
// out of the json object.  slightly gross. .
function getJSONP(url) {
	var requestURL = url;
	var price; 
	var request = new XMLHttpRequest();
	request.open('GET',requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function(){
		var data = request.response;
		console.log(data);
	        price = data['bpi']['USD']['rate'];
		updateDiv(price);
	};
	console.log(price);

}

