const list = document.querySelector('.list--js');

fetch('https://api.github.com/users/PawelMrozikowski/repos')
.then(resp => resp.json())
.then(resp => {
    const repos = resp;
    for(const repo of repos){
        const{description, url, name}= repo;
    list.innerHTML += `<li class="list__item"><a href class="list__link" ="${url}"> ${name}</a>
    <p class="list__description">${description ? description : "brak opisu"} </p></li>`;
    }
})
    

console.log('ala');
