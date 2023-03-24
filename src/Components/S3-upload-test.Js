// const S3_BUCKET ='thibaut-aws-learning';
// const REGION ='eu-west-3';

// const config = {
//   bucketName: S3_BUCKET,
//   region : REGION,
// }

// const UploadImageToS3WithReactS3 = () => {
   
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileInput = (e) => {
//     setSelectedFile(e.target.files[0]);
//   }

//   const handleUpload = async (file) => {
//     uploadFile(file, config)
//         .then(data => console.log(data))
//         .catch(err => console.error(err))
//   }

//   return <div>
//         <div>React S3 File Upload</div>
//         <input type="file" onChange={handleFileInput}/>
//         <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
//     </div>
// }

// export default UploadImageToS3WithReactS3;