import React from 'react';
import { Image, View } from 'react-native';
import {  Card,CardItem,Form,Picker,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';
import UserDetails from './UserDetails';
//import { UserDetails } from '';
const Item = Picker.Item;
const TwitterCard = () => {

    return (   
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('./dd.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>
                 <UserDetails
                   titleText="The Avengers "
                   bodyText="The cast of avenger:#infinitywar"
                   twitterName='@Avengers'
                   lastSeenTime='21Nov'/>
                <Icon name='arrow-dropdown'/>
          </Body>
          
             </Left>
             
             
             
           </CardItem>
           <CardItem cardBody>
 
                {/* <Image source={{uri: ''}}/> */}
                <Image source={require('./www.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
              
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="text" />
                 <Text style={ styles.buttonTextStyle }>298</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="git-compare" />
                <Text style={ styles.buttonTextStyle } >7,215</Text>
              </Button>

               <Button small iconLeft transparent>
                 <Icon name="heart" />
                 <Text style={ styles.buttonTextStyle }>18.9k</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="mail" />
                 </Button>


           </CardItem>
         </Card>
       
     );
   };

     const styles = {
          buttonTextStyle: {
            paddingLeft: 5,
            color: '#000'
          }

     };

export { TwitterCard };