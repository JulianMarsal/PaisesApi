const responseValues = require('./responseValues');

exports.success = (req, res, countries, status)=>{
   res.status(status || 200).send({
       body: countries,
       error :"",
   });
}


exports.error = (req, res, countries, status, details)=>{
    //Un poco redundante, pero manejo la response así para que se imprima así y no darle al usuario información privada/privilegiada.
    console.error("[Response error] " + details  );
    //Normalmente le daríamos al usuario un internal error para no darle mucha información, pero como acá estoy buscando que sea muy descriptivo, comente las función responseValues y le puse el error que arroja.
    res.status(status || 500).send({
        error : `${details}`,//responseValues(status),
        //Solo por visualización comento el body: pero debería estar al ser una response.
        //body: ""
    })
}