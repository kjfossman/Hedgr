import React from 'react';
import { useState } from 'react';
import { spreadHedge } from '../algos/spreadHedge';

function HedgeSimpleSpread(props) {

    const [values, setValues] = useState({
        odds: 0,
        initBet: 0,
        totalInitPayout: 0,
        initSpread: 0,
        newSpread: 0,
        sug: false
    })

    const changeValues = (e) => {
        setValues({
            ...values,
            sug: false,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setValues({
            ...values,
            sug: spreadHedge(values.odds, values.initBet, values.totalInitPayout, values.initSpread, values.newSpread)
        })
        
    }

    console.log(values)

    return (
    <div>
        {/* <div>{values.sug && <Suggestions sugs={values.sug} odds={values.odds} totalInitPayout={values.totalInitPayout}/>}</div> */}
        <br/>
        <form onSubmit={handleSubmit}>
            <label>Hedge Bet Odds:
                <input onChange={changeValues} type="int" value={values.odds} name="odds"/>
            </label><br/>
            <label>Initial Bet Amount:
                <input onChange={changeValues} type="int" value={values.initBet} name="initBet"/>
            </label><br/>
            <label>Total Payout For Original Bet:
                <input onChange={changeValues} type="int" value={values.totalInitPayout} name="totalInitPayout"/>
            </label><br/>
            <label>Initial Spread:
                <input onChange={changeValues} type="int" value={values.initSpread} name="initSpread"/>
            </label><br/>
            <label>Hedge Spread:
                <input onChange={changeValues} type="int" value={values.newSpread} name="newSpread"/>
            </label><br/>

            <input type="submit"/>
        </form>
    </div>
    );
}

export default HedgeSimpleSpread;