import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState( {firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: ""});

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      } 
    });
  }

  function submitHandler(event){
    event.preventDefault();
    // print
    console.log("Finally printing the entireform ka data....");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit = {submitHandler}>
        <input 
        type="text" 
        placeholder='First Name'
        onChange={changeHandler}
        name = "firstName"
        value={formData.firstName}
        />

        <br></br>
        <br/>

        <input 
        type="text" 
        placeholder='Last Name'
        onChange={changeHandler}
        name = "lastName"
        value={formData.lastName}
        />

        <br></br>
        <br/>

        <input 
        type="email" 
        placeholder='Enter your Email'
        onChange={changeHandler}
        name = "email" 
        value={formData.email}
        />

        <br></br>
        <br/> 
        <textarea placeholder='Enter your comments'
        onChange={changeHandler}
        name ="comments"
        value = {formData.comments}
        />

        <br></br>
        <br/>
        <input 
        type="checkbox"
        onChange={changeHandler}
        name="isVisible"
        checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I Visible</label>

        <br></br>
        <br/>

        <fieldset>
          <legend>Mode: </legend>
          <input 
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="Online-Mode"
        id="Online-Mode" 
        checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor='Online-Mode'>Online Mode</label>

        <br></br>
        <br/>
        <input 
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="Offline-Mode"
        id="Offline-Mode" 
        checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor='Offline-Mode'>Offline Mode</label>
        </fieldset>
        
        <label htmlFor='facCar'> Tell Me your favourite car?</label>
        <br></br>
        <br/>
        <select
        name = "favCar"
        id='favCar'
        value={formData.favCar}
        onChange={changeHandler}
        >
        <option value="scorpio">Scorpio</option>
        <option value="fortuner">Fortuner</option>
        <option value="Tharr">Thar</option>
        <option value="Legender">Legender</option>
        <option value="Defender">Defender</option>

        </select>

        {/* <input type="submit" value="Submit"></input> */}
        <br></br>
        <br/>

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
