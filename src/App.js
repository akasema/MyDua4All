import React from "react";
import { Button, Image, StyleSheet,Text, View } from "react-native";
 
import './styles.css';

 

export default class App extends React.Component {
    
  render (){
 
  return (   

    <View style={styles.overlayContainer}>
 
    <View style={styles.topContainer}>
    <Image         
          source={require('./assets/info.png')}
          resizeMode="contain"
          style={styles.limage}
          Link href="https://drive.google.com/file/d/1pMnbGQ3UKuFabwq1CNZ6LHyoveZH3KiH/view?usp=share_link"
        />
    <Image         
          source={require('./assets/kuranradyo.png')}
          resizeMode="center"
          style={styles.image}
          Link href="https://tevhidmeali.com/kurandinle"
        />
       <Image         
          source={require('./assets/icon.jpg')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>My Dua App</Text>
        <Image         
          source={require('./assets/icon.jpg')}
          resizeMode="contain"
          style={styles.image}
        />
        <Image         
          source={require('./assets/radyocihan.jpg')}
          resizeMode="contain"
          style={styles.image}
          Link href="https://cihanradyo.com/"
        />     </View>   
         
      <Text style={styles.text}> 
        You can find many dua's that you need daily, Read Qur'an, dua's, prays and many Books with this app{" : "}
        Bu applikasyon ile kur'an okuyabilir ve bircok dua ve kitaba ulasabilirsiniz {" "}
         </Text>
         <Button onPress={() => { }} title="KUR'AN BOLUMU"
       />    
         <Text style={styles.text}
         >Bu bolumde cok okunan surelere dogrudan kisa yol ile ulasabilirsiniz. Hatim okumak istediginizde de Kur'an-i Kerim in tamamini bu bolumde bulabilirsiniz
         siteye emailiniz ile kayit olur iseniz baska zaman ve baska cihazlardan girdiginizde kaldiginiz yerden devam edebilirsiniz ve arkadaslariniz ile hatim gurubu olusturup takip edebilirsiniz. Allah kabul etsin 
         </Text>
    <View style={styles.overlayContainer}> 
      <View style={styles.menuContainer}>
      <Image         
          source={require('./assets/yasin.jpg')}
         resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/buyuk-cevsen/6"
        /> 
       <Image         
          source={require('./assets/fetih.jpg')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/buyuk-cevsen/20"
        /> 
      <Image         
          source={require('./assets/kuran.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/kuran"
        />      
      <Image         
          source={require('./assets/naba.jpg')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/buyuk-cevsen/48"
        /> 
      <Image         
          source={require('./assets/mulk.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/buyuk-cevsen/42"
        />      
      <Image         
          source={require('./assets/shorts.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/kuran/sayfa/596"
        /> 
     <Image         
          source={require('./assets/hasr.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/buyuk-cevsen/40"
        />       
      <Image         
          source={require('./assets/rahman.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/buyuk-cevsen/32"
        /> 
     <Image         
          source={require('./assets/kuran.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/kuran"
        /> 
          </View>    
     <Button onPress={() => {}} title="DUA BOLUMU"
      Link href="https://hizmetsource.com/" />      
    </View>
    </View>

    
  );
}
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    height:'100%',     
   },
   image:{
    height:70,
    width:50,
    opacity:0.9,
    alignContent:'center',
    padding:5,
    
   },
   limage:{
    height:40,
    width:30,
    opacity:0.9,
    alignContent:'center',
    padding:10,
    
   },
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {   
    fontSize: "1.5em",
    marginVertical: "1em",
    textAlign: "center",
    backgroundColor: '#64DDBB',
    padding:5,
    
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",      
  },
  text: {
    lineHeight: "1.2em",
    fontSize: "0.9rem",
    margin : "0.3em",
    textAlign: "center",  
    backgroundColor: '##83D6DE',  
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  timage:{
    height:100,
    width:95,
    opacity:0.8,
    alignContent:'center',
    borderColor:'orange',
    borderWidth:3,
   
   },
   menuContainer:{
    paddingTop:20, 
    padding:5,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',       
   },
   overlayContainer:{
    flex:1,
    backgroundColor:'rgba(47,163,218, .4)'
   },
   topContainer:{
     height:'10%', 
    alignItems: 'center',
    justifyContent: 'center',   
    flexDirection:'row',
    flexWrap: 'wrap',   
    backgroundColor:'#fafbfc'
   }
});

 



