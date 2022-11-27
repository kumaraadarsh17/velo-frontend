async function getDuration(url){
    const response = await fetch(url, {
        headers: myHeaders
    });
    const data = await response.json();
    console.log(data);
    document.getElementById('rideDuration').innerHTML='Ride Duration: '+data;
}
async function getPrice(url){
    const response = await fetch(url, {
        headers: myHeaders
    });
    const data = await response.json();
    console.log(data);
    document.getElementById('totalAmount').innerHTML='Total Amount: ₹'+data;
}
const url = 'http://localhost:8080/trip/duration/'+localStorage.getItem('tripId');
const url2 = 'http://localhost:8080/trip/price/'+localStorage.getItem('tripId');
const myHeaders = new Headers();
myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
getDuration(url);
getPrice(url2);