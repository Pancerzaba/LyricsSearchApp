const form=document.getElementById('form');
const search=document.getElementById('search');
const result=document.getElementById('result');
const more=document.getElementById('more');

const aoiURL='https://api.lyrics.ovh';

//Search bt song or artist
async function searchSongs(term){
    

    const res=await fetch(`${apiURL}/suggest/${term}`);
    const data =await res.json();
    
    showData(data);
}

//Show song and artist in DOM
function showData(data){}

//Event listeners
form. addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchTerm=search.value0.trim();

    if(!searchTerm){
        alert('Please type in a search term');
    }else{
        searchSongs(searchTerm)
    }
})