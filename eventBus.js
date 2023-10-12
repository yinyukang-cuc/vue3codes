import {createApp,inject} from 'vue'

const EventBusSymbol = Symbol() // 创建全局唯一symbol

const EventBus = {
    intall(app){ // 对象包含install函数，符合vue插件规范
        const eventBus = createApp({})
        app.provide(EventBusSymbol,eventBus)
    },
    useEventBus(){ // 使用eventBus
        const eventBus = inject(EventBusSymbol)
        if(!eventBus){
            throw new Error('Event bus not found')
        }
        return eventBus
    }
}

