import React from 'react';
import ReactDOM from 'react-dom'

function FormCards(props){
    
    return (
              <div class="container-inline ml-2 mr-3 mb-3">
  <h2>{props.name}</h2>
  <div class="card" style={{width:350}}>
    <img class="card-img-top" src={props.image} alt="Card image" style={{width:100}}></img>
    <div class="card-body">
      <h4 class="card-title">{props.candidateName}</h4>
      <p class="card-text" style={{fontWeight: "bold", fontSize: 12}}>{props.text}</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
    
  </div>
      </div>



       
    )
}

ReactDOM.render(<FormCards/>, document.getElementById('root'));
export default FormCards