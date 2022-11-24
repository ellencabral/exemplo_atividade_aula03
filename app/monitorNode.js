import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{//db contem a referencia ao banco
    
    const refDB = fb.ref(db,'produtos');

    fb.onChildChanged(refDB,(snapshot)=>{ //()=>{}
        if(snapshot.exists()){
            if(snapshot.key == '-MwSzyJMlNDToTGtPuhc'){
                fb.off(refDB,'child_changed')
                console.log("Callback removido!")
            }
            console.log(snapshot.val())
        }else{
            console.log("Nó não encontrado")
        }
        
    });
    
}).catch(err=>console.log(err))