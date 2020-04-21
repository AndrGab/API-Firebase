const db = require('../database/connection');

module.exports = {


  // Cria um item no banco
async create(Request, Response) {
     
        try {
          await db.collection('clientes').doc('/' + Request.body.cod + '/')
              .create({
                nome: Request.body.nome,
                contato: Request.body.contato,
                telefone: Request.body.telefone
              });
          return Response.status(200).send('ok');
        } catch (error) {
          console.log(error);
          return Response.status(500).send(error);
        }
},

async index (Request, Response) {

  try {
    const document = db.collection('clientes').doc(Request.params.cod);
    let ficha = await document.get();
    let list = ficha.data();
    return Response.status(200).send(list);
} catch (error) {
    console.log(error);
    return Response.status(500).send(error);
}
},

async delete (Request, Response) {
  try {
      const document = db.collection('clientes').doc(Request.params.cod);
      await document.delete();
      return Response.status(200).send();
  } catch (error) {
      console.log(error);
      return Response.status(500).send(error);
  }
  },

  async update (Request, Response) {
    try {
        const document = db.collection('clientes').doc(Request.params.cod);
        await document.update({
          nome: Request.body.nome,
          contato: Request.body.contato,
          telefone: Request.body.telefone
        });
        return Response.status(200).send();
    } catch (error) {
        console.log(error);
        return Response.status(500).send(error);
    }
    }

};
