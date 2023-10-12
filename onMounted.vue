
<script setup>
import { toRefs, reactive } from 'vue';

// 自定义hook
// 函数里可以调用onMounted和onUnmounted

function useMouse(){
    const state = reactive({x:0,y:0});
    const update = e=>{
        state.x = e.pageX;
        state.y = e.pageY;
    }
    onMounted(()=>{
        window.addEventListener('mousemove',update);
    })
    onUnmounted(()=>{
        window.removeEventListener('mousemove',update);
    })
    return toRefs(state);
}
</script>