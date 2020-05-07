var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var listElement = document.querySelector('#app ul');

function render(){
    listElement.innerHTML = '';
    textUSer = inputElement.value;

    var reposElement = document.createElement('li');
    var reposText = document.createTextNode("Carregando...")
    reposElement.appendChild(reposText);
    listElement.appendChild(reposElement);

    setTimeout(() => {
        axios.get('http://api.github.com/users/'+ textUSer +'/repos')
            .then(function(response){

            listElement.innerHTML = '';
                for(repos of response.data){
                    var reposElement = document.createElement('li');
                    var reposText = document.createTextNode(repos.name)
                    
                    reposElement.appendChild(reposText);
                    listElement.appendChild(reposElement);
                }
            })
            .catch(function(reject){
                alert('Erro. Site ou Usuário Inválido!')
            })
        }, 2000)
        
}

buttonElement.onclick = render;