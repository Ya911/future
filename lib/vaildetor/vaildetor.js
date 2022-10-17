import * as yup from 'yup';

yup.setLocale({

    string:{
     
    email : 'يجب كتابة صياغة صحيحة للأيميل',
    trim : 'يجب كتابة الأيميل بدون مسافات',
    max : 'لايمكنك كتابة عدد أكبر من 30',
    min : 'لايمكنك كتابة عدد أكبر من أقل من 3',
    
        }


})


export const skemayup = yup.object().shape({


        fristname: yup.string()
        .required("لايمكن ترك الخانة فارغة")
        .max(30),
        
        username: yup.string()
        .required("لايمكن ترك الخانة فارغة")
        .min(3)
        .max(30),

        email: yup.string()
        .required("لايمكن ترك الخانة فارغة")
        .max(30)
        .email(),

        
        password: yup.string()
        .required("لايمكن ترك الخانة فارغة")
        .min(6 ,'لايمكنك كتابة عدد أكبر من أقل من 6')
        .max(30)
        ,

        image:yup.mixed()
        .test("required", "الرجاء أختيار صورة", (file) => {
          if (file.length  != 0) return true
          return false
        })



          



})