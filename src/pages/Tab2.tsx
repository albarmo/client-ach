import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import { moon } from 'ionicons/icons';
import { IonContent, IonInput, IonPage, IonItem, IonLabel,IonButton,IonIcon } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  // access token useSelector
  // dummy >>
  const [access_token, setAccesToken] = useState('')

  const login = () => {
    console.log(email, password, access_token)
    // dispatch login get access token
    fetch(`http://localhost:5000/user/login`,{
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then(data => {
      console.log(data.access_token, '<<< data register')
      setAccesToken(data.access_token)
      })
    .catch(error => {
          console.log(error, '<<< error while register')
    }) 
    // checking access token
    if(access_token){
      console.log('redirected to homepage', access_token);
      history.push('/homepage')
    }else {
      console.log('no access token');
    }
  }


  return (
    <IonPage>
      <IonContent>
        {/* <p>Email : {email}</p>
        <p>Password : {password}</p> */}
        <h1 className='header'><b>Astro</b><IonIcon icon={moon}/></h1>
        <IonContent className='input'>
      </IonContent>
      <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput 
            inputmode='email' 
            maxlength={50} 
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            ></IonInput>
      </IonItem>
      <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput 
            value={password} 
            type='password'
            onIonChange={(e) => setPassword(e.detail.value!)}
            ></IonInput>
      </IonItem>
      <br></br>
        <IonButton 
            className='btn-login'
            shape="round" 
            fill="solid" 
            color="tertiary"
            onClick={login}>Sign In
        </IonButton>
        
      </IonContent>
        <p className='text'>
            Dont have an account?..
            <b 
            onClick={(e) => {
            e.preventDefault();
            history.push('/register')}}>
            Register
            </b>
        </p>
    </IonPage>
  );
};

export default Tab2;
