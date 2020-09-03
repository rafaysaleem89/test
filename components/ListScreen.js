import React,{useState} from 'react'
import { View, Text,FlatList,Modal,TextInput, TouchableOpacity } from 'react-native'
import ListItem from './ListItem'
import FLoatingButton from './FloatingButton'
import FloatingButton from './FloatingButton';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import nextId from "react-id-generator";

function ListScreen()  {

        const [list,setList] = useState([]);



        function addEntry(){
            setList([...list,{id:nextId(),name:'',done:false,mode:'edit'}])
        }

        function cancelEntry(){

        }

        function handleAccept(text,id){
            let newList = list.map((item)=>{
                if(id == item.id){
                   return {...item,mode:'display',name:text}
                }
                else{
                    return item;
                }
            })
            console.log(newList)
            setList(newList);
        }

        function editStart(id){
            let newList = list.map((item)=>{
                if(id == item.id){
                   return {...item,mode:'edit'}
                }
                else{
                    return item;
                }
            })
            setList(newList);
        }

        function deleteEnty(id){
            let newList = list.filter((item)=>{
                if(id == item.id){
                   return false
                }
                else{
                    return true;
                }
            })
            setList(newList);
        }


        return (
            <View style={{alignItems:'center',justifyContent:'center'}}>
               
                <FlatList
                  data = {list}
                  renderItem = {({item})=>{return <ListItem deleteEnty = {deleteEnty} editStart = {editStart}  handleAccept = {handleAccept} item = {item}/>}}
                />
                <FloatingButton onPress = {addEntry}/>
            </View>
        )
}

export default ListScreen;
