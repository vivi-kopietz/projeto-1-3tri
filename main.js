function criaCartao (caregoria,pergunta,resposta){
    let conteiner = document.getElementById('conteiner');
    let cartao = document.createElement('article');
    cartao.classList= 'cartao';
    cartao.innerHTML= 
    <div class = "conteudo-cartao">
  <h3>categoria</h3>

<div class="pergunta-cartao">
  <p>pergunta</p>
</div>
<div clas = "resposta-cartao">
  <p>resposta</p>
 </div>
</div>

}