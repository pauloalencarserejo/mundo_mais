import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,  
    },
    images: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 231,
        height: 218
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    button: {
        width: 190,
        height: 52,
        marginLeft: 10,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 3
    },
    buttonText: {
        fontSize: 18,

    },
    text: {
        fontSize: 50,
        color: 'white',
        marginTop: 15,
        fontFamily: 'Roboto Condensed',
    }
})