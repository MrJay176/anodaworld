import React, { Component , useState , setState } from 'react';
import './admin.css';


const Admin = () => {

     const[url , setUrl]= useState("");

    const imageHandler = (e) => {
    
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setUrl(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }


    return (
        <div className="wrapper">

            <div className="container-two">
                <h1 className="heading">
                    Add Your Image
                </h1>

                <div className="price" style={{display:"flex", alignItems:"center", justifyContent:"center" , flexFlow:"column"}}>
                <div className="label">
                        <label htmlFor="text-input">
                           Type Your Price
                        </label>
                    </div>
                    <input type="text" name="image-upload" id="text-input"/>
                </div>

                <div className="Name" style={{display:"flex", alignItems:"center", justifyContent:"center" , flexFlow:"column"}}>
                <div className="label">
                        <label htmlFor="text-input">
                           Name Of Product
                        </label>
                    </div>
                    <input type="text" name="image-upload" id="text-input"/>
                </div>

                <div className="img-holder">
                    <img src={url} alt="" id="img" className="img" />
                </div>

                <input type="file" name="image-upload" id="input" accept="image/*" onChange={imageHandler} />

                <div className="label">
                    <label htmlFor="input" className="image-upload">
                        Choose your photo
                    </label>
                </div>

            </div>


            <div className="drop_down">

            </div>
        </div>
    )
}

export default Admin



// export class admin extends Component {
//     state = {
//         profileImg: ''

//     }

  
//     render() {
//         const { profileImg } = this.state;

      

//     }
// }

// export default admin
