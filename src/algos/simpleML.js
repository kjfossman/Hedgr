export const hedge = (odds, initBet, initTotalPay) => {
    let left = 0
    let right = initTotalPay
    let bet = 0 
    let multiplier = 0
    if(odds < 0){
        multiplier = Math.abs(100/odds) 
    }else{
        multiplier = Math.abs(odds/100)
    }
    while(left < right){
        let pLN = (left * multiplier) - initBet
        let pLO = initTotalPay - left - initBet
        let pRN = (right * multiplier) - initBet
        let pRO = initTotalPay - right - initBet
        console.log("left", left, "right", right)
        if(Math.abs(pLN - pLO) > Math.abs(pRO - pRN)){
            left++
            bet = right
        }else{
            right--
            bet = left
        }
    }
    return {
        betAmount: bet,
        initialBetWinsProfit: initTotalPay - bet - initBet,
        hedgeBetWinsProfit: (bet * multiplier - initBet).toFixed(0)
    }
    
}