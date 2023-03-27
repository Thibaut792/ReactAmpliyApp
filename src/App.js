import { Amplify } from 'aws-amplify';
import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './Components/CognitoConfiguration';
import Uploader from './Components/Uploader';

Amplify.configure(awsExports);

// const cors = require('cors');
// App.use(cors({ origin: true }));
// export default function App() {
//   return (
//     <Authenticator>
//       {({ signOut, user }) => {
//         return(
//         <main>
//           <h1>Bienvenue sur amplify {user.username}</h1>
//           <button onClick={signOut}>Se déconnecter</button>
//         </main>
//       )}}
//     </Authenticator>
//   );
// }

function App(){

  return(
    <div className="App">
      <meta charSet="utf-8"/>
      <h1>Upload Document to amazon S3</h1>
      <Uploader />
    </div>
  )
}

export default App;