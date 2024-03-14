// [CRUD] JavaScript BÁSICO

const miniX = {

    usuarios: [
        {
            username: 'marciodiniz7x',
        }
    ],
    posts: [
        {   
            id: 1,
            owner: 'marciodiniz7x',
            content: 'Meu primeiro post'
        }
    ],
};

// CREATE
function criaPost(dados) {
    miniX.posts.push({
        owner: dados.owner,
        content: dados.content
    })
}
criaPost({owner: 'marciodiniz7x', content: 'Segundo post'});

// console.log(miniX.posts);

// READ
function pegaPosts() {
    return miniX.posts;
}
console.log(pegaPosts())

// UPDATE
function atualizaContentDoPost() {

}
atualizaContentDoPost('Novo conteúdo do post');

// DELETE