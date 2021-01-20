import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import { IonContent, IonInput, IonPage, IonItem, IonLabel,IonButton,IonToast } from '@ionic/react';
import './Tab3.css';
import { body } from 'ionicons/icons';

const Tab3: React.FC = () => {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [showToast1, setShowToast1] = useState(false);


  const register = () => {
    // checking password
    if (password === password2){
      console.log('correct password')
      console.log(email, password);
      // fetch register user
      fetch(`http://localhost:5000/user/register`, {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((resp) => resp.json())
      .then(data => {
        console.log(data, "<<< data fetch register")
        history.push('/login')
      })
      .catch(error => {
        console.log(error, '<<< error while register')
      })
    }else {
      setShowToast1(true)
    }
  }

  return (
    <IonPage>
    <IonContent>
      <h1 className='header'><b>Register</b></h1>
      {/* <p>Email {email}</p>
      <p>Password 1 {password}</p>
      <p>Password 2 {password2}</p> */}
      <IonContent className='input'>
    </IonContent>
    <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput 
            inputmode='email'
            maxlength={30} 
            value={email}
            pattern="email"
            type='email'
            onIonChange={(e) => setEmail(e.detail.value!)}
           >
           </IonInput>
    </IonItem>
    <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput 
          value={password} 
          maxlength={30}
          type='password'
          onIonChange={(e) => setPassword1(e.detail.value!)}
          >
          </IonInput>
    </IonItem>
    <IonItem>
          <IonLabel position="stacked">Retype Password</IonLabel>
          <IonInput 
          value={password2} 
          maxlength={30} 
          type='password'
          onIonChange={(e) => setPassword2(e.detail.value!)}
          ></IonInput>
    </IonItem>
    <br></br>

      <IonButton 
          className='btn-login'
          shape="round" 
          fill="solid" 
          color="tertiary"
          onClick={register}>Register
      </IonButton>

    </IonContent>
      <p className='text'>
          Have an account?..
          <b 
          onClick={(e) => {
          e.preventDefault();
          history.push('/login')}}>
          Sign In
          </b>
      </p>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Retype Password Correctly!"
        duration={200}
      />
  </IonPage>
  );
};

export default Tab3;
