var fees = {
    0: { "0.10": "VIP 0 | Maker | (0.10 % )" },
    1: { "0.075": "VIP 0 | Maker | BNB 25 % off(0.0750 % )" },
    2: { "0.06": "VIP 0 | Maker | BNB 25 % off x Referral Kickback 20 % (0.0600 % )" },
    3: { "0.10": "VIP 0 | Taker | (0.10 % )" },
    4: { "0.075": "VIP 0 | Taker | BNB 25 % off(0.0750 % )" },
    5: { "0.075": "VIP 0 | Taker | BNB 25 % off x Referral Kickback 20 % (0.0600 % )" },
    6: { "0.09": "VIP 1 | Maker | (0.09 % )" },
    7: { "0.0675": "VIP 1 | Maker | BNB 25 % off(0.0675 % )" },
    9: { "0.0540": "VIP 1 | Maker | BNB 25 % off x Referral Kickback 20 % (0.0540 % )" },
    10: { "0.10": "VIP 1 | Taker | (0.10 % )" },
    11: { "0.075": "VIP 1 | Taker | BNB 25 % off(0.0750 % )" },
    12: { "0.06": "VIP 1 | Taker | BNB 25 % off x Referral Kickback 20 % (0.0600 % )" },
    13: { "0.08": "VIP 2 | Maker | (0.08 % )" },
    14: { "0.06": "VIP 2 | Maker | BNB 25 % off(0.06 % )" },
    15: { "0.0480": "VIP 2 | Maker | BNB 25 % off x Referral Kickback 20 % (0.0480 % )" },
    16: { "0.10": "VIP 2 | Taker | (0.10 % )" },
    17: { "0.075": "VIP 2 | Taker | BNB 25 % off(0.0750 % )" },
    18: { "0.06": "VIP 2 | Taker | BNB 25 % off x Referral Kickback 20 % (0.0600 % )" },
    19: { "0.07": "VIP 3 | Maker | (0.07 % )" },
    20: { "0.0525": "VIP 3 | Maker | BNB 25 % off(0.0525 % )" },
    21: { "0.0420": "VIP 3 | Maker | BNB 25 % off x Referral Kickback 20 % (0.0420 % )" },
    22: { "0.10": "VIP 3 | Taker | (0.10 % )" },
    23: { "0.075": "VIP 3 | Taker | BNB 25 % off(0.0750 % )" },
    24: { "0.06": "VIP 3 | Taker | BNB 25 % off x Referral Kickback 20 % (0.0600 % )" },
    25: { "0.07": "VIP 4 | Maker | (0.07 % )" },
    26: { "0.0525": "VIP 4 | Maker | BNB 25 % off(0.0525 % )" },
    27: { "0.0420": "VIP 4 | Maker | BNB 25 % off x Referral Kickback 20 % (0.0420 % )" },
    28: { "0.09": "VIP 4 | Taker | (0.09 % )" },
    29: { "0.0675": "VIP 4 | Taker | BNB 25 % off(0.0675 % )" },
    30: { "0.0540": "VIP 4 | Taker | BNB 25 % off x Referral Kickback 20 % (0.0540 % )" },
    31: { "0.06": "VIP 5 | Maker | (0.06 % )" },
    32: { "0.0450": "VIP 5 | Maker | BNB 25 % off(0.0450 % )" },
    33: { "0.0360": "VIP 5 | Maker | BNB 25 % off x Referral Kickback 20 % (0.0360 % )" },
    34: { "0.08": "VIP 5 | Taker | (0.08 % )" },
    35: { "0.06": "VIP 5 | Taker | BNB 25 % off(0.06 % )" },
    36: { "0.0480": "VIP 5 | Taker | BNB 25 % off x Referral Kickback 20 % (0.0480 % )" },
    37: { "0.05": "VIP 6 | Maker | (0.05 % )" },
    38: { "0.0375": "VIP 6 | Maker | BNB 25 % off(0.0375 % )" },
    39: { "0.03": "VIP 6 | Maker | BNB 25 % off x Referral Kickback 20 % (0.03 % )" },
    40: { "0.07": "VIP 6 | Taker | (0.07 % )" },
    41: { "0.0525": "VIP 6 | Taker | BNB 25 % off(0.0525 % )" },
    42: { "0.0420": "VIP 6 | Taker | BNB 25 % off x Referral Kickback 20 % (0.0420 % )" },
    43: { "0.04": "VIP 7 | Maker | (0.04 % )" },
    44: { "0.03": "VIP 7 | Maker | BNB 25 % off(0.03 % )" },
    45: { "0.0240": "VIP 7 | Maker | BNB 25 % off x Referral Kickback 20 % (0.0240 % )" },
    46: { "0.06": "VIP 7 | Taker | (0.06 % )" },
    47: { "0.0450": "VIP 7 | Taker | BNB 25 % off(0.0450 % )" },
    48: { "0.0360": "VIP 7 | Taker | BNB 25 % off x Referral Kickback 20 % (0.0360 % )" },
    49: { "0.03": "VIP 8 | Maker | (0.03 % )" },
    50: { "0.0225": "VIP 8 | Maker | BNB 25 % off(0.0225 % )" },
    51: { "0.0180": "VIP 8 | Maker | BNB 25 % off x Referral Kickback 20 % (0.0180 % )" },
    52: { "0.05": "VIP 8 | Taker | (0.05 % )" },
    53: { "0.0375": "VIP 8 | Taker | BNB 25 % off(0.0375 % )" },
    54: { "0.03": "VIP 8 | Taker | BNB 25 % off x Referral Kickback 20 % (0.03 % )" },
    55: { "0.02": "VIP 9 | Maker | (0.02 % )" },
    56: { "0.0150": "VIP 9 | Maker | BNB 25 % off(0.0150 % )" },
    57: { "0.0120": "VIP 9 | Maker | BNB 25 % off x Referral Kickback 20 % (0.0120 % )" },
    58: { "0.04": "VIP 9 | Taker | (0.04 % )" },
    59: { "0.03": "VIP 9 | Taker | BNB 25 % off(0.03 % )" },
    60: { "0.0240": "VIP 9 | Taker | BNB 25 % off x Referral Kickback 20 % (0.0240 % )" },
};


