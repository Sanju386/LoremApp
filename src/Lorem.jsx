import React, { useState } from "react";
import { dataList } from "./data";

const Lorem = () => {

const[inputValue, setInputValue] = useState(1)


const[data,setData] = useState(dataList)


const[para,setPara] = useState([])
console.log(para)

const handleChange = (e)=>{

  setInputValue(e.target.value)
           
}


const handleSubmit = (e)=>{
  e.preventDefault()
  setPara(data.slice(0,inputValue))
  
}


  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>

        {/* onChange={(e) => setCount(e.target.value)} */}

        <input onChange={(e)=>handleChange(e)}
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={inputValue}
        ></input>
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">

{
  para.map((ele)=>{
    return <p>{ele}</p>  
  })
}

{/* <p>{data}</p> */}
   


      </article>
    </section>
  );
};

export default Lorem;
