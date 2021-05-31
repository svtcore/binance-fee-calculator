/**
 * Getting value of crypto after taken fee
 */
function calculateBuyValue(buy_amount, fee_percent){
	var value = parseFloat(buy_amount-((buy_amount/100) * fee_percent));
	return value.toFixed(8);
}

/**
 * Getting sum spent for buy crypto
 */
function calculateBuyUSDT(buy_amount, buy_price){
	var usdt = parseFloat((buy_amount * buy_price));
	return usdt.toFixed(8);
}

/**
 * Getting amount of usdt after selling crypto
 */
function calculateSellUSDT(sell_amount, sell_price, fee_percent){
	var usdt = parseFloat((sell_amount * sell_price)-(((sell_amount * sell_price)/100) * fee_percent));
	return usdt.toFixed(8);
}
/**
 * Getting value of earn usdt
 */
function calculateFinalResult(sell_value, buy_value){
	var result = parseFloat(sell_value - buy_value);
	return result;
}

function calculate(){
	var fee_percent = $("#fee").val();
	var buy_amount = $("#buy_amount").val();
	var buy_price = $("#buy_price").val();
	var final_buy_value = calculateBuyValue(buy_amount, fee_percent)
	$("#sell_amount").val(final_buy_value);

	var sell_amount = $("#sell_amount").val();
	var sell_price = $("#sell_price").val();
	
	var buyval = calculateBuyUSDT(buy_amount, buy_price, fee_percent)
	var sellval = calculateSellUSDT(sell_amount, sell_price, fee_percent)
	$("#result-earn").text("Earn: ≈"+ calculateFinalResult(sellval, buyval) + " USDT");
}

$('input').on('input', function() {
    calculate();
});
$('#fee').change(function() {
	calculate();
});
