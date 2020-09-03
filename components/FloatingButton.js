import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Ionicons';

export default function FloatingButton(props) {
    return (
        <TouchableOpacity onPress = {props.onPress} style={{justifyContent:'center',alignItems:'center',zIndex:9999,width:wp('15%'), height:wp('15%'), backgroundColor: "#6200EE",position:'absolute',borderRadius:100,right:10,top:hp('70%')}}>
            <Icon name="md-add" size={50} color= "#fff" />
        </TouchableOpacity>
    )
}
