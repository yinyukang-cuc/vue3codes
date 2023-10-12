
import {getCurrentInstance} from 'vue'

/**
 用于调用全局属性
 */
export default function useGlobal(){
    const {
        appContext:{
            config:{
                globalProperties
            }
        }
    } = getCurrentInstance()
    return globalProperties
}