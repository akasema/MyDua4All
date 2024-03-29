import React from "react";
import { Button, Image, StyleSheet,Text, View} from "react-native";
import './styles.css';

 
export default function LandingScreen ({navigation}) {    
   
 return (        

<div> 

  <View style={styles.overlayContainer}>
 
    <View style={styles.topContainer}>
   
    <Image         
          source={require('./assets/icon.jpg')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>MyDua </Text>
        
    <Image         
          source={require('./assets/kuranradyo1.png')}
          resizeMode="center"
          style={styles.kimage}
          Link href="https://tevhidmeali.com/kurandinle"
        />
              
        <Image         
          source={require('./assets/radyocihan.jpg')}
          resizeMode="contain"
          style={styles.image}
          Link href="https://cihanradyo.com/"
        />   
         <Image         
          source={require('./assets/tr724.jpg')}
          resizeMode="contain"
          style={styles.image}
          Link href="https://www.youtube.com/@Tr724"
        /> 
        
        <Button 
        title="About Us"
        onPress={()=> navigation.navigate("About")}
        />
               
      </View>   
         
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
          source={require('./assets/vakia.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://onlinedua.org/kuran/sayfa/534"
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
          source={require('./assets/kurany.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://kuran.gen.tr/"
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
        <Text style={styles.text}
         >Bu bolumde cok okunan dualara dogrudan kisa yol ile ulasabilirsiniz. Bazi buyuk dua macmualarini da burda bulup link ile detaylarini gorebilirsiniz  
         siteye emailiniz ile kayit olur iseniz baska zaman ve baska cihazlardan girdiginizde kaldiginiz yerden devam edebilirsiniz ve arkadaslariniz ile hatim gurubu olusturup takip edebilirsiniz. Allah kabul etsin 
         </Text>  
    </View>
    <View style={styles.overlayContainer}> 
      <View style={styles.menuContainer}>
      
       <Image         
          source={require('./assets/kulubuddaria.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.onlinedua.org/ekd"
        /> 
      <Image         
           source={require('./assets/duamec.jpg')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://archive.org/details/mealli-dua-mecmuasi"
        />      
      <Image         
           source={require('./assets/evradik.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.onlinedua.org/evradi-kudsiyye"
        /> 
      <Image         
         source={require('./assets/kasideburde.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://archive.org/details/Kaside-iBurdemamiBusiriHz"
        />      
      <Image         
             source={require('./assets/ismiazam.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.onlinedua.org/buyuk-cevsen/254"
        /> 
     <Image         
         source={require('./assets/nasrvegalebe.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1eBA8cQL_9gmzDviivH8zNhknhg_V0Pen/view?usp=sharing"
        />       
      <Image         
           source={require('./assets/tahmidiye.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="http://www.ortakhatim.com/cevsen/164_165.htm"
        /> 
     <Image         
           source={require('./assets/tevhidname.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/17ZOvmBNCAiXgM8eH8JZ9d-FGBaz9NApr/view?usp=sharing"
        /> 
          <Image         
           source={require('./assets/sekineduasi.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="http://www.ortakhatim.com/cevsen/120_121.htm"
        /> 
     <Image         
          source={require('./assets/tesbihat.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1npWCB9e_SVfKSnPXxTjZaMNaK10kvACX/view?usp=sharing"
        /> 
           <Image         
          source={require('./assets/ashabibedr.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.herkul.org/ortak-dua/ortak-dua-20-ashab-i-bedrin-isimleri/"
        />      
      <Image         
            source={require('./assets/kisakulub.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1gGZb00UrpQNGbUSZMeAYuVQJGoGT7ks5/view?usp=share_link"
        /> 
      <Image         
         source={require('./assets/cunnetulesma.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="http://www.ortakhatim.com/ekd/150_151.htm"
        />   
        <Image         
         source={require('./assets/hacet.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="http://www.ortakhatim.com/ekd/150_151.htm"
        />    
      <Image         
             source={require('./assets/kronahacet.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1Wx9Ju0x2pOofsDZU3i4T9mJGCBGZGMV8/view?usp=share_link"
        /> 
         <Image         
         source={require('./assets/zikirdua.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.onlinedua.org/zikirler"
        />   
          <Image         
         source={require('./assets/camisalavat.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.onlinedua.org/buyuk-cevsen/418"
        /> 
         <Image         
         source={require('./assets/cevsens.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1Me7QOa473HZrdCnGfE_HCphom7421rWU/view?usp=share_link"
        /> 
        <Image         
         source={require('./assets/cevsen.png')}
         resizeMode="contain"
          style={styles.timage}
          Link href="https://www.onlinedua.org/cevsen"
        /> 
         <Image         
         source={require('./assets/tesbihats.png')}
         resizeMode="contain"
          style={styles.timage}
          Link href="https://soundcloud.com/hizmetten/sets/tesbihat"
        /> 
          </View>    
          
     <Button onPress={() => {}} title="KITAP BOLUMU"
      Link href="https://hizmetsource.com/" />    
        <Text style={styles.text}
         >Bu bolumde cok okunan KITAPLARA dogrudan kisa yol ile ulasabilirsiniz. Bazi kitap portallarini da burda bulup link ile detaylarini gorebilirsiniz  
         Allah kabul etsin 
         </Text>  
    </View>
    
    <View style={styles.overlayContainer}> 
      <View style={styles.menuContainer}>
      <Image         
           source={require('./assets/risale.png')}
         resizeMode="contain"
          style={styles.timage}
          Link href="https://risaleoku.com/"
        /> 
       <Image         
           source={require('./assets/pirlanta.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://pirlantaoku.com/books"
        /> 
      <Image         
           source={require('./assets/riyazussalihin.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1em47Gwxop87olotwf1IrKORTvIX-Mmla/view?usp=sharing"
        />      
      <Image         
         source={require('./assets/hayatussahabe.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1BOZTleuM33-9ovzM2DshCQyCmClRoR60/view?usp=sharing"
        /> 
      <Image         
            source={require('./assets/ntkitap.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://hizmetsource.com/"
        />      
      <Image         
            source={require('./assets/elmali.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="http://www.kuranikerim.com/t_elmalili_index.htm"
        /> 
     <Image         
          source={require('./assets/asrin.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://fgulen.com/tr/eserleri/asrin-getirdigi-tereddutler"
        />       
      <Image         
         source={require('./assets/ilmihal.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1t9tN4fWEb5i0HSrLBqXuBhP2WV7LbWkM/view?usp=sharing"
        /> 
     <Image         
          source={require('./assets/suaty.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.ortakhatim.com/mukabele/MEAL/index.html"
        /> 
         <Image         
            source={require('./assets/seslikitap.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://sureyyakitap.com/sesli-kitaplar"
        /> 
         <Image         
            source={require('./assets/aliunal.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.kuranmealleri.net/ali-unal-mealleri/"
        /> 
      
         <Image         
         source={require('./assets/kalbinz.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://fgulen.com/tr/eserleri/kalbin-zumrut-tepeleri"
        /> 
         <Image         
         source={require('./assets/sonsuz.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://fgulen.com/tr/eserleri/sonsuz-nur"
        /> 
           <Image         
              source={require('./assets/kitapozet.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.ozgurherkul.org/category/kitap-ozetleri/"
        /> 
           <Image         
             source={require('./assets/ekitap.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://archive.org/"
        /> 
           <Image         
             source={require('./assets/mehdi.jpg')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://drive.google.com/file/d/1dt2JA2zgX7VgoUo1nkvfqW_MZXxq4ztt/view?usp=share_link"
        /> 
          </View>    
          <Button onPress={() => {}} title="Multi Media"
      Link href="https://hizmetsource.com/" />    
        <Text style={styles.text}
         >Bu bolumde Fethulah Gulen Hoca Efendinin vaazlarini kendi sitesinde yer aldigi sekilde bulabilirsiniz.
         </Text> 
         <View style={styles.overlayContainer}> 
      <View style={styles.menuContainer}>
      <Image         
           source={require('./assets/he.png')}
         resizeMode="contain"
          style={styles.timage}
          Link href="https://fgulen.com/tr/ses-ve-video-tr"
        /> 
       <Image         
           source={require('./assets/bamtelı.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.herkul.org/bamteli-arsiv/"
        /> 
      <Image         
           source={require('./assets/herkul.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.herkul.org/herkul-nagme/page/4/"
        />      
      <Image         
         source={require('./assets/konf.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://fgulen.com/tr/ses-ve-video-tr/siirleri-konferanslari"
        />    
        <Image         
         source={require('./assets/hyoutube.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.youtube.com/@HerkulNagme/featured"
        />  
         <Image         
         source={require('./assets/sirk.png')}
          resizeMode="contain"
          style={styles.timage}
          Link href="https://www.youtube.com/playlist?list=PLoMiO6MkG5fxjfW9k42bCPWRKholXIb91"
        /> 
         </View>
         </View>
     <Button onPress={() => {}} title="Gelistirilen Bolum"
      Link href="https://hizmetsource.com/" />    
        <Text style={styles.text}
         >Bu bolum sizden gelen taleplere gore gelistirilecektir.
         </Text>  
         <View style={styles.overlayContainer}> 
      <View style={styles.menuContainer}>
      <Image         
           source={require('./assets/sahadah.png')}
         resizeMode="contain"
          style={styles.timage}
          Link href=        
         "https://docs.google.com/document/d/1Vx_pZfqg61EYECArBFYcWk2Zxw49QVgK/edit?usp=sharing&ouid=117849126044996544505&rtpof=true&sd=true"
         /> 
          <Image         
           source={require('./assets/salah.png')}
         resizeMode="contain"
          style={styles.timage}
          Link href=        
         "https://drive.google.com/file/d/1nGOVmwsGggL4UQ_x8oDuveMKBLmIqoV3/view?usp=sharing"
         /> 
          <Image         
           source={require('./assets/namaz.png')}
         resizeMode="contain"
          style={styles.timage}
          Link href= "https://stepbystepsalah.wordpress.com/duas/"
          /> 
            <Image         
           source={require('./assets/hizmet.png')}
         resizeMode="contain"
          style={styles.timage}
          Link href= "https://hizmetten.com/"
          /> 
     </View>
         </View>
         <Button onPress={() => {}} title="Sosyal Medya"
      Link href="https://hizmetsource.com/" />    
        <Text style={styles.text}
         >Bu tarz iceriklerin devami icin Youtube kanalima uye olmayi ve icerikleri sevdi iseniz arkadaslariniza tavsiye etmeyi unutmayin... Tesekkur ederim 
         </Text>  
    </View>
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

    </div>  
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    height:'100%',     
   },
   image:{
    height:50,
    width:70,
    opacity:0.9,
    alignContent:'center',
    padding:5,    
   },
   kimage:{
    height:100,
    width:80,
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
    backgroundColor: '#FFFFF7', 
   
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

 
 