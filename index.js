/* 

OBJETIVO: QUANDO CLICARMOS NA ABA TEMOS QUE MOSTRAR O CONTEÚDO DA ABA QUE FOI SELECIONADA PELO USUÁRIO
E ESCONDER O CONTEÚDO DA ABA ANTERIOR.

-PASSO 1: dar um jeito de pegar os elementos que representam as abas no HTML.

- PASSO 2:   dar um jeito de identificar o clique no elemento da aba.

-PASSO 3: quando o usuário clicar, desmarcar a aba selecionada.

-PASSO 4: marcar a aba clicada como selecionado.

-PASSO 5: esconder o conteúdo anterior.

-PASSO 6: mostrar o conteúdo da aba selecionada.

*/

// -PASSO 1: dar um jeito de pegar os elementos que representam as abas no HTML.

const abas = (document.querySelectorAll(".aba"));



abas.forEach(aba => {
    // - PASSO 2:   dar um jeito de identificar o clique no elemento da aba.
    
    aba.addEventListener("click", function() {
        //-PASSO 3: quando o usuário clicar, desmarcar a aba selecionada.
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        // -PASSO 4: marcar a aba clicada como selecionado.

        aba.classList.add("selecionado")

        //-PASSO 5: esconder o conteúdo anterior.
        
        
         }

        )    
           }   )
        