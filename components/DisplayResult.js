import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

function DisplayResult(props) {



    if(props.result.percent!='' ){
        return (
            <View>
                <Text style={styles.text}>
                   Percentage   ==>   {props.result.percent}
                </Text>
                <Text style={styles.text}>
                   Result  ==>  {props.result.string}
                </Text>
            </View>
        )
    }
    
    return (
        <View>
            <Text style={styles.text}>loading....</Text>
            {/* {(props.result.percent!="")?<Text>{JSON.stringify(props.result)}</Text>:<Text>Loading</Text>} */}
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        textAlign:'center',
        fontSize:20,
        color:'greenyellow',
        padding:30,


    }
  });

export default DisplayResult
