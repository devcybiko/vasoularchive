import React from "react";
// import "./style.css";

export function Label(props) {
  const styles = {
    textAlign: 'left',
    color: '#410000',
    fontSize: '20px',
    fontWeight: 'bolder'
  }
  return (
    <p style={styles}>{props.children}</p>
  );
}

export function ImageUpload(props) {
  return (
    <div className="form-group">
      <input type="file" className="form-control-file" id="imageUpload" {...props} />
    </div>
  )
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}