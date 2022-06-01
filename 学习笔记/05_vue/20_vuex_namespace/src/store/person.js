import axios from "axios"
import { nanoid } from "nanoid"

export default{
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王！')
            }
        },
        addPersonServer(context){
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => { alert(error.message) }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了'+value.id)

            state.personList.unshift(value)
        }
    },
    state:{
        personList:[]
    },
    getters:{
        firstPersonName(state){ 
            // return state.personList[0].name 
            
            console.log('getters firstPersonName'+ state.personList[0])
            var obj = state.personList[0]
            var str
            for (var item in obj){
                str +=item+":"+obj[item]+"\n";
            }
            console.log(str)
        }
    }
}