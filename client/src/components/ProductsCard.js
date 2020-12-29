import React from "react";
// import Card from 'react-bootstrap/Card';
// import Button from "react-bootstrap/Button"
// import Axios from "axios";

// class BootstrapCard extends React.Component{
  //   constructor(props){
    //     super(props)
    //   } 
function BootstrapCard (props){
      // render (){
        console.log(props, "card props test");
        // Axios.get("/api/apiroute")
        // .then(apiroute => {
        //   console.log(apiroute, "testing card response");
        // })
  return(
    // {...props.result.volumeInfo.title}
    // <Card>
    //   <Card.Header></Card.Header>
    //   <Card.Img variant="top" src="holder.js/100px160" />
    //   <Card.Body>
    //   <Card.Title {...props.results.volumeInfo.title}>Special title treatment</Card.Title>
    //   <Card.Text>
    //   With supporting text below as a natural lead-in to additional content.
    //   </Card.Text>
    //   <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    <div>
      <table className="emp-list" >
        <thead>
            <tr>
                <th scope="col">Category</th>
                <th scope="col">description </th>
                <th scope="col">Image</th>
                <th scope="col">price</th>
            </tr>
        </thead>
        <tbody>
        {props.results.map((result) => (
            <tr className="employee-data" key={result.id} >  
                <td className="emp-list-name" >
                  <p>{result.category}</p>
                </td>
                <td className="emp-list-name" >
                  <p>{result.description}</p>
                </td>
                <td className="emp-list-img" key={result.index}>
                  <img alt={result.image} className="img.fluid" src={result.image} />
                </td> 
                <td className="emp-list-name" >
                  <p>{result.price}</p>
                </td>                  
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  )}
        

export default BootstrapCard;