import { useState } from "react"


export default function App(){
     return (
          <MyChatApp/>
     );
}

function MyChatApp(){
     const parent="container-fluid"
     const header="row bg-secondary text-light"
     const headStyle="d-flex align-items-center p-3"
     const inputField="row mt-2"
     const chatStyle1="alert alert-secondary border-secondary text-dark"
     const chatStyle2="text-end alert-secondary border-secondary text-dark"
     const StudentName="Achint Bhatia"
     const StudentId="210940520002"

     const[list,setList]=useState([])
     const[text,setText]=useState('')

     const getText=(e)=>{
          let newText=e.target.value;
          setText(newText);
     };

     const sendMsg=()=>{
          if(text !== "")
          {
               let newList =[...list,text];
               setList(newList);
          }
     };

     return (
          <div className={parent}>
              <div className={header}>
                   <div className={headStyle}>
                        <h2>MyChatApp</h2>
                        <h6 className="m-0 ms-2">by {StudentName}/{StudentId}</h6>
                   </div>
              </div>
             <div className={inputField}>
               <div>
                    <input className="w-75 p-4" style={{"border-radius":"10px"}} type="text"
                        placeholder="Let's chat here...."
                        onChange={getText} />

                     <input className="p-4 ms-2"
                            style={{"border-radius":"10px",width:"130px"}}
                            type="button"
                            value="SEND"
                            onClick={sendMsg} />    
               </div>        
            </div> 

            {list.map((item,index)=>{
                 if(index%2===0){
                      return (
                           <div key={index} className={chatStyle1}>
                                {item}
                            </div>    
                      );
                 }
                 else{
                      return (
                           <div key={index} className={chatStyle2}>
                                {item}
                            </div>    
                      );
                 }
            })}
          </div>
     )

}
