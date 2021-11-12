import React from 'react';
import { useState } from 'react';
import Suggestions from './Suggestions';
import { hedge } from '../algos/simpleML';
import '../scss/SimpleSpread.css';

function HedgeSimpleML(props) {

    const [values, setValues] = useState({
        odds: 0,
        totalInitPayout: 0,
        initBet: 0,
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
            sug: hedge(parseFloat(values.odds), parseFloat(values.initBet), parseFloat(values.totalInitPayout))
        })
        
    }

    console.log(values)
    return (
        <div>
            <div>{values.sug && <Suggestions sugs={values.sug} odds={values.odds} totalInitPayout={values.totalInitPayout}/>}</div>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Hedge Bet Odds:
                    <input onChange={changeValues} type="number" value={values.odds} name="odds"/>
                </label><br/>
                <label>Initial Bet Amount:
                    <input onChange={changeValues} type="number" value={values.initBet} name="initBet"/>
                </label><br/>
                <label>Total Payout For Initial Bet:
                    <input onChange={changeValues} type="number" value={values.totalInitPayout} name="totalInitPayout"/>
                </label><br/>

                <input className="submit" type="submit" value="Calculate"/>
            </form>
        </div>
    );
}

export default HedgeSimpleML;


