const profissional = {
    nome : "Fulano",
        idade : "190",
        tecnologias : [           
                { nometecnologia : "C++", 
                especialidade: 'Desktop' },
                { nometecnologia: "JavaScript", 
                especialidade: 'Web/Mobile' }
        ]
    
}

console.log (`O usuário ${profissional.nome} tem ${profissional.idade} anos e trabalha com ${profissional.tecnologias[01].nometecnologia}`)