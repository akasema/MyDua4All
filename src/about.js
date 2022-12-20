import React from "react";
import{ View, Text, Image,StyleSheet} from 'react-native';

const About = () =>{
    return(
        <View style ={styles.aboutContainer}>
            <Text style={ styles.mainHeader}> Kadir GOK </Text>
            <Text style={styles.paraStyle}>Mobile QA Tester</Text>
           <View> 
            <Image
                style={styles.imgStyle}
                source={require('./assets/kadirpic.jpg')}
             />
            </View>
        <View style={styles.aboutLayout}>
             <Text style={styles.aboutSubHeader}> About me </Text>
            <Text style={styles.paraStyle}>
My Dua uygulamasina hosgeldiniz, kendi okuma ihtiyaclarim icin hazirladigim bu uygulama, umarim sizlerin de dua ve kitap okuma ihtiyacinizi buyuk oranda karsilayacaktir. Dostlariniza tavsiye etmeyi ve dua etmeyi unutmayin.Tesekkur ederim For more details and Special thanks to: https://www.ozgurherkul.org/, https://kuran.diyanet.gov.tr/, https://www.onlinedua.org/
</Text>
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
aboutContainer:{
    display:"flex",
    alignItems:"center",
},
imgStyle:{
    width:150,
    height:150,
    borderRadius:100,
},
mainHeader:{
    fontSize:18,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:50,
    marginBottom:10,
    fontFamily:"JosefinSans_700Bold",
   
},
paraStyle:{
    fonstSize:18,
    color:"#7d7d7d",
    paddingBottom:30,
},
aboutSubHeader:{
    fontsize:18,
    color:"#fff",
    textTransform:"uppercase",
    fontWeight:"500",
    margineVertical:15,
    fontFamily:"JosefinSans_700Bold",
    alignSelf:"center",
},

});
export default About;