import React from "react";

function TextArea(label, value, onChange, description) {
    return (
        <>
        <label>{label}</label>
        <textarea
          name={description}
          value={value}
          onChange={onChange}
        ></textarea>
      </>
    )
 
}
export default TextArea;
