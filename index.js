

function DataSearch() {
       
   const valSearch= document.querySelector("input").value;

const Req = new XMLHttpRequest();

//Req.open("get","https://api.unsplash.com/search/photos/?client_id=5aab4d1a45044dd20d1a328d10311d775dee35ed443d3a315587c76e8d0c5c8e" );
//Req.open("get", `https://api.unsplash.com/search/photos?page=1&query=${valSearch}&api-key=d9ad6d23c413f84b146400cead5421e1a74cc227c022360ec7de1f4c58456272`)

Req.open("get", `https://api.unsplash.com/search/photos/?&query=${valSearch}&client_id=5aab4d1a45044dd20d1a328d10311d775dee35ed443d3a315587c76e8d0c5c8e`)



//Req.setRequestHeader()
// Req.setRequestHeader(
// "Authorization", "Client-ID 5aab4d1a45044dd20d1a328d10311d775dee35ed443d3a315587c76e8d0c5c8e"          
// )
Req.send();
Req.onload = ()=>{
    //const data = Req.response;
const data = JSON.parse(Req.response);
   srcFromUrl =data.results[0].urls.small;
    console.log(data.results[0].urls.small);
    document.querySelector("img").src=srcFromUrl;
}
    

//    const res=  await  axios.get("https://api.unsplash.com/search/photos", {
//            params: {query: valSearch},
//            headers: {
//             Authorization: "Client-ID 5aab4d1a45044dd20d1a328d10311d775dee35ed443d3a315587c76e8d0c5c8e"
//            }

          

//        })
       //console.log(res)
 }

 document.querySelector("button").addEventListener("click", DataSearch)