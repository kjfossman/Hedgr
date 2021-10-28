import React from 'react';

function SuggestionSpread(props) {

    console.log(props)
    
    return (
        <div>
            <div style={{color: "red"}}><b>{props.sugs.spreadSituation.includes("lose".toUpperCase()) && props.sugs.spreadSituation}</b></div>
            <div style={{color: "green"}}><b>{props.sugs.spreadSituation.includes("win".toUpperCase()) && props.sugs.spreadSituation}</b></div>

            <div>Hedge Bet Amount: ${props.sugs.betAmount}</div>
            
            <div>Hedge Bet Wins Profit: ${props.sugs.hedgeBetWinsProfit.toFixed(0)}</div>
            <div>Initial Bet Wins Profit: ${props.sugs.initialBetWinsProfit.toFixed(0)}</div>
            <div>{props.sugs.bothBetsWinCombinedProfit && <div>Profit if Both Bets WIN: ${props.sugs.bothBetsWinCombinedProfit.toFixed(0)}</div>}</div>
            <div>{props.sugs.combinedLosses && <div>Losses if Both Bets LOSE: ${props.sugs.combinedLosses.toFixed(0)}</div>}</div>


        </div>
    );
}

export default SuggestionSpread;