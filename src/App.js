import '@aws-amplify/ui-react/styles.css';
import awsExports from './Components/CognitoConfiguration';
import Uploader from './Components/Uploader';

Amplify.configure(awsExports);

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

