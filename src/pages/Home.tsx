import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const makeRequest = async () => {
    const res = await fetch("http://10.0.0.11:3000");
    if (res.status === 200) {
      const data = await res.json();
      console.log("SUCCESS", data);
    } else {
      console.log("ERROR", res.body);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Capacitor HTTP</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Capacitor HTTP</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => makeRequest()} color="primary" type="button">
          Make Request
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
