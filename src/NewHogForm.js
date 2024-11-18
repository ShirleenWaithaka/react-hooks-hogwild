import { useState } from "react";
import React from "react";
const NewHogForm = ({addNewHog}) =>{
    const [name, setName] = useState("");
    const [specialty, setSpeciality] =useState("");
    const [greased, setGreased] =useState (false);
    const [weight, setWeight] = useState ("");
    const [medal, setMedal] = useState("");
   const [image, setImage]= useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        const NewHog = {name,specialty,weight,greased,medal,image};
        addNewHog (NewHog);
        setName('');
        setSpeciality('');
        setWeight("");
        setGreased (false);
        setImage("");
        setMedal("");
    };
    return (
        <form className="new-hog-form" onSubmit={handleSubmit}>
            <h2>Add a NewHog</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                type = "text"
                id="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}>
                </input>

            </div>
            <div className="speciality">
                <label htmlFor="speciality">Specialty</label>
                <input 
                type = "text"
                id="speciality"
                value={specialty}
                onChange={(e)=>setSpeciality(e.target.value)}
                required>
                </input>

            </div>
            <div className="form-group">
                <label htmlFor="greased">Greased</label>
                <input 
                type="checkbox"
                id="greased"
                checked={greased}
                onChange={(e)=>setGreased(e.target.checked)}>
                </input>

            </div>
            <div className="form-group">
                <label htmlFor="weight">Weight</label>
                <input 
                type = "number"
                id="weight"
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
                required>
                </input>

            </div>
            <div className="form-group">
                <label htmlFor="medal">Highest Medal Achieved</label>
                <input 
                type = "text"
                id="medal"
                value={medal}
                onChange={(e)=>setMedal(e.target.value)}
                required>
                </input>

            </div>
            <div className="form-group">
                <label htmlFor="image">image url</label>
                <input 
                type = "text"
                id="image"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
                required>
                </input>

            </div>
            <button type="submit" className="submit-button">Add Hog</button>
          </form>
    )
};

export default NewHogForm;