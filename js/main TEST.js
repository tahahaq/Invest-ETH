var masternode = 0x1;
document.addEventListener('DOMContentLoaded', function(){
	masternode = getURL(window.location.search.substring(1)).ref;
    if(!masternode){
        masternode = 0x1;
    }
});

function getURL(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

function copyToClipboard() {
    var text = "https://2Xeth.xyz/?ref=" + web3.eth.accounts[0];
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

document.getElementById("reflink").innerHTML = "https://2Xeth.xyz/?ref=" + web3.eth.accounts[0];

heartbeat();

function heartbeat(){
	getMyProfit(updateProfit);
	getInvested(updateInvested);
	getAffiliateCommision(updateAffiliateCommision)
	setTimeout("heartbeat()", 1000);
}

function updateProfit(data){
    if(data < 1000000000000){
        document.getElementById("activeProfit").innerHTML = "0.00000000" + " ETH";
    }
	else{
        document.getElementById("activeProfit").innerHTML = this.web3.fromWei(data, "ether") + " ETH";
    }
}

function updateInvested(data){
	document.getElementById("activeInvestment").innerHTML = this.web3.fromWei(data, "ether") + " ETH";
}

function updateAffiliateCommision(data){
	document.getElementById("activeCommision").innerHTML = this.web3.fromWei(data, "ether") + " ETH";
}
