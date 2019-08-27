import React from 'react';

const InputForm = ({ className, value, type, onChange, placeholder,id }) => <div style={{ textAlign: "center", display: "inline-block", width: "220px", height: "50px" }} className="form-inline">
    <i className={className} style={{ fontSize: 18, float: "left" }}></i>
    <input className="form-control"
        id={id|| ""} 
        name={id|| ""}
        type={type} style={{ height: 35, width: 180 }} value={value}
        onChange={e => onChange(e.target.value)} placeholder={placeholder} />
</div>;

export default InputForm;