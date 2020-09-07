import React from 'react';
import logo from './logo.svg';
import './App.css';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

function App() {
  return (
    <div >
          <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
