import { configureStore , combineReducers } from '@reduxjs/toolkit'


// أستدعاء جميع ملفات شرائح الريوسر  
import Index from './index/index'






// [جمع شرائح الريدوسر داخل الريديوسر الأب  لتضمينها داخل متغير الستور]
const combinedReducers = combineReducers({Index})

// [ تصدير الستور وبداخله متغير الريوسر الأب ]
export const store = configureStore({
    reducer : combinedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false}),
})


