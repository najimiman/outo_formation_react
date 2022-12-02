import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './props';

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
 <List media='Fb'id="fb" img='https://picsum.photos/60'/>
 <List media='Insta' id="insta" img='https://picsum.photos/61'/>
 <List media='Youtub' id='Youtub' img='https://picsum.photos/62'/>
</div>, document.getElementById('aa'));

// ReactDOM.render(<List/>,document.getElementById('bb'));