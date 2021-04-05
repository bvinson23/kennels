import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    //react fragment
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>8422 Johnson Pike</div>
        </address>
        <PropsAndState yourName="Brandon" />
    </>
)