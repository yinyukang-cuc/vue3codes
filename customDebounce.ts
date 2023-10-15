/*
实现函数防抖的自定义ref，返回的是对象，getter和setter
*/
function useDebouncedRef<T>(value: T, delay = 200) {
    let timeout: number
    return customRef((track, trigger) => {
      return {
        get() {
          // 告诉Vue追踪数据
          track()
          return value
        },
        set(newValue: T) {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            value = newValue
            // 告诉Vue去触发界面更新
            trigger()
          }, delay)
        }
      }
    })
  }



  <template>
  <h2>App</h2>
  <input v-model="keyword" placeholder="搜索关键字" />
  <p>{{ keyword }}</p>
</template>

<script lang="ts">
/*
customRef:
  创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

需求:
  使用 customRef 实现 debounce 的示例
*/

import { ref, customRef } from 'vue'

export default {
  setup() {
    const keyword = useDebouncedRef('', 500)
    console.log(keyword)
    return {
      keyword
    }
  }
}

</script>
