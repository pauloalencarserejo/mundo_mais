import React from 'react'
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
} from 'react-native'
import universe from '../../assets/universe.png'
import mundo from  '../../assets/mundo.png'
import styles from './styles'

export default function Initial(){
    return(
        <View style={styles.container}>
                <ImageBackground source={universe}
                    style={styles.images}>
                    <ImageBackground source={mundo} 
                    style={styles.image}/>
                    
                </ImageBackground>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.buttonText,{color: 'black'}]}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: 'black'}]}>
                    <Text style={[styles.buttonText,{color: 'white'}]}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}