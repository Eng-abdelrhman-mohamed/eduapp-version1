// library
import React, { useState } from 'react';

import {
    View ,SafeAreaView ,
    TextInput , Button ,
    TouchableOpacity , Text,
    Image
    ,useWindowDimensions
} from 'react-native';
// modal
import Popalert from '../package/Popalert'
// icon
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// css style
import { LogCss } from '../css/LogCss';

// image




const Log = () => {
    
// hooks
const [showPass , setShowPass] = useState(true)
//width
const { width } = useWindowDimensions();

const [InputOfUserName,setInputOfUserName] = useState(null);
const [InputOfUserPass,setInputOfUserPass] = useState(null);
// pop
const [isPopupVisible, setPopupVisible] = useState(false);


// function change show password
const changeShowPass = ()=>{
    setShowPass(!showPass)
}

// width
let widthScreen;
if(width < 500 )
    widthScreen = "250px";

// check login
const Check_user = (e) =>{
if(e.length > 5)
setInputOfUserName(e)
} 


// check pass and alert modal
const Check_pass = (p) =>{
    if(p.length > 5 && p.startsWith('01'))
    setInputOfUserPass(p)
    else
    setInputOfUserPass(null)
} 


// submit
const sumbit_Login = () =>{
    if(InputOfUserName != null && InputOfUserPass != null)
    console.log(InputOfUserName,InputOfUserPass)
    // close & open modal
    else
    setPopupVisible(!isPopupVisible);
}


    return (

        <>
    <SafeAreaView style={LogCss.safearea}>

{/* start head screen */}
<View style={LogCss.headScreen}>
    <TouchableOpacity>
        <AntDesign name="user" size={50} color="white" />
    </TouchableOpacity>
</View>
{/* end head screen */}

{/* start body Screen */}
<View>

    <View style={{position:'relative'}}>
        <TextInput onChange={(user)=>{Check_user(user.target.value)}} maxLength={20} placeholder='اسم المستخدم' style={[LogCss.input,{width:widthScreen}]}/>
        <TextInput onChange={(pass)=>{Check_pass(pass.target.value)}} maxLength={20} placeholder='كلمة السر' secureTextEntry={showPass} style={[LogCss.input,{width:widthScreen}]} />
        <View style={LogCss.showpassword}>
            <TouchableOpacity>
                
            {
                showPass ?
                
                <Entypo name="eye-with-line" size={24} color="black"  onPress={()=>{changeShowPass()}}/>
                :
                <AntDesign name="eye" size={24} color="black" onPress={()=>{changeShowPass()}}/>
            }
            </TouchableOpacity>
        </View>
    </View>

{/* forget password */}

<View style={LogCss.forgetPass}>
    <Text>
    نسيت كلمة السر؟
    </Text>
</View>
{/* forget password */}


 {/* button */}
        <TouchableOpacity onPress={()=>{sumbit_Login()}}>
            <View style={[LogCss.btnLogin,{width:widthScreen}]}>
                <Text style={LogCss.btnText}>تســـجيل الدخول</Text>
            </View>
        </TouchableOpacity>
 {/* button */}

{/* create account */}
<View>
    <Text style={LogCss.createAcount}>
        إنشـاء حساب
    </Text>
</View>
{/* create account */}
{/* modal */}
<Popalert toggle={sumbit_Login} onclose={isPopupVisible}/>
{/* modal */}


</View>
{/* end body Screen */}
    </SafeAreaView>
        </>
    );
}


export default Log;
