import React, { useState } from 'react';
import ProgressBar from './ProgressBar';



// TODO: add a new controlled component for providing text to use
// as photo description/ alt text.
const UploadForm = () => {
    
    //equivalent to setting state to '' in class based component
    const [file, setFile] = useState(null);
    // const [description, setDescription] = useState(null);
    const [error, setError] = useState(null);


    const handleChange = event => {
    
        // reference to the selected file,
        // and a list of allowable image types
        const selected = event.target.files[0]
        const types = ['image/png','image/jpeg'] 


        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
            // if (event.target.type === 'textarea') {
            //     console.log("we got a description")
            // }
        } else {
            setFile(null);
            setError('Enter a valid photo type : jpg or png')
        }


    }

    
        return (
            <form>
                <label>
                    <span>+</span>
                    <input onChange={handleChange} type="file"/>

                    {/* <div className="description">
                        <label className="inner-label">Description of the uploaded file</label>
                        <textarea cols="30" rows="10"
                        onChange={handleChange}
                        ></textarea>
                    </div> */}
                    
                </label>
                
                <div className="output">
                    { error && <div className="error" >{ error }</div>}
                    { file  && <ProgressBar file={file} setFile={setFile}/>}
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