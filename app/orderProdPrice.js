import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{//db contem a referencia ao banco
    
    const refDB = fb.ref(db);
    const refNode = fb.child(refDB,"produtos");

    const consulta = fb.query(refNode,fb.orderByChild('preco'))
    
    fb.onChildAdded(consulta,dados => {
        console.log(dados.key)
        console.log(dados.val())
    })

}).catch(err=>console.log(err))