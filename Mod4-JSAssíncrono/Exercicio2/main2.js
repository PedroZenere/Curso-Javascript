var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var listElement = document.querySelector('#app ul');

function render(){
    textUSer = inputElement.value; 
    axios.get('http://api.github.com/users/'+ textUSer +'/repos')
        .then(function(response){
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
}

buttonElement.onclick = render;