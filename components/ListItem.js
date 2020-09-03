import React,{useState} from 'react'
import { View, Text,CheckBox,TextInput,TouchableOpacity } from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Ionicons';

function ListItem(props)  {

       const [text,setText] = useState('');
       const [error,setError] = useState('');
       
       function handleAdd(){
           console.log(text);
           if(text!=''){
              props.handleAccept(text,props.item.id);
           }
           else{
               setError('Cant be empty');
           }
       }

       function handleChange(e){
           setText(e);
           setError('')
           
       }

       function handleEdit(){
           props.editStart(props.item.id);
       }

       function handleDelete(){
        props.deleteEnty(props.item.id);
       }

       React.useEffect(() => {
          console.log(props);
        }, [props])
 
        if(props.item.mode == 'edit'){
            return(
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:wp('1%')}}>
                   <View>
                   <TextInput value = {text} onChangeText = {handleChange} style={{width:wp('70%'),fontSize:20,borderRadius:5,borderWidth:2,borderColor:error==''?'#C737DD':'#f00'}}/>
                    {error!='' && <Text style={{color:'#f00',fontSize:18}}>{error}</Text>}
                   </View>
                   <TouchableOpacity onPress = {handleAdd}>
                    <View>
                     <Icon name="md-checkmark" size={50} color= "#32CD32" />
                   </View>
                   </TouchableOpacity>
                </View>
            )
        }
        else if(props.item.mode == 'display'){
           return( 
           <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:wp('1%')}}>
                    <Text style={{width:wp('70%'),fontSize:25,borderRadius:5,borderWidth:2,borderColor:'#DCDCDC',padding:wp('1%')}}>{props.item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                      <TouchableOpacity onPress = {handleEdit}>
                        <View>
                          <Icon name="md-create" size={50} color= "#C737DD" />
                       </View>
                       </TouchableOpacity>

                       <TouchableOpacity onPress = {handleDelete}>
                        <View>
                          <Icon name="md-close" size={50} color= "#DC143C" />
                       </View>
                       </TouchableOpacity>
                    </View>
            </View>
            )
        }
}

export default ListItem;
