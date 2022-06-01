import React , {useState} from 'react'

export default function Textform() {
const handle=()=>{
    setText(text.toUpperCase())
}
const handleon=(event)=>{
    setText(event.target.value)
} 

    const[text,setText]=useState('enter text')
    return (
        <>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleon} value={text} rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handle}>conert</button>
        </>)
}
