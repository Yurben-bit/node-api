//CREA EL SERVIDOR CON EXPRESS
const express=require('express'); //importar libreria

const app=express(); //crear la aplicacion

//levantar e toddas las interfaces
app.listen(3000,'0.0.0.0',()=>{
    console.log(`API de yumber corriendo en puerto 3000`);
});