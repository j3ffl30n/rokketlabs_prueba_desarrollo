const express = require('express')
const app = express();

const handlers = ({ Pets }) => ({
    get: async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed

        const result = await Pets.find({}).exec()
        res.status(200).send(result);
    },
    post: async (req, res) => {
        const { body } = req;
        const pet = new Pets(body);

        await pet.save()
        res.sendStatus(204);
    },
})

module.exports = handlers