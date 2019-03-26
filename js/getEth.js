
var ethValue;

function loadDoc() {
    $.ajax({
        type: 'GET',
        url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=31a8dd68ddce24c92f044aad725a26a2fb09514cb6a98ded5450190411e9e7db',
        data: {get_param: 'value'},
        dataType: 'json',
        // beforeSend: function () {
        //     $("#loading-image").show();
        // },
        success: function (data) {
                    console.log(data)
                    ethValue=data.USD;
                    console.log(ethValue);
                    document.getElementById('activeInvestment').innerHTML=ethValue;
                    document.getElementById('activeCommision').innerHTML=ethValue;
                    document.getElementById('activeProfit').innerHTML=ethValue;
                    document.getElementById('potbalance').innerHTML=ethValue;
            // if(data.responseCode === 200){
            //     $(function () {
						// 			console.log(data);
            //     });
                
            // }
           
        }
    });
		
	}
	loadDoc();