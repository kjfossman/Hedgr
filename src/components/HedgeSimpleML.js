import React from 'react';
import { useState } from 'react';
import Suggestions from './Suggestions';
import { hedge } from '../algos/simpleML';

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
            sug: hedge(values.odds, values.initBet, values.totalInitPayout)
        })
        
    }

    console.log(values)
    return (
        <div>
            <div>{values.sug && <Suggestions sugs={values.sug} odds={values.odds} totalInitPayout={values.totalInitPayout}/>}</div>
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

                <input type="submit"/>
            </form>
        </div>
    );
}

export default HedgeSimpleML;


