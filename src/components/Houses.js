import React from 'react';
import { IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';

const root = {
    marginBottom: 20,
    boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)'
  };

function Houses(props) {
 
        return (
            <IonCol size-sm="12" size-md="6" size="12">
                <IonCard style={{margin:'0px'}} style={root} >
                <img src="https://images.adsttc.com/media/images/5efe/1f7f/b357/6540/5400/01d7/newsletter/archdaily-houses-104.jpg?1593712501" ></img>
                <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
                </IonCardHeader>

                 <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                </IonCardContent>
                </IonCard>
                </IonCol>
        )
    
}

export default Houses
