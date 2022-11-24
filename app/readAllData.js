import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{//db contem a referencia ao banco
    
    const refDB = fb.ref(db);
    const refNode = fb.child(refDB,"produtos");

    fb.get(refNode).then((snapshot)=>{
        if(snapshot.exists()){
            console.log(snapshot.val())
        }else{
            console.log("Dados não encontrados!")
        }
        process.exit(0)
    }).catch((erro)=>{
        console.log(erro)
        process.exit(0)
    })

}).catch(err=>console.log(err))