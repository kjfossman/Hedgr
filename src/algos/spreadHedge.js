export const spreadHedge = (odds, initBet, initTotalPay, initSpread, newSpread) => {
    let left = 0
    let right = initTotalPay
    let bet = 0 
    let multiplier = 0
    let sit = ''
    let combinedProfit = false
    let combinedLosses = false
    let magicNumber = false
    let magicNumberLowerEnd = false
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
        if(Math.abs(pLN - pLO) > Math.abs(pRO - pRN)){
            left++
            bet = right
        }else{
            right--
            bet = left
        }
    }

    if(initSpread > 0 && newSpread > 0){
            sit = "Good News"
            combinedProfit = (bet * multiplier + initTotalPay - initBet)
            sit = `if Initial team loses by less than ${initSpread} AND Hedge Team loses by less than ${newSpread} you WIN both bets Total Profit = ${combinedProfit}!`
    }else if(initSpread < 0 && newSpread < 0){
            // "Bad News Could Potentially LOSE both bets...Not Advised"
            combinedLosses = initBet + bet
            sit = `If Initial Team wins by less than ${initSpread} or loses AND Hedge Team wins by less than ${newSpread} or loses you LOSE both bets Total Losses = ${combinedLosses}`

    }else if(Math.abs(initSpread) === Math.abs(newSpread)){
            sit = "Same as Moneyline Hedge"
    }else if(Math.abs(initSpread) - Math.abs(newSpread) === .5 || Math.abs(initSpread) - Math.abs(newSpread) === -.5)
        sit = 'Potential to PUSH and LOSE reevaluate before making final decision'
    else{
            // "We need to do some math"
            if(initSpread + newSpread > 0){
                //  "Guaranteed Winner"
                if(initSpread < 0){
                    // "Initial Team Favored"
                    if(initSpread + newSpread > 0.5){
                            let sweetSpread = initSpread + newSpread - .5
                            magicNumber = initSpread - sweetSpread 
                            magicNumberLowerEnd = magicNumber + Math.abs(magicNumber - initSpread) - .5
                            console.log("I am here")
                            sit = `If Initial Teams final spread falls on or between ${magicNumber} and ${magicNumberLowerEnd} You WIN both bets`
                            combinedProfit = bet * multiplier + initTotalPay - initBet
                    }
                }else{
                    // "Hedge Team Favored"
                    if(initSpread + newSpread > 0.5){
                            let sweetSpread = initSpread + newSpread - .5
                            magicNumber = newSpread - sweetSpread 
                            magicNumberLowerEnd = magicNumber + Math.abs(magicNumber - newSpread) - .5
                            sit = `If Hedge Teams final spread falls on or between ${magicNumber} and ${magicNumberLowerEnd} You WIN both bets`
                            combinedProfit = bet * multiplier + initTotalPay - initBet
                    }
                }
            }else{
                // "Potential to lose everything Not Advised"
                if(initSpread < 0){
                    // "Initial Team Favored"
                            
                            let sweetSpread = initSpread + newSpread
                            magicNumber = initSpread - sweetSpread 
                            magicNumberLowerEnd = magicNumber - Math.abs(magicNumber - initSpread)
                            sit = `If Initial Teams final spread falls on or between ${magicNumberLowerEnd + .5} and ${magicNumber - .5} You LOSE both bets`
                            combinedLosses = bet + initBet
                }else{
                    // "Hedge Team Favored"
                            debugger
                            let sweetSpread = initSpread + newSpread
                            magicNumber = newSpread - sweetSpread 
                            magicNumberLowerEnd = magicNumber - Math.abs(magicNumber - newSpread) 
                            sit = `If Hedge Teams final spread falls on or between ${magicNumberLowerEnd + .5} and ${magicNumber - .5} You LOSE both bets`
                            combinedLosses = bet + initBet
                }
            }

    }

    return {
        betAmount: bet,
        initialBetWinsProfit: initTotalPay - bet - initBet,
        hedgeBetWinsProfit: bet * multiplier - initBet,
        spreadSituation: sit,
        bothBetsWinCombinedProfit: combinedProfit,
        combinedLosses: combinedLosses,
        magicNumber: magicNumber,
        magicNumberlowerEnd: magicNumberLowerEnd
    }
    
}


