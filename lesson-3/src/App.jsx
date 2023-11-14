import React, {useState} from 'react'

const InputAlert = () => {
  const [inputValue, setInputValue ] = useState('');
  const inputChange = (event)=> {
    const value = event.target.value;
    setInputValue(value);

    if (value.length >= 10 ){
      alert("შეიყვანეთ მაქსიმუმ 10 სიმბოლო")
    }

  }

  return (
    <div>
      <input type="text" 
      value={inputValue}
      onChange={inputChange}
      />
    </div>
  )
}


export default InputAlert