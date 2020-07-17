// using callback 


// console.log("start")

// function userlogin(email,pwd,callback){
//     setTimeout(()=>{
//         console.log("i am from userlogin")
//         callback({
//             email:email,
//             pwd:pwd
//         })
//     },3000)
// }

// function uservideos(email,callback){
//     setTimeout(()=>{
//         console.log("I am from uservideo")
//         callback(["vid1","vid2","vid3","vid4"])
//     },2000)
// }

// function videodetails(singlevideo, callback){
//     setTimeout(()=>{
//         let viddetails=[
//                     {name:"vid1" , details:"asd asdhasjda hakdhasd"},
//                     {name:"vid2" , details:"lorem   zdfgdzfg dfgdg"},
//                     {name:"vid3" , details:"sfsfg dzfgttyry erttr"},
//                     {name:"vid4" , details:"rtert drtyrymgh dtrutyu"}
//         ]
//         let filteredVideodetails= viddetails.filter((myvideo)=>{
//             return myvideo.name == "vid2"
//         })
//         callback(filteredVideodetails)
//     },2000)
// }

// userlogin("ali@gmail.com",45789,(user)=>{
//     console.log(user)
//     uservideos(user.email,(videos)=>{
//         console.log(videos)
//         videodetails(videos[2],(myviddetails)=>{
//             console.log(`${videos[2]} details: ${myviddetails[0].details}`)
//         })
//     })
    
// })


// console.log("end")


// using promise ---------------------------------------------------------------------------------------------


// console.log("start")

// function userlogin(email,pwd){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("i am from userlogin")
//             resolve({
//                 email:email,
//                 pwd:pwd
//             })
//         },3000)
//     })
// }

// function uservideos(email){
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("I am from uservideo")
//             resolve(["vid1","vid2","vid3","vid4"])
//         },2000)
//    })
// }

// function videodetails(singlevideo){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let viddetails=[
//                         {name:"vid1" , details:"asd asdhasjda hakdhasd"},
//                         {name:"vid2" , details:"lorem   zdfgdzfg dfgdg"},
//                         {name:"vid3" , details:"sfsfg dzfgttyry erttr"},
//                         {name:"vid4" , details:"rtert drtyrymgh dtrutyu"}
//             ]
//             let filteredVideodetails= viddetails.filter((myvideo)=>{
//                 return myvideo.name == "vid2"
//             })
//             resolve(filteredVideodetails)
//         },2000)
//     })
// }

// userlogin("ali@gmail.com",45789)
// .then((user)=>{
//     console.log(user)
//     return uservideos(user.email)
// })
// .then((vidArr)=>{
//     console.log(vidArr)
//     return videodetails(vidArr[1])
// })
// .then((videoDetails)=>{
//     console.log(videoDetails[0].details)
// })

// console.log("end")



// getting data from multiple promises at same time ---------------------------------------------------------------------------------------------

// const youtube = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("i am from youtube")
//         resolve({videos:[1,2,3,4,5]})
//     },3000)
// })
// const gmail = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("i am from gmail")
//         resolve({user:"Ali hasan"})
//     },10000)
// })

// Promise.all([youtube,gmail])
// .then((result=>{
//     console.log(result)
// }))

// using async/await ---------------------------------------------------------------------------------------------
console.log("start")

function userlogin(email,pwd){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("i am from userlogin")
            resolve({
                email:email,
                pwd:pwd
            })
        },3000)
    })
}

function uservideos(email){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am from uservideo")
            resolve(["vid1","vid2","vid3","vid4"])
        },2000)
   })
}

function videodetails(singlevideo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am from videodetails")
            let viddetails=[
                        {name:"vid1" , details:"asd asdhasjda hakdhasd"},
                        {name:"vid2" , details:"lorem   zdfgdzfg dfgdg"},
                        {name:"vid3" , details:"sfsfg dzfgttyry erttr"},
                        {name:"vid4" , details:"rtert drtyrymgh dtrutyu"}
            ]
            let filteredVideodetails= viddetails.filter((myvideo)=>{
                return myvideo.name == singlevideo
            })
            resolve(filteredVideodetails)
        },2000)
    })
}

async function displayUser(){
    try{
        const logedInUser=await userlogin("ali@gmail.com",78458)
    console.log(logedInUser)
    const videos = await uservideos(logedInUser.email)
    console.log(videos)
    const detailsofvideo = await videodetails(videos[0])
    console.log(detailsofvideo[0].details)
    }
    catch(err){
        console.log(err)
    }
}

displayUser()

console.log("end")