import React from 'react';
import { useState } from 'react';
import { spreadHedge } from '../algos/spreadHedge';
import SuggestionSpread from './SuggestionSpread';
import '../scss/SimpleSpread.css';

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
            [e.target.name]: isNaN(parseFloat(e.target.value)) ? e.target.value : parseFloat(e.target.value) 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setValues({
            ...values,
            sug: spreadHedge(values.odds, values.initBet, values.totalInitPayout, values.initSpread, values.newSpread)
        })
        
    }

    return (
    <div>
        <div>{values.sug && <SuggestionSpread sugs={values.sug} odds={values.odds} totalInitPayout={values.totalInitPayout}/>}</div>
        <br/>
        <form onSubmit={handleSubmit}>
            <label>Hedge Bet Odds:
                <input onChange={changeValues} type="number" value={values.odds} name="odds"/>
            </label><br/>
            <label>Hedge Spread:
                <input onChange={changeValues} type="number" value={values.newSpread} name="newSpread"/>
            </label><br/>
            <label>Initial Bet Amount:
                <input onChange={changeValues} type="number" value={values.initBet} name="initBet"/>
            </label><br/>
            <label>Total Payout For Initial Bet:
                <input onChange={changeValues} type="number" value={values.totalInitPayout} name="totalInitPayout"/>
            </label><br/>
            <label>Initial Spread:
                <input onChange={changeValues} type="number" value={values.initSpread} name="initSpread"/>
            </label><br/>
            
            
            
            <input className="submit" type="submit" value="Calculate"/>
          
        </form>
    </div>
    );
}

export default HedgeSimpleSpread;