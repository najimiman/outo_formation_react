import React from 'react';
import ReactDOM from 'react-dom';

//rendu html
function Affiche(){
  return (
  <div>
    <h1>hello aaaa</h1>
    <p>hh</p>
  </div>
  );
}
ReactDOM.render(<Affiche/>, document.getElementById('root'));


//JSX
ReactDOM.render(<div style={{color:"red"}}>
 <ul>
  <li>
    iman
  </li>
  <li>
    ilham
  </li>
 </ul>

</div>, document.getElementById('aa'));

