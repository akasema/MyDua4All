import React from "react";
import { Button, Image, StyleSheet,Text, View } from "react-native";



export default class App extends React.Component {
    
  render (){
 
  return (   

    <View style={styles.overlayContainer}>
    <View style={styles.topContainer}>
    <Image         
          source={require('./assets/info.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1pMnbGQ3UKuFabwq1CNZ6LHyoveZH3KiH/view?usp=share_link"
        />
    <Image         
          source={require('./assets/kuranradyo.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://tevhidmeali.com/kurandinle"
        />
       <Image         
          source={require('./assets/mydua.png')}
          resizeMode="contain"
          style={styles.timage}
        />
        <Text style={styles.title}>Wellcome to My Dua App Hosgeldiniz</Text>
        <Image         
          source={require('./assets/mydua.png')}
          resizeMode="contain"
          style={styles.timage}
        />
        <Image         
          source={require('./assets/radyocihank.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://cihanradyo.com/"
        />         
      <Text >
        You can find many dua's that you need daily, Read Qur'an, dua's, prays and many Books with this app{" : "}
        Bu applikasyon ile kur'an okuyabilir ve bircok dua ve kitaba ulasabilirsiniz {" "}
         </Text>
    </View>       
   
    <View style={styles.overlayContainer}> 
      <View style={styles.menuContainer}>
      <Image         
          source={require('./assets/yasin.jpg')}
         resizeMode="contain"
          style={styles.timage}
          Link href="https://kuran.diyanet.gov.tr/mushaf/kuran-1/yasin-suresi-36/ayet-1/kuran-yolu-meali-5"
        /> 
       <Image         
          source={require('./assets/fetih.jpg')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://kuran.diyanet.gov.tr/mushaf/kuran-1/fetih-suresi-48/ayet-1/kuran-yolu-meali-5"
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
          Link href="https://cihanradyo.com/"
        /> 
      <Image         
          source={require('./assets/mulk.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://cihanradyo.com/"
        />      
      <Image         
          source={require('./assets/shorts.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://cihanradyo.com/"
        /> 
     <Image         
          source={require('./assets/hasr.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://cihanradyo.com/"
        />       
      <Image         
          source={require('./assets/rahman.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://cihanradyo.com/"
        /> 
     <Image         
          source={require('./assets/kuran.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://cihanradyo.com/"
        /> 
      
      </View>    
      <Button onPress={() => {}} title="Deneme button"
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
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
    
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
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
   
   },
   menuContainer:{
    paddingTop:190, 
    padding:15,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',       
   },
   overlayContainer:{
    flex:1,
    backgroundColor:'rgba(47,163,218, .4)'
   },
   topContainer:{
    paddingTop:30,
    height:'12%', 
    padding:10,
    flexDirection:'row',
    flexWrap: 'wrap',
    borderBottomWidth:2,
    borderBottomColor:'#ddd',
    backgroundColor:'#fafbfc'
   }
});

 

