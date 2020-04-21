/* eslint-disable promise/always-return */
const db = require('../database/connection');

module.exports = {
    async index (Request, Response) {

        try {
            let query = db.collection('clientes').orderBy('nome');
            let response = [];
            await query.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedItem = {
                    cod: doc.id,
                    nome: doc.data().nome,
                    contato: doc.data().contato,
                    telefone: doc.data().telefone
                               };
                response.push(selectedItem);
            }
            });
            return Response.status(200).send(response);
        } catch (error) {
            console.log(error);
            return Response.status(500).send(error);
        }
        }
    };

