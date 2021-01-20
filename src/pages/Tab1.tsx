import React from 'react';
import { useHistory } from 'react-router-dom'
import { IonSlides, IonSlide, IonContent, IonButton, IonPage } from '@ionic/react';
import './Tab1.css';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};


const Slider: React.FC = ({}) => {
  const history = useHistory()
  return (
    <IonPage>
      <IonContent fullscreen >
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
            <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt='' width='100' height='120'/>
            <h1><b>Welcome Astro</b></h1>
            <p>The Astro is a mobile chat apps. Astro is a universal chat application, we connect you to everyone, increasing your connection to the outside world.</p>
        </IonSlide>
        <IonSlide>
        <img src="https://images.vexels.com/media/users/3/152641/isolated/preview/2b3d63661f0d7fe62c36168604985f26-space-cosmonaut-cartoon-by-vexels.png" alt='' width='100' height='120'/>
            <h1>What we do?</h1>
            <p>The Astro is a mobile chat apps. Astro is a universal chat application, we connect you to everyone, increasing your connection to the outside world.</p>
        </IonSlide>
        <IonSlide>
        <img src="https://images.vexels.com/media/users/3/203409/isolated/preview/255fa1a5339446d19ef7068cfe170c7b-space-rocket-illustration-rocket-by-vexels.png" alt='' width='100' height='120'/>
            <h1>Get started to the Astro</h1>
            <p>let's fly to the sky, and discover new experiences</p>
            <br></br>
            <IonButton 
            shape="round" 
            fill="outline" 
            color="tertiary"
            onClick={(e) => {
            e.preventDefault();
            history.push('/login')}}>Sign In</IonButton>
        </IonSlide>
    </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Slider;
