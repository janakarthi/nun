import React from 'react';
import  "./App.css";


class App extends React.Component {
  render() {
    return (
     <div className="main">
       <div className="main-left">
         <div className="main-left-wrapper">
           <h2 className="main-intro">HELLO, THIS IS WEB & MOBILE STUDIO</h2>
           <h2 className="main-name">CLEAN DESIGN AND EASY TO CUSTOMIZE</h2>
           <div className="main-title">
             <div className="main-title-wrapper">
               <div className="main-title-item">Web Developer</div>
               <div className="main-title-item">UI/UX Developer</div>
               <div className="main-title-item">Content Creator</div>
             </div>
           </div>
           {/* <div className="main-title-content">
             We are design and develop services for customer of all sizes, 
             specilizing in creating stylish, modern responsive websites, 
             web services and online stores
           </div> */}
         </div>
       </div>
       <div className="main-right">
        <div className="main-draw"></div>
  
        <div className="main-right-content">
             We are design and develop services for customer of all sizes, 
             specilizing in creating stylish, modern responsive websites, 
             web services and online stores
           </div>
         

       </div>
     </div>

    
      

     
    )
  }
}
export default App;