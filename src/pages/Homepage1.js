import React, { Component, useState, useEffect } from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';

//Components
import Houses from '../components/Houses.js'

function Homepage() {
  const [posts, setPosts] = useState([
    {
    title:'FIrst House',
    location:'Aurandalpet, Guntur',
    sqft:3200,
    bedrooms:2,
    price: '10,000',
    imageUrl:"https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA="
    },
    {
      title:'Second House',
      location:'Nallacheruvu, Guntur',
      sqft:5000,
      bedrooms:4,
      price: '20,000',
      imageUrl:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      title:'Third House',
      location:'Amaravathi road, Guntur',
      sqft:2500,
      bedrooms:3,
      price: '8,000',
      imageUrl:"https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__340.jpg"
    },
    {
      title:'Fourth House',
      location:'Madhapur, HYD',
      sqft:6000,
      bedrooms:3,
      price: '17,000',
      imageUrl:"https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
    }
])


        return (
            <IonContent>
                <br></br>
                <br></br>
                <br></br>
            <IonGrid>
        
              <IonRow>
                {
        posts.map((post,id) => {
          // console.log(id);
           return <Houses key={id} title={post.title} location={post.location} sqft={post.sqft} bedrooms={post.bedrooms} imageUrl={post.imageUrl} price={post.price}></Houses>
        })
        }
              </IonRow>
        
            </IonGrid>
          </IonContent>
        )

}

export default Homepage;
