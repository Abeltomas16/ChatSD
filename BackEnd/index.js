//Importando os módulos
const express=require('express')
const socket=require('socket.io')
const app=express()
const server=require('http').Server(app)
const rotas=require('./App/Rotas/Router')