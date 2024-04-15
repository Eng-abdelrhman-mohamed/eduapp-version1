import React from 'react';
import { StyleSheet, View ,Text , useWindowDimensions} from 'react-native';

const SplachScreen = () => {

    const {width} = useWindowDimensions();
    let width_of_containImage;
    let fontSize_of_academy;
    if(width < 500){
    width_of_containImage = 120
    fontSize_of_academy = "20px"}
    else{
    width_of_containImage = 150;
    fontSize_of_academy = "25px";}

    return (
    <>
        <View style={{display:'flex',flex:1,backgroundColor:'#F6F6F6'}}>
            <View style={{display:'flex',flex:3,alignItems:'center',justifyContent:"center"}}>
                <View style={{backgroundColor:'#6b63ff',width:width_of_containImage,height:width_of_containImage,borderRadius:"100%"}}></View>
                <Text style={{marginTop:"20px",fontSize:fontSize_of_academy,}}>name of academy</Text>
            </View>
            <View style={{display:'flex',flex:1,alignItems:'center',justifyContent:'flex-end',padding:"30px"}}>
                <Text style={{color:'#2F2F2F',fontWeight:200,fontSize:'18px'}}>
                    created by abdelrhman
                </Text>
            </View>
        </View>
    </>
    );
}


export default SplachScreen;
