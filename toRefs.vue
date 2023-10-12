<script setup>

// 完成了reactive和ref的转换，两个变量之间建立了关联关系
const state = reactive({
    foo: 1,
    bar: 2
  })
  
  const stateAsRefs = toRefs(state)
  /*
  stateAsRefs 的类型：{
    foo: Ref<number>,
    bar: Ref<number>
  }
  */
  
  // 这个 ref 和源属性已经“链接上了”
  state.foo++
  console.log(stateAsRefs.foo.value) // 2
  
  stateAsRefs.foo.value++
  console.log(state.foo) // 3
</script>
