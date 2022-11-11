import * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{//db contem a referencia ao banco
    const refNode = fb.child(db,"produtos");

    fb.get(refNode).then((snapshot)=>{
        if(snapshot.exists()){
            console.log(snapshot.val())
        }else{
            console.log("Nó não encontrado")
        }
        process.exit(0)
    }).catch((erro)=>{
        console.log(erro)
        process.exit(0)
    })

}).catch(err=>console.log(err))