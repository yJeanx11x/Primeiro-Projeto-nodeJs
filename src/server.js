const express = require('express')
const app = express()
app.use(express.json())

const Produtos = require('../models/Produtos')
const Produto = require('../models/Produtos')

app.post(("/cadastro"), (req, res) => {
    const { nome, preco, descricao } = req.body

    Produtos.create({
        nome: nome,
        preco: preco,
        descricao: descricao
    }).then(function () {
        res.send('Produto Cadastrado com sucesso!')
    }).catch(function (erro) {
        res.send("Erro ao cadastrar o produto", erro)
    })

})
app.get(("/"), (req, res) => {

    Produtos.findAll().then(function (produtos) {
        res.send(produtos)
    }).catch(function (erro) {
        res.send("Erro ao Buscar os dados", erro)
    })
})

app.get(("/:nome"), (req, res) => {
    const { nome } = req.params

    Produtos.findAll({ where: { "nome": nome } }).then((produto)=> {
        
        res.send(produto)
    }).catch((erro)=>{
        res.send('Erro na Busca',erro)
    })

})
app.patch(("/atualizar/:id"), (req, res) => {
    const { nome, preco, descricao } = req.body
    const { id } = req.params.id
    Produto.update({
        nome: nome,
        preco: preco,
        descricao: descricao
    },
        { where: { "id": id } }

    ).then(function () {
        res.send('Sucesso ao atualizar os dados do banco de dados')
    }).catch(function (erro) {
        res.send('Erro ao atualizar os dados do produto', erro)
    })
})
app.delete("/deletar/:id", (req, res) => {
    const { id } = req.params
    Produto.destroy({ where: { id } }).then(function () {
        res.send('Produto deletado com sucesso!')
    }).catch(function (erro) {
        res.send('Erro ao deletar produto', erro)
    })

})







app.listen(3333, () => {
    console.log('Servidor está Rodando !')
})