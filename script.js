const generateMemeBtn= document.querySelector('.meme-button');
let title= document.querySelector('.title');
let memeImg= document.querySelector('.meme-img');

let authorName= document.querySelector('.author-name span')


function loadMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes').then((res)=>{
   
        return res.json()
    }).then((data)=>{
        title.innerText= data.title;
        memeImg.src= data.url;
        authorName.innerText= data.author;
        
    });
}
loadMeme()

generateMemeBtn.addEventListener('click', loadMeme)