$(document).ready(function() {
    for (var key_id in fees) {
        for (var key_percent in fees[key_id]) {
            $("#fee").append("<option value='" + key_id + "'>" + fees[key_id][key_percent] + "</option>");
        }
    }
});

/**
 * Getting value of crypto after taken fee
 */
function calculateBuyValue(buy_amount, fee_percent) {
    var value = parseFloat(buy_amount - ((buy_amount / 100) * fee_percent));
    return value.toFixed(8);
}

/**
 * Getting sum spent for buy crypto
 */
function calculateBuyUSDT(buy_amount, buy_price) {
    var usdt = parseFloat((buy_amount * buy_price));
    return usdt.toFixed(8);
}

/**
 * Getting amount of usdt after selling crypto
 */
function calculateSellUSDT(sell_amount, sell_price, fee_percent) {
    var usdt = parseFloat((sell_amount * sell_price) - (((sell_amount * sell_price) / 100) * fee_percent));
    return usdt.toFixed(8);
}
/**
 * Getting value of earn usdt
 */
function calculateFinalResult(sell_value, buy_value) {
    var result = parseFloat(sell_value - buy_value);
    return result;
}

function calculate() {
    var id = $("#fee").val();
    var fee_percent = 0;
    for (var key_id in fees) {
        for (var key_percent in fees[key_id]) {
            if (id == key_id) {
                fee_percent = key_percent;
                break;
            }
        }
    }
    var buy_amount = $("#buy_amount").val();
    var buy_price = $("#buy_price").val();
    var final_buy_value = calculateBuyValue(buy_amount, fee_percent)
    $("#sell_amount").val(final_buy_value);

    var sell_amount = $("#sell_amount").val();
    var sell_price = $("#sell_price").val();

    var buyval = calculateBuyUSDT(buy_amount, buy_price, fee_percent)
    var sellval = calculateSellUSDT(sell_amount, sell_price, fee_percent)
    $("#result-earn").text("Earn: ≈" + calculateFinalResult(sellval, buyval) + " USDT");
}

$('input').on('input', function() {
    calculate();
});
$('#fee').change(function() {
    calculate();
});