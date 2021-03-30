import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
// import ProgressBar from './ProgressBar';


const UploadForm = () => {
    
    //equivalent to setting state to '' in class based component
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    // types of files we will allow
   


    const handleSubmit = event => {
        event.preventDefault();
        //do validation

    }

    const handleChange = event => {
    
        const selected = event.target.files[0]
    
        console.log(selected.type);

        const types = ['image/png','image/jpeg'] 


        //not sure why this conditional isnt working?
        if (selected && types.includes(selected.type)) {
            console.log("got this far!")
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Enter a valid photo type : jpg or png')
        }


    }

    
        return (
            <form onSubmit={handleSubmit}>
                <input
                    name=""
                    onChange={handleChange} 
                    type="file"/>
                <button type="submit">Submit</button>
                <div className="output">
                    { error && <div className="error" >{ error }</div>}
                    { file && <div className="file" >{ file }</div>}
                    { file  && <ProgressBar file={file}/>}
                </div>
            </form>
          );
} 
export default UploadForm;

// export default class UploadForm extends Component {
//     constructor(props) {
//       super(props);
//       this.setState({
//         file : '',
//         error : '',
//         setFile : '',
//         setError : ''          
//       })
//       this.fileInput = React.createRef();  }
    
        
    
//       handleSubmit = (event) => {
        

//         event.preventDefault();
        

//       }

        

//         handleChange = () => {
    
//             const selected = this.fileInput.current.files[0]
    
//             const types = ['image/png','image/jpg'] 
    
//             if (selected && types.includes(selected.type)) {
                
//                 this.setState({
//                     setFile : selected,
//                     setError : ''
//                 })
//             } else {
//                 this.setState({
//                     setFile : null,
//                     setError : 'Please use an accepted photo type: png or jpeg please'
//                 })
//             }
//         }
  
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Upload file:
//                     <input type="file" ref={this.fileInput} onChange={this.handleChange} />        
//                 </label>
//                 <div className="output">
//                     { this.state.error && <div className="error">{ this.state.error }</div> }
//                     { this.state.file && <div>{ this.file.name }</div> }                
//                     { this.state.file && <ProgressBar / > }
//                 </div>

//             <br />
//             <button type="submit">Submit</button>
//             </form>
//         );
//     }
// }