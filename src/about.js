import React from "react";
import{ View, Text, Image,StyleSheet, Button} from 'react-native';

const About = ({navigation}) =>{
    return(
        <View style ={styles.aboutContainer}>
            <Text style={ styles.mainHeader}> Kadir GOK </Text>
            <Text style={styles.paraStyle}>QA Test Engineer</Text>
            
           <View> 
            <Image
                style={styles.imgStyle}
                source={require('./assets/kadirpic.jpg')}
             />
             <Text style={styles.paraStyle}>...ve aciz bir kul</Text>
            </View>
        <View style={styles.aboutContainer}>             
            <Text style={styles.aboutSubHeader}> My Dua uygulamasina hosgeldiniz, kendi okuma ihtiyaclarim icin hazirladigim bu uygulama,
            umarim sizlerin de dua ve kitap okuma ihtiyacinizi buyuk oranda karsilayacaktir.
             Dostlariniza tavsiye etmeyi ve dua etmeyi unutmayin.Tesekkur ederim.           
            </Text>
            <Text style={styles.paraStyle}>Program Aciklamasi : </Text>
            <Text style={styles.paraStyle}> 
             Bu uygulamada bir cok dua ve kitap linklerine ulasma imkani vardir. Kur'an cvesen ve gibi  surekli okunan kitaplara kaldiginiz yerden sonra baska bir cihaz dan da olsa devam etme imkani vardir.
             Bu site cihaziniza sadece linkjleri yukler . sizden herhangi bir kayit vs istemedigi gibi (hatimli okuma yapmak  haric) kimlik bilgilerinizi de kayit etmez.
             bu  uygulamada okuyabileceginiz kitap video vs size ayrica bir yerden alinarak getirilmiyor. zaten yayinlanmakta olan yerine sizi goturuyor. Bu bakimdan kimsenin hakkina girilmiyor . 
             yani bir prf klitap web de bir yerde zaten yayinlanmakta iken biz oraya ulasip onu okuyoruz.
              ona zara vermek bir yana onun web sitesine trafik saglamis oluyoruz. Yine de kusurumuz var ise Rabbim affetsin. Niyetimiz halisdir. dualarinizla...</Text>
            <Text style={styles.aboutSubHeader}>For more details and 
             Special thanks to: https://www.ozgurherkul.org/, https://kuran.diyanet.gov.tr/, https://www.onlinedua.org/</Text>
        
    <View style={styles.overlayContainer}> 
         <View style={styles.menuContainer}>
         <Image         
           source={require('./assets/inst1.png')}          
         resizeMode="contain"
          style={styles.image}
          Link href="https://www.instagram.com/akasema1/"
        /> 
        <Image         
           source={require('./assets/faceb.jpg')}
         resizeMode="contain"
          style={styles.image}
          Link href="https://www.facebook.com/kadir.gok.583"
        />
        <Image         
           source={require('./assets/tweet1.png')}
         resizeMode="contain"
          style={styles.image}
          Link href="https://twitter.com/akasema"
        />
        </View></View>
        </View>
        <Button 
        title=" Ana Sayfa"
        onPress={()=> navigation.navigate("Landing")}
        />
        </View>
    );
};
const styles = StyleSheet.create({
aboutContainer:{
    display:"flex",
    alignItems:"center",
},
imgStyle:{
    width:200,
    height:150,
    borderRadius:150,
    alignItems:"center",
},
mainHeader:{
    fontSize:20,
    backgroundColor:'rgba(1,150,230, .5)',
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:20,
    fontFamily:"JosefinSans_700Bold",
   
},
paraStyle:{
    fonstSize:30,
    color:"#344055",
    fontWeight:"500",    
    padding:15,
},
aboutSubHeader:{
    fontsize:30,
    color:"blue",
    fontWeight:"500",
    margineVertical:15,
    fontFamily:"JosefinSans_700Bold",
    alignSelf:"center",
    padding:15,
    }, 
 menuContainer:{
        paddingTop:10, 
        padding:5,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'space-around',       
       },
overlayContainer:{
        flex:1,
        backgroundColor:'rgba(1,150,230, .5)'
        },
image:{
        height:50,
        width:70,
        opacity:0.9,
        alignContent:'center',
        padding:5,
        
       }

});
export default About;