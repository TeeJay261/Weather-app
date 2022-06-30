const url= 'http://api.weatherstack.com/current?access_key=6938c73edd592c5977c6bebedb5b957b&query=Bangalore&units=m'

// request({url:url,json:true},(error, response)=>{
//     if(error){
//         console.log('Unable to connect to the internet')
//     }else if(response.body.error){
// console.log('Where on earth is this!?');
//     }
//     else{
//     console.log('It is currently '+response.body.current.temperature+' degrees out. It feels like '+response.body.current.feelslike+' degrees today ');
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/%20.json?access_token=pk.eyJ1IjoidGVlamF5MjEiLCJhIjoiY2w0dG5yc2VpMG53czNlbWxkZHpjaTh2cSJ9.hQkEFlvXzc1G6ypnI4UbAQ&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to the world!!! Oops')
//     }else if(response.body.features.length===0){
//         console.log('This place ain\'t on my planet')
//     }
//     else{
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]
//     console.log(latitude, longitude)
//     }
// })