import Customer from './components/Customer';
import './App.css';
import { Component } from 'react';

const customers = [{
  id : 1,
  image : "http://placeimg.com/64/64/1",
  name : "金①1",
  birthday : "19790102",
  gender : "男",
  job : "会社員"
},
{
  id : 2,
  image : "http://placeimg.com/64/64/3",
  name : "金②",
  birthday : "19790102",
  gender : "男",
  job : "会社員"
},
{
  id : 3,
  image : "http://placeimg.com/64/64/4",
  name : "金③",
  birthday : "19790102",
  gender : "男",
  job : "会社員"
}];

class App extends Component {
  render() {
    return (
      <>
        {
          customers.map((customer, index)=>{
            return(
              <>
                <div dangerouslySetInnerHTML={{__html: (index !==0 ? "<hr/>" : "")}}></div>
                <Customer 
                  id = {customer.id}
                  image = {customer.image}
                  name={customer.name}
                  birthday={customer.birthday}
                  gender={customer.gender}
                  job={customer.job}
                  key={index}
                  />
                
              </>
            )
          })
        }
      </>
    );
  }
}

export default App;
