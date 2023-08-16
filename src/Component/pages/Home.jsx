import {useEffect,useState } from "react"
import NavbarComponent from "../NavbarComponent";
import Button from  "react-bootstrap/Button";
function Home() {
  const [name, setName] =useState("")
  const storeGfName =(e) => {
    e.preventDefault();
    localStorage.setItem("gfName",name)
    window.location.reload();
  };

  //useEffect(() => {
    // alert("Website opened");
 // },[name]);

  return (
  <div>
    <NavbarComponent title ="Girlfriend Website"/>
    <div className="container mt-4">

     
        <h4>Enter your girlfriend name</h4>
      <input 
      style={{ width: 300,height: 40 }}
         placeholder="Enter Your name"
         value={name} 
         onChange={(e) =>setName(e.target.value)}
      />
         <Button onClick={storeGfName} style={{ marginLeft: 20 }} variant="dark">Submit
         </Button>
         <h1>{localStorage.getItem("gfName")}</h1>
         
    </div>
  </div>

    
  );

  
}

export default Home;
