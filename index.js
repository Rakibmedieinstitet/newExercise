//en funktion som hämtar data från api 
//funktionen ska anropas av event click
function DataSearch() {
    //värdet från search input
const valSearch= document.querySelector("input").value;
//skapa en ny instans/kopia av XMLHttpRequest objekt
const Req = new XMLHttpRequest();
//Öppnar kopplingen och skickar värdet från input som query request
//de/unsplash kräver oxå api nyckel i query
Req.open("get", `https://api.unsplash.com/search/photos/?&query=${valSearch}&client_id=5aab4d1a45044dd20d1a328d10311d775dee35ed443d3a315587c76e8d0c5c8e`)
//Skickar request 
Req.send();
//onload kör som async 
//och har data som kommer från API

//Reg som är en instans/kopia av XMLHttpRequest object brukar -
//- ha respons data från api/server
Req.onload = ()=>{
    //const data = Req.response;
const data = JSON.parse(Req.response);
//spara url som kommer från api i en variable
   const srcFromUrl =data.results[0].urls.small;
    console.log(data.results[0].urls.small);
    //uppdaterar img element's src attribute med urln som kommer från api
    document.querySelector("img").src=srcFromUrl; //urln variable
}
 }
document.querySelector("button").addEventListener("click", DataSearch)
  



//det är några olika sätt har jag försökt för att kunna hämta data från api
  
  
  //Req.open("get","https://api.unsplash.com/search/photos/?client_id=5aab4d1a45044dd20d1a328d10311d775dee35ed443d3a315587c76e8d0c5c8e" );
//Req.open("get", `https://api.unsplash.com/search/photos?page=1&query=${valSearch}&api-key=d9ad6d23c413f84b146400cead5421e1a74cc227c022360ec7de1f4c58456272`)
  
    //Req.setRequestHeader()
// Req.setRequestHeader(
// "Authorization", "Client-ID 5aab4d1a45044dd20d1a328d10311d775dee35ed443d3a315587c76e8d0c5c8e"          
// )

//    const res=  await  axios.get("https://api.unsplash.com/search/photos", {
//            params: {query: valSearch},
//            headers: {
//             Authorization: "Client-ID 5aab4d1a45044dd20d1a328d10311d775dee35ed443d3a315587c76e8d0c5c8e"
//            }

          

//        })
       //console.log(res)


 