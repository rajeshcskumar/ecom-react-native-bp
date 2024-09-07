import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.appIconContainer}>
            <Image source={require('../assets/appIcon.png')} style={styles.appIcon} />
        </View>
        <Image source={require('../assets/dp.png')} style={styles.dp}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    appIconContainer: {
        backgroundColor: '#FFFFFF',
        width: 44,
        height:44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appIcon: {
        height: 28,
        width:28
    },
    dp: {
        width: 44,
        height:44,
        borderRadius: 22,
    }
    
})