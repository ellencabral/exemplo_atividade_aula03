import * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connetToFB.js";

dbConnect()
.then(db=>{//db contem a referencia ao banco

    const refDB = fb.ref(db,'produtos');

    fb.onValue(refDB,(snapshot) => {
        console.log(snapshot.val())
        process.exit(0)
    })

}).catch(err=>console.log(err))