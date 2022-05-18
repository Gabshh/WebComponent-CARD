'use strict'

const url = 'https://api-senai.herokuapp.com/alunos'

const readAlunos = async (id='') => {
    const response = await fetch(`${url}/${id}`)
    return await response.json()
}

export {
    readAlunos
}