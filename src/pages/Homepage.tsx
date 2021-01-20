import React,{useState} from 'react';
import { useHistory } from 'react-router-dom'
import { moon } from 'ionicons/icons';
import { IonContent, IonInput, IonPage, IonItem, IonLabel,IonButton } from '@ionic/react';
import './Homepage.css';

const Homepage: React.FC = () => {
  const history = useHistory()
  const [text, setText] = useState('');

  return (
    <IonPage>
      <IonContent>
      <h1 className='header'><b>Welcome Astro</b></h1>
        <img className='imgehome' src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt='' width='300' height='300'/>
        <IonContent>
        <h3 className='header'><b>Welcome back to home!</b></h3>
        <p className='text'>Sorry, theres nothing heree....! this app is on <b>development</b> proccess</p>
        <IonButton 
            className='buttonx'
            shape="round" 
            fill="outline" 
            color="tertiary"
            onClick={(e) => {
            e.preventDefault();
            history.push('/login')}}>
              Sign Out Account
        </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
