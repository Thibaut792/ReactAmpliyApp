import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

const Uploader = () => {

    //const axios = require("axios").default;
    const handleChangeStatus = ({ meta, files  }, status) => {
      console.log(status, meta);
    };
    
    const handleSubmit = async (files) => {
        const f = files[0];
        console.log(f);

        const response = await axios.get('https://3s5er1ux98.execute-api.eu-west-3.amazonaws.com/thibaut_test-presigned-url')
        console.log("Response", response);
       
        const result = await fetch(response.data.uploadURL, {
          method: 'PUT',
          headers:{
            "Content-Type": "files/pdf"
          },
          body: f["file"]
        })
        console.log('Result: ', result)        
    };
    // const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
    //   return (
    //     <div>
    //       {previews}
    //       <div {...dropzoneProps}>
    //         {files.length < maxFiles && input}
    //       </div>​
    //       {files.length > 0 && submitButton}
    //     </div>
    //   )
    // }
    return  (
        <Dropzone
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          maxFiles={2}
          maxSizeBytes={26214400}
          // LayoutComponent={Layout}
          multiple={false}
          canCancel={true}
          accept="image/*"
          inputContent={(files, extra) => (extra.reject ? 'Seul les images sont autorisées' : 'Déposer vos documents' )}  
          styles={{
            dropzone: { width: 400, height: 200 },
            dropzoneActive: { borderColor: 'green' },
            dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
            inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
          }}
        />
    )
   
  }
  
  <Uploader />

export default Uploader