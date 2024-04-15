import { StyleSheet } from "react-native";


export const LogCss = StyleSheet.create({
    safearea:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        
        backgroundColor:'#F6F6F6',
        width:"100%",
    },
    headScreen:{
        backgroundColor:'#6b63ff',
        
        padding:"30px",
        borderRadius:100,
        marginTop:"-150px",
        marginBottom:"10px"
    },
    input:{
        width:"300px",
        height:"40px",
        
        borderColor:'#111111',
        borderWidth:"1.5px",
        borderStyle:"bold",
        borderRadius:"5px",
        outlineWidth:0,
        
        paddingHorizontal:"20px",
        paddingVertical:"15px",
        marginTop:"20px",
        
        
        fontSize:"15px",
        fontWeight:600,
        color:'#2F2F2F',
        
    },
    showpassword:{
        position:"absolute",
        bottom:7,
        right:20,
        cursor:'pointer'
    },
    forgetPass:{
        marginTop:'20px',
        cursor:'pointer',
        
        fontSize:"15px",
        color:"#2F2F2F",
    },
    btnLogin:{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        flex:1,

        width:"300px",
        height:"30px",
        
        padding:"10px",
        marginTop:"20px",
        

        backgroundColor:'#6b63ff',
        borderRadius:"5px",
    },
    btnText:{
        fontSize:"20px",
        color:'white'
    },
    createAcount:{
        color:'#2F2F2F',
        textAlign:"center",
        marginTop:"10px",
        cursor:'pointer',
        
    }

})