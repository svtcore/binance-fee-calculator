# Binance Fee Calculator

It helps calculate approximate profit/losses of trading including binance transaction fee which depends of VIP level 

You can try it here [HERE](https://svtcore.github.io/binance-fee-calculator "HERE")

It could be used for any cryptocurrency just fill right fields

To use locally on your device just open index.html

Using this software you agree with [LICENCE](../master/LICENSE). The author is not responsible for possible losses, results of using the software

How to calculate manually

For example you want invest $100 to btc while it has value 30000. Calculate how much it in btc value (Some values will be round)
> 100 / 30000 = 0.00333333 BTC

if you are VIP 0 your fee is 0.10% so calculate how much will be fee from this value
> ( 0.00333333 / 100 ) * 0.10 = 0.00000333333

Calculate BTC value after fee has been taken
> 0.00333333 - 0.00000333333 = 0.00332999

Now you want sell it when BTC value is 33000.
> 0.00332999 * 33000 = $109.88967

Calculate USDT value after fee has been taken
> ( 109.88967 / 100 ) * 0.10 = 0.10988967

Final result of USDT after selling
> 109.88967 - 0.10988967 = 109.77978033

Calculate total result
> 109.77978033 - 100 = 9.77978033
