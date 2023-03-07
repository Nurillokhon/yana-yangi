const initializeState = [{"id":1,"Data":"2021/02/12","Aftor":"Pavel Annenkov","grade":3,"price":"100.000","status":true,"ImgBook":"https://img.bisyor.uz/web/uploads/items/million-dollarlik-khatolar-244578-1z-1626357676.jpg","status2":true,"AftorImg":"http://i1.sndcdn.com/artworks-000210383358-9u0xpz-t3000x3000.jpg","NameBook":"Million Dollarlik Xatolar","category":"Rivojlanish","priceGrade":"79.900"},{"id":2,"Data":"2020/22/08","Aftor":"Paulo Koelo","grade":3.5,"price":"69.900","status":true,"ImgBook":"https://i.pinimg.com/originals/da/6f/16/da6f16026cfc9d9c2cbd047530ae960f.jpg","status2":true,"AftorImg":"https://1.bp.blogspot.com/-_2LCHPdaviY/XUuvbc-l4rI/AAAAAAAAAbY/ZG4CGGSeuGYpMwBSm9xJZfoFtukKYbkHACLcBGAs/s1600/Paulo%2BCoelho%2BQuotes.jpg","NameBook":"Alif","category":"Boshqa","priceGrade":"50.000"},{"id":3,"Data":"2022/25/07","Aftor":"Stiven Shiffman","grade":3,"price":"75.900","status":true,"ImgBook":"https://assets.asaxiy.uz/product/items/desktop/3988c7f88ebcb58c6ce932b957b6f3322022062417202112852DNlxLA6fR9.jpg.webp","status2":true,"AftorImg":"http://www.hrmedia.ru/sites/default/files/u5/steve_schiffman_big_0.jpg","NameBook":"Rad etib bulmaydigan","category":"Boshqa","priceGrade":"60.900"},{"id":4,"Data":"1990/05/07","Aftor":"Jen Sinsero","grade":4,"price":"68.900","status":true,"ImgBook":"https://assets.asaxiy.uz/product/items/desktop/3988c7f88ebcb58c6ce932b957b6f3322022061213540043330qhnIBaVsza.jpg.webp","status2":true,"AftorImg":"https://alexandertokarev.ru/pictures/jen-sincero-photo@2x.jpg","NameBook":"Nolimang","category":"Rivojlanish","priceGrade":"55.000"},{"id":5,"Data":"1992/12/03","Aftor":"Karl Syuell","grade":2.5,"price":"68.900","status":true,"ImgBook":"https://avatars.mds.yandex.net/i?id=ca84cef06d0773f43db487c8e3483330-5194260-images-thumbs\u0026n=13","status2":true,"AftorImg":"https://bookinsider.ru/wp-content/uploads/2017/04/Karl-Syuell.jpg","NameBook":"Bir umirlik mijozlar","category":"Rivojlanish","priceGrade":"55.000"},{"id":6,"Data":"2020/10/04","Aftor":"Chan Kim","grade":2,"price":"99.900","status":true,"ImgBook":"https://assets.asaxiy.uz/product/items/desktop/12092a75caa75e4644fd2869f0b6c45a2022050413395724400ho63FbfNjp.jpg.webp","status2":true,"AftorImg":"https://mybiz.ru/wp-content/uploads/2015/07/kim.jpg","NameBook":"Moviy Ummon Strategiyasi","category":"Detektiv","priceGrade":"70.900"},{"id":7,"Data":"2023/10/02","Aftor":"Jen Sinsero","grade":3.7,"price":"50.900","status":true,"ImgBook":"https://kitobxon.com/img_knigi/7957.jpg","status2":true,"AftorImg":"https://alexandertokarev.ru/pictures/jen-sincero-photo@2x.jpg","NameBook":"Axmoqlik Qilmang","category":"Rivojlanish","priceGrade":"30.900"},{"id":8,"Data":"2021/23/01","Aftor":"Jon Miller","grade":4.2,"price":"60.000","status":true,"ImgBook":"https://assets.asaxiy.uz/product/items/desktop/3a6bd36b87969b8a45d9a8119004e2642021070314513477239wMCv8paWCs.jpg","status2":true,"AftorImg":"https://avatars.mds.yandex.net/get-altay/1775373/2a0000016ae8e86159e3cb22edaca1d2d6c4/XXL","NameBook":"Savol ortidagi savol","category":"Boshqa","priceGrade":"50.000"},{"id":9,"Data":"2021/23/01","Aftor":"Jeyms Klir","grade":1.6,"price":"65.900","status":true,"ImgBook":"https://static10.tgstat.ru/channels/_0/69/69af1b34dafbd8593b7007652455f5c8.jpg","status2":true,"AftorImg":"https://future2day.ru/wp-content/uploads/2020/02/image009-2.jpg","NameBook":"Atom Odatlar","category":"Detektiv","priceGrade":"55.900"},{"id":10,"Data":"2020/25/09","Aftor":"Gustav Lebon ","grade":2.1,"price":"34.900","status":true,"ImgBook":"https://static.insales-cdn.com/images/products/1/1790/480421630/omma_psixologiyasi.jpg","status2":true,"AftorImg":"https://www.syl.ru/misc/i/ai/419291/2797845.jpg","NameBook":"Omma Psixologiyasi","category":"Boshqa","priceGrade":"20.900"},{"id":11,"Data":"2018/20/07","Aftor":"Og Mandino ","grade":4.2,"price":"24.900","status":true,"ImgBook":"https://avatars.mds.yandex.net/i?id=1ef9fbfe69f108e95e8802b04c07fb6495f66d12-5364864-images-thumbs\u0026n=13","status2":true,"AftorImg":"https://www.syl.ru/misc/i/ai/419291/2797845.jpg","NameBook":"Dunyoning eng buyuk ","category":"Fantastika","priceGrade":"20.000"}]

function Search_input(state = initializeState, action) {
    if(action.type=='added2'){
        state=action.payload.mass
        return state
    }

    // if(action.type == 'search'){

    //     if(action.payload.name==''){
    //         state=initializeState
    //         console.log(initializeState,'action');
    //         return state
    //     }
    //     else{
    //         let current = [...state]
    //         let qiymat = current.filter(item => {
    //             return item.NameBook.includes(action.payload.name)
    //         })
    //         state = qiymat
    //         console.log(state,'bu state');
    //         return state
    //     }
    // }

    if(action.type == 'search'){
        state = action.payload.name
        return state
    }

    if(action.type == "Fantastik"){
        state = action.payload.name
        return state
    }

    if(action.type == "Detektiv"){
        state = action.payload.name
        return state
    }

    if(action.type == "Rivojlanish"){
        state = action.payload.name
        return state
    }

    if(action.type == "Boshqa"){
        state = action.payload.name
        return state
    }
    return state
}

export { Search_input };