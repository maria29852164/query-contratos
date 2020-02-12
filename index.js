//requeriendo el modulo mysql
const mysql=require('mysql')
//creando conexion y recibe como parametro un objeto con los datos de la conexion

let connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'prueba',
    port:3000
})
//comprobar la correcta function de la conexion
connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');

    }
 });

 async function customerData(customer_id){
     //consulta a la tabla contratos campo contratos_pdf
//llama a la los campos fecha y hora de la tabla contratos que comparta el mismo customer_id 
//y donde el campo contrato_pdf no este vacio

 let query=`SELECT nombre,fecha,hora contratos WHERE contratos.$customer_id=${customer_id} AND contrato_pdf IS NOT NULL`
  await connection.query(query,(err,results,fields)=>{
                  //no habia contrato 
                if(err){
                  
                    return true
                }

                //obteniendo la fecha actual del servidor
            let fecha_servidor=new Date()
            
            //fecha actual del servidor
            let fecha=data.getDate()

            results.map(value=>{
                if(value.fecha< fecha){
                    return true
                }
                else if(value.fecha===fecha){
                    return false
                }
                else if(value.fecha==''){
                    return true
                }
            })
            
            })
           



 }

 
