import React, { useState } from 'react';

function CounterWithSpread(){
    const[count,setCount]=useState(0)
    const[name ,setName]=useState("Krishna Hada");
    const[student,setStudent]=useState(["Krishna","ABC","XYZ"]);
    const[profile, setProfile]=useState({
        name:"Krishna Hada",
        city:"Rajkot"
    })
    return(
        <>
        <button onClick={
            ()=>{
                if((student.length-1)<=count)
                {
                    setCount(-1)
                    console.log(count)
                }
                setCount((count)=>count+1)
            }
        }>
            Count{count}
        </button>
        <h2>{name}</h2>
        <button onClick={()=>{setName("Atmiya Univercsity")}}>Atmiya</button>
        <h2>{student[count]}</h2>
        <button onClick={()=>{setProfile({
            name:"Atmiya University",
            city:"Rajkot"
        })}}>Change Person Detail</button>
        <h2>Profile</h2>
        <p>Name:{profile.name}</p>
        <p>Name:{profile.city}</p>
        </>
    )
 
}
export default CounterWithSpread;
