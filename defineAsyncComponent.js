import { defineAsyncComponent } from 'vue'

// 异步组建基本原理: 回调函数返回Promise，resolve等到需要从服务器获得组件时调用
const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...从服务器获取组件
    resolve(/* 获取到的组件 */)
  })
})


const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)

// 全局注册
app.component('MyComponent', defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
))

// 比较全的定义
const AsyncComp = defineAsyncComponent({
    // 加载函数
    loader: () => import('./Foo.vue'),
  
    // 加载异步组件时使用的组件
    loadingComponent: LoadingComponent,
    // 展示加载组件前的延迟时间，默认为 200ms
    delay: 200,
  
    // 加载失败后展示的组件
    errorComponent: ErrorComponent,
    // 如果提供了一个 timeout 时间限制，并超时了
    // 也会显示这里配置的报错组件，默认值是：Infinity
    timeout: 3000
  })

