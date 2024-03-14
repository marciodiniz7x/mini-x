console.log('texto');

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
        id: miniX.posts.length + 1,
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
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiAtualizar = pegaPosts().find((post) => {
        return post.id === id
    });
    console.log(postQueVaiAtualizar);
    postQueVaiAtualizar.content = novoConteudo
}
atualizaContentDoPost(1, 'Novo conteúdo do post');
console.log(pegaPosts())

// DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id
    });

    console.log(listaDePostsAtualizada)
}
apagaPost(2)