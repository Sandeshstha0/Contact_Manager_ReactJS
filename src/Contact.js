const Contact=(props)=>{
    return<>
    
    <div className="contact1">
      {props.data.name}
      <br/>
     {props.data.number}
      <br/>
    {props.data.location}
      <br/>
     
     </div></>;
};
export default Contact;