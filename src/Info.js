import React from 'react'
import styled from 'styled-components';

const P = styled.p`
    flex-wrap:wrap;
    background-Color:white;
    text-align: left;
    height: 150px;
    font-family: helvatica;
    display: flex;
    margin-left: 0px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 25px rgb(0 0 0 / 30%);
    width: 100%;

`

const Content = ({ vaccine,fee, center, address, dose1, dose2, age, date, to, from, state }) => {
    const Light = styled.span`
    
    height:10px;
    width: 10px;
    border-radius:50%;
    background-color:${dose1 === 0 && dose2 ===0 ? "red": "green"} ;
`
    return (
        <div >
            <P>
                <Light>
                   
                </Light>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p><strong> State  </strong> : {state}</p>
                    <p ><strong> Center</strong> : {center}</p>
                    <p style={{width:"350px",lineHeight:"20px"}}><strong> Address </strong> : {address}</p>
                </div>
                <div style={{marginLeft:"20px"}}>
                    <p ><strong>  Dose 1 </strong> : {dose1}</p>
                    <p ><strong>  Dose 2  </strong> : {dose2}</p>
                    <p ><strong> Date </strong> : {date}</p>
                </div>
             
                <div style={{marginLeft:"50px"}}>
                    <p ><strong> From </strong> : {from}</p>
                    <p ><strong> To </strong> : {to}</p>

                </div>
                <div style={{marginLeft:"50px"}}>
                    <p ><strong> Age </strong> : {age}</p>
                    <p><strong>Fee</strong> :{fee}rs</p>
                </div>
                <div>
                      <p style={{marginLeft:"20px"}}><strong>vaccine</strong> :{vaccine}</p>
                </div>

            </P>

        </div>
    )
}
export default Content;