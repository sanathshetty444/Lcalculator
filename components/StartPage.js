import React, { useState } from 'react'
import { View ,Image} from 'react-native';
import { TextInput,Appbar,Button } from 'react-native-paper';
import DisplayResult from './DisplayResult';
function StartPage() {
    const [result,setResult]=useState({percent:'',string:''})
    function submit(){
        // console.log(text)
        fetch(`https://rapidapi.p.rapidapi.com/getPercentage?fname=${text.firstPerson}&sname=${text.secondPerson}`,{
            headers:{
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": "4518807ca2msh4753095dd5a93c8p1081a4jsn9453d197155c",
                "useQueryString": true
            }
        })
        .then(res=>res.json())
        .then(response=>{
            console.log(response.percentage);
            setResult({percent:response.percentage,string:response.result})
            console.log(result);
        //     if(response.data.percentage!=""){

        //     
        // }

             
            // console.log(response.percentage);
            
        })
        
    }

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    const [text, setText] = React.useState({firstPerson:'',secondPerson:''});
    return (
        <View >
            <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Image source={{uri:'https://cdn.logo.com/hotlink-ok/logo-social.png'}} style={{height:30,width:30}}/>
                <Appbar.Content title="<3 % calculator" subtitle="Subtitle" />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>
            <View style={{padding:20,display:'flex',flexDirection:'column',justifyContent:"center"}}>
                    <TextInput
                    style={{margin:20}}
                label="First Person"
                value={text.firstPerson}
                onChangeText={t => setText({...text,firstPerson:t})}
                />
                    <TextInput
                    style={{margin:20}}
                label="Second Person"
                value={text.secondPerson}
                onChangeText={t => setText({...text,secondPerson:t})}
                />
            </View>
            <Button icon="heart" style={{margin:20}} mode="contained" onPress={()=>submit()}>
                Press me
            </Button>
            <DisplayResult result={{percent:result.percent,string:result.string}}/>
        </View>
    )
}


export default StartPage
