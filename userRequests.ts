
import {ref} from 'vue'
import axios from 'axios'

export default function userUrlLoader<T>(url:string){
    const result = ref<T | null>(null)
    const loading = ref(true)    
    const errorMsg = ref(null)

    axios.get(url)
    .then(response =>{
        loading.value = false
        result.value = response.data
    })
    .catch(e=>{
        loading.value = false
        errorMsg.value = e.message || '未知错误'
    })

    return {
        loading,
        result,
        errorMsg
    }
  }
  

  const { loading, result, errorMsg } = useRequest<ProductResult[]>('/data/products.json')

    watch(result, () => {
      if (result.value) {
        console.log(result.value.length) // 有提示
      }
    })