import React , {useState} from 'react';
import { StyleSheet, View ,TouchableOpacity , Text , useWindowDimensions} from 'react-native';
import Droplist from '../component/Droplist';
import { TextInput } from 'react-native-gesture-handler';


import Popalert from '../package/Popalert'



const Signup = () => {
const { width } = useWindowDimensions();


// pop
const [isPopupVisible, setPopupVisible] = useState(false);

    let width_of_screen;
    let width_of_input;

    
    const sumbit_Login = () =>{
        setPopupVisible(!isPopupVisible);
}




    if(width > 900)
    {width_of_screen = 850
    width_of_input = +width / 4;}
    else if(width > 500){
        width_of_screen = 500
        width_of_input = +width / 4;
    }    
    
    else{
    width_of_screen = width
    width_of_input = +width / 4;}



    return (
        <>
    <View style={{backgroundColor:"#f1f1f1",display:'flex',flex:1,width:width_of_screen,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:'column',width:width_of_screen - 30}}>
        <Text style={{fontSize:"30px",fontWeight:'bold',}}>إنشاء حساب</Text>
            <View style={{display:'flex',flexDirection:'row',marginTop:"10px",justifyContent:"space-between",gap:5}}>
                <TextInput style={{borderColor:'gray',borderStyle:'solid',borderWidth:"1px",borderRadius:"3px",paddingVertical:"10px",paddingHorizontal:"1px",fontWeight:500,color:'#2F2F2F',outlineWidth:0,borderRadius:'5px',width:width_of_input,flexGrow:1,paddingHorizontal:"8px"}} placeholder='الاسم الثاني'/>
                <TextInput style={{borderColor:'gray',borderStyle:'solid',borderWidth:"1px",borderRadius:"3px",paddingVertical:"10px",paddingHorizontal:"1px",fontWeight:500,color:'#2F2F2F',outlineWidth:0,borderRadius:'5px',width:width_of_input,flexGrow:1,paddingHorizontal:"8px"}} placeholder='الاسم الاول'/>
            </View>
            <TextInput style={{marginTop:"10px",borderColor:'gray',borderStyle:'solid',borderWidth:"1px",borderRadius:"3px",paddingVertical:"10px",paddingHorizontal:"8px",fontWeight:500,color:'#2F2F2F',outlineWidth:0,borderRadius:'5px'}} placeholder='رقم التلفون'/>
            <TextInput style={{marginTop:"10px",borderColor:'gray',borderStyle:'solid',borderWidth:"1px",borderRadius:"3px",paddingVertical:"10px",paddingHorizontal:"8px",fontWeight:500,color:'#2F2F2F',outlineWidth:0,borderRadius:'5px'}} placeholder='رقم ولي الأمر'/>
        <Droplist/>
        <View style={{marginTop:"10px"}}>
            <Text style={{fontSize:16,cursor:'pointer'}}>
            تسجـيل الدخول ؟
            </Text>
            </View>
            <TouchableOpacity style={{backgroundColor:'black',borderRadius:'5px',marginTop:"15px",shadowColor: 'black',shadowOffset: { width: 0, height: 2.5 },shadowOpacity: 0.8,shadowRadius: 2}} onPress={sumbit_Login}>
                <View style={{paddingHorizontal:"13px",display:'flex',alignItems:'center',justifyContent:'center',paddingVertical:"6px"}}>
                    <Text style={{color:'white',fontSize:23}}>إنشـــاء حساب</Text>
                </View>
            </TouchableOpacity>
        {/* modal */}
<Popalert toggle={sumbit_Login} onclose={isPopupVisible}/>
{/* modal */}
        </View>
    </View>
        </>
    );
}

const styles = StyleSheet.create({})

export default Signup;

