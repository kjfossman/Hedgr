import React from 'react';

function Suggestions(props) {

    return (
        <div>
            {`With an original bet potential total payout of $${props.totalInitPayout}`}<br/>
            {`Bet $${props.sugs.betAmount} at ${props.odds} odds to hedge your bet`}<br/>
            {`Original bet wins: Total Profit $${props.sugs.initialBetWinsProfit}`}<br/>
            {`Hedge bet wins: Total Profit $${props.sugs.hedgeBetWinsProfit}`}
        </div>
    );
}

export default Suggestions;