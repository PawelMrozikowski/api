const list = document.querySelector('.list--js');

fetch('https://api.github.com/users/PawelMrozikowski/repos')
.then(resp => resp.json())
.then(resp => {
    const repos = resp;
    for(const repo of repos){
    list.innerHTML += `<li><a href="${repo.url}"> ${repo.name}</a></li>`;
    }
})
    

console.log('ala');
