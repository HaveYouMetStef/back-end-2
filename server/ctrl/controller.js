const houses = require('../db.json')

let id = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const {id} = req.params
        const index = houses.findIndex((element) => element.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
       let {price} = req.body 
       let {address} = req.body
       req.body.id = id 
       req.body.price = +price
       req.body.address = address 
       houses.push(req.body)
       res.status(200).send(houses)
       id++
    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        const index = houses.findIndex((houses) => houses.id === +id)
        if(type === 'plus') {
            houses[index].price+=10000
        } else if(type === 'minus') {
            houses[index].price-= 10000
        }
        res.status(200).send(houses)
    }
}