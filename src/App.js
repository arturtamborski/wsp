import './App.css';

import Button from '@material-ui/core/Button';
import { couldStartTrivia } from 'typescript';
import globalVar from './globalVar';

export default function App() {
  const getUser = () => {
    console.log("test");

    fetch(globalVar.apiUrl + "/users?id=1", {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>

      <Button variant="contained" color="secondary" onClick={() => getUser()}>
        Get user with id = 1
      </Button>
    </div>
  );
}