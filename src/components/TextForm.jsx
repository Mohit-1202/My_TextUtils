import PropTypes from 'prop-types';
import { useState } from 'react';
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpCase=()=>{
    let newText =text.toUpperCase()
    setText(newText)
  }
  const handleLowCase=()=>{
    let newText =text.toLowerCase()
    setText(newText)
  }
  const ClearText=()=>{
    setText("")
  }
  const clearExtraSpace=()=>{
    let newText= text.split(/[  ]+/)
    setText(newText.join(" "))
  }
  const onChange=(event)=>{
    setText(event.target.value)
  }
  return (
    <div className="mb-3">
  <label htmlFor="myBox" className="form-label text-4xl font-normal">{props.heading}</label>
  <textarea className= "form-control h-52" style={{background:props.mode===`light`?`white`:`grey`, color:props.mode===`light`?`#212529`:`white`}} id="myBox" value={text} onChange={onChange} rows="3"></textarea>
  <button type="button" onClick={handleUpCase} className="btn my-3 mx-2" style={{background:props.mode===`light`?`#212529`:`white`, color:props.mode===`light`?`white`:`grey`}}>Convert to UpperCase</button>
  <button type="button" onClick={handleLowCase} className="btn my-3 mx-2" style={{background:props.mode===`light`?`#212529`:`white`, color:props.mode===`light`?`white`:`grey`}}>Convert to LowerCase</button>
  <button type="button" onClick={ClearText} className="btn my-3 mx-2" style={{background:props.mode===`light`?`#212529`:`white`, color:props.mode===`light`?`white`:`grey`}}>Clear Text</button>
  <button type="button" onClick={clearExtraSpace} className="btn my-3 mx-2" style={{background:props.mode===`light`?`#212529`:`white`, color:props.mode===`light`?`white`:`grey`}}>Clear Extra Space</button>
  <h2 className='text-3xl font-medium'>Your Text Summary</h2>
  <p className='my-2'> {text.length} letters, {text.split(" ").length} words. </p>
  <p>{0.008 * text.split(" ").length} minutes to read  </p>
  <h2 className='text-3xl my-2 font-medium'>Preview</h2>
  <p className='my-2'>{text}</p>
</div>
  )
}
TextForm.propTypes={
    heading:PropTypes.string,
    mode:PropTypes.string
}