import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';


const Uploader = () => {

    //const axios = require("axios").default;
    const API_ENDPOINT = "https://3s5er1ux98.execute-api.eu-west-3.amazonaws.com/thibaut_test-presigned-url";
    const handleChangeStatus = ({ meta, remove }, status) => {
      console.log(status, meta);
    };

    const handleSubmit = async (files) => {
        const f = files[0];
        console.log(f);

        const response = await axios.get('https://3s5er1ux98.execute-api.eu-west-3.amazonaws.com/thibaut_test-presigned-url');
          
          // const response = await axios({
          //   method: 'GET',
          //   url: API_ENDPOINT
          // })
        console.log("Response", response);

        const result = await fetch(response.data.uploadURL, {
          method: 'PUT',
          headers:{
            "Content-Type": "image/jpeg"
          },
          body: f[files]
        })
        console.log('Result: ', result)
    };
    
  
    return (
        <Dropzone
        //   getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          maxFiles={3}
          multiple={false}
          canCancel={false}
          inputContent="Deposer votre document"
          styles={{
            dropzone: { width: 400, height: 200 },
            dropzoneActive: { borderColor: 'green' },
          }}
        />
    )
  }
  
  <Uploader />

export default Uploader