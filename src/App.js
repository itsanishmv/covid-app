import React, { useState } from 'react'
import Content from './Info'
import styled from 'styled-components'

const Div = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  background-color:#FDFBFB;

`
const Data = styled.div`

transform:translate(220px,-590px);
border-radius:10px;
display:flex;
flex-direction:column;
width:990px;
height:600px;
overflow:scroll;

::-webkit-scrollbar{
  width:10px;
}
::-webkit-scrollbar-track{

}
::-webkit-scrollbar-thumb{
  background:#EA2330;
  border-radius:10px;
} 

  p{
    line-height:10px;
    font-size:16px;
  }
`
const Form = styled.form`
display:flex;
flex-direction:column;
button{
  position:fixed;
  background:none;
  background-color: #358FE5 ;
  border:none;
  padding-top:10px;
  padding-bottom:10px;
  padding-left:40px;
  padding-right:40px;
  border-radius:20px;
  cursor:pointer;
  font-weight:600;
  font-size:16px;
  color:white;
  transform:translate(-70px,30px);
 
}
button:disabled{
  background-color:lightblue;
}

input{
  transform:translate(-150px,-80px);
  margin-bottom:50px;
  border-radius:10px;
  padding:20px;
  font-size:20px;
  border:none;
  outline:none;
  position: fixed;

  &:nth-child(1){
   transform:translate(-150px,-150px);

  }
  &:hover{
    border-bottom:3px solid grey;
    transition:border-bottom 0.3s;
  }
}
`
const H1 = styled.h1`

display:flex;
justify-content:center;

   font-family:helvatica;
   border-bottom:2px solid lightgrey;
   color:#EA2330;
   width:100%;
   height:70px;
   background-color: #FDFBFB;
   z-index:2;
   
`

const Formdata = styled.div`
margin-right:1000px;
box-sizing:border-box;
box-shadow: 0 0 25px rgb(0 0 0 / 30%);
width:400px;
height:600px;
  padding:100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color: white;
  h3{
    font-size:20px;
    transform:translateY(-100px);
    z-index:2;
    width:300px;
    font-size: 1.2em;
    padding: 20px 4% 15px 20px;
    text-align: left;
    color: #333;
    letter-spacing: .4px;
    font-weight: 600;
  }
`
const Anchor = styled.button`
  Background-color: red;
  border-radius:12px;
  border:none;
  padding:10px;
  transform:translateY(90px);
  &:hover span{
    visibility:visible;
  }
  a{
    text-decoration:none;
    font-weight:600;
    color:white;
  
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
     
    
  }
   span {
    font-weight:400;
    visibility:hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    margin-left:20px;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 2;
    &:after{
      
        content: " ";
        transform:rotate(90deg);
        position: absolute;
        right: 100%; /* At the bottom of the tooltip */
        top :10px;
        margin-left: -40px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
      
    }
  }
 
`
function App() {

  const [search, setSearch] = useState('')
  const [date, setDate] = useState()
  const [arr, setArr] = useState([])
  const [load, setLoad] = useState(true)
  const [text, setText] = useState('')

  
  const disablebtn = search.length <= 5 & date !== "dd-mm-yyyy"
  const getinfo = () => {

    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${search}&date=${date.split("-").reverse().join("-")}`)
    
      
      .then(res => 
        res.json()
      )
     
      .then((data) => {
        
        setLoad(false)
         setTimeout(() => {
          setArr(data.sessions)
           setLoad(true)
           setText(data.sessions.length === 0 )
        },2000)
       
        console.log(data.sessions)
        
      })
     
  }

 

  return (
    <Div >
      <H1> COVID19-VAX SLOTS</H1>
      
      <Formdata>

        <h3 style={{fontFamily:'helvatica',position:'fixed',transform: "translate(23px,-230px)"}}>Search for COVID-19 vaccine slots  </h3>
        <Form >
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <input placeholder="enter pincode" type="numbers" onChange={(e) => setSearch(e.target.value)} />
          <button onClick={(e) => { e.preventDefault(); getinfo() }} disabled={disablebtn}>Search</button>
          
          <h4 style={{ position: 'fixed', transform: "translate(-100px,150px)" }}>
            <li style={{listStyleType:"none"}}>Availbale -<p style={{ transform:"translate(110px,-30px)", backgroundColor:'green',borderRadius: "50%", height:"10px",width:"10px"}}></p> </li>  
            <li style={{listStyleType:"none"}}>booked - <p style={{ transform:"translate(110px,-30px)", backgroundColor:'red',borderRadius: "50%", height:"10px",width:"10px"}}></p> </li>
          </h4>
        </Form>

        <Anchor><a href="https://selfregistration.cowin.gov.in/"> Book now</a>
          <span>will redirect to the cowin-site</span>
        </Anchor>

      </Formdata>

      <Data>
        <div style={{fontFamily:'helvatica'}}>Welcome to covid-19 vax slot search</div>
        {text && <p style={{color:'red',fontWeight:"500"}}>SORRY!! Check other dates/Pin</p>}
        {!load && <img style={{height: "100px" }} src="./loading.svg" alt="spinner" />}
        
        {arr.map((items) => (

          <Content vaccine={items.vaccine} fee={items.fee} key={items.center_id} address={items.address} center={items.name} age={items.min_age_limit} from={items.from} to={items.to} date={items.date} state={items.state_name} dose2={items.available_capacity_dose2} dose1={items.available_capacity_dose1} />

        ))}

      </Data>



    </Div>
  );
}

export default App;
//on dev branch