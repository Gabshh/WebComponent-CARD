'use strict'

import { readAlunos } from './alunos.js'

class card extends HTMLElement {

    // props = {
    //     fotinha: "",
    //     nominho: "",
    //     turminha: "" 
    // }

    constructor() {
        super();
        
        // this.getProps(this.dataset)

        this.build()
    }

    // getProps({ fotinha, nominho, turminha }) {
    //     this.props.fotinha  = fotinha
    //     this.props.nominho  = nominho
    //     this.props.turminha = turminha
    // }

    build() {
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles(foto))
        shadow.appendChild(this.createCard(nome, turma))
    }
    
    styles(foto) {
        const style = document.createElement('style')
        
        // const { fotinha } = this.props
    

        style.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            .card{
                height: 250px;
                width: 250px;
                border-radius: 20px;
                background-color: slateblue;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                margin-bottom: 10px;
                transition: all 0.5s ease;
            }

            .card:hover{
                transform: scale(1.05);
            }
            
            .card-text{
                color: #fff;
                width: 50%;
                padding: 4px;
                text-align: center;
                text-transform: uppercase;
                border-radius: 12px;
                box-shadow: 0 0 5px #000;
            }
            
            .card-image{
                background-color: white;
                width: 50%;
                height: 50%;
                border-radius: 50%;
                background-image: url(${foto});
                background-size: cover;
                box-shadow: inset 0 0 4px;
            }

            .azul{
                background-color: violet;
            }
        `
        
        return style
    }

    createCard(nome, turma) {

        // const { nominho, turminha } = this.props

        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <div class="card">
                <div class="card-text">${nome}</div>
                <div class="card-image"></div>
                <div class="card-text">${turma}</div>
            </div> 
        `

        return card
    }

    // bgcolor() {
    //     const color = getAttribute('data-bgcolor') ?? '#f00'
    //     return color
    // }



}

const updateCard = async () => {
    const cardsContainer = document.getElementById('card-container')

    const alunos = await readAlunos()

    
} 

updateCard()

customElements.define('card-aluno', card)