import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './List.scss'

export default class List extends Taro.Component {

  
  render () {
    console.log(this.props)
    return (
      <View>
          asd
      </View>

    )
  }
}


// <View className={`movie_list_wrap ${this.props.listData.dis === false ? 'hide' : ''}`}>
// asd
//   {/* {
//     this.props.searchData.map(value => {
//       return (
//         <View key={value.id} className='item'>
//           <image src={value.images.large} alt={value.alt} />
        
//           <View className='like' onClick={
//             ()=>{
//               var index = this.state.sta.indexOf(value)
//               if(index === -1){
//                 this.setState({
//                   sta : [
//                     ...this.state.sta,
//                     value//value.id不用展开
//                   ]
//                 })                          
//               }
//               else{
//                 this.state.sta.splice(index,1)  
//                 this.setState({
//                   sta : this.state.sta,
//                 })  
//               }
//             }
//           }>
//             {this.state.sta.includes(value) ? '✔️' : '+'}
//           </View>
            

//           <View className='text'>
//             {value.title}
//           </View>

//         </View>
//       )
//     })
//   } */}
// </View>