const User = require('../models/user');

var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
module.exports=function (app)
{
	app.get('/users', (req,res)=>
	{
		User.revision((err, data)=>
		{
			res.status(200).json(data);

		});
	});


app.get('/revisados/:idCliente', (req,res)=>
	{
		//console.log(req.params);
		let idCliente=req.params.idCliente


		
		User.aceptados( idCliente, function (err, data)
		{
			
			res.status(200).json(data);

		});
	});

app.get('/nuevos/:idProducto', (req,res)=>
	{
		//console.log(req.params);
		let idcliente=req.params.idProducto


		
		User.nuevos( idcliente, function (err, data)
		{
			
			res.status(200).json(data);

		});
	});
app.get('/nuevoso', (req,res)=>
	{
		User.nuevoso((err, data)=>
		{
			res.status(200).json(data);

		});
	});
//ruta para predefinidos del administrador
app.get('/nuevospred', (req,res)=>
	{
		//se invoca el metodo para el select de predef para admin
		User.nuevosp((err, data)=>
		{
			res.status(200).json(data);

		});
	});

app.get('/completos/:idCliente', (req,res)=>
	{
	let idCliente=req.params.idCliente
		User.c(idCliente, function (err, data)
		{
			res.status(200).json(data);

		});
	});
app.get('/completost', (req,res)=>
	{
		
		User.completost((err, data)=>
		{
			res.status(200).json(data);

		});
	});
app.get('/revisadoso', (req,res)=>
	{
		//se invoca el metodo para el select de predef para admin
		User.revisadoso((err, data)=>
		{
			res.status(200).json(data);

		});
	});
// funcion para pestana de revisados en el cliente
app.get('/revisadosc/:idCliente', (req,res)=>
	{

	let idCliente=req.params.idCliente
		User.revisadosc(idCliente, function (err, data)
		{
			res.status(200).json(data);

		});
	});








	app.post('/users', (req, res) => 
	{
		const userData=
		{
			id: null,
			nombre: req.body.nombre_usuario,
			pass:  req.body.pass_usuario			
		}
		User.login(userData, function(err,us,aldo)
		{
		 

		 if(us =="indefinido")
		 {
		 	res.send(JSON.stringify({respuesta: "indefinido" }));

		 }
		 else{
		 	if (us =="nocoinciden"){
		 	res.send(JSON.stringify({respuesta: "nocoinciden" }));
		 		

		 	}
		 	else{
		 		if(us=="correcto"){
		 				res.send(JSON.stringify({respuesta: "correcto" }));
		 		}
		 		else{
		 			if(us=="correcto1"){


		 					res.send(JSON.stringify({respuesta: "correcto1",aldo: aldo }));
		 			}
		 			//res.send("mal");
		 		}
		 	}
		 }
		 /*if ( us =="correcto")
		 {
		 	res.send(true);
		 }
		 else{		 	
		 	if(us=="indefinido")
		 	{		 		
		 		res.send(false);
		 	}
		 	else
		 	{
		 		console.log('error');
		 	}
		 }*/



		});

	}); 

	app.post('/insert', (req, res) => 
	{
		
		const insertData=
		{
			id: null,
			nombre_ticket:req.body.nombre,
			sistema:req.body.sis,
			tipo:req.body.tipo,
			descripcion_ticket:req.body.descripcion,
			file:req.body.file,
			comentario_id:req.body.comentario,
			file2:req.body.file2,
			created_at:null,
			updated_at:null,
			proyecto_id:null,
			usuario_id:req.body.id_cliente,
			estatus_ticket:"en revison",
			precio:"380"
		}
			console.log(insertData);
			User.b(insertData, function(err,us)
			{
        		//console.log("---->"+us);
			});
	});
		app.post('/newuser', (req, res) => 
	{
		//console.log(req);

		bcrypt.genSalt(saltRounds, function(err, salt) {
    		bcrypt.hash(req.body.contrasena, salt, function(err, hash) {
    		console.log(hash);
    			const insertData=
		{
			id: null,
			nombre_usuario:req.body.nombre,
			pass_usuario:hash,
			telefono_usuario:req.body.telefono,
			tipo:req.body.tipo,
			empresa_id_u:null
			
		}
        // Store hash in your password DB.
		console.log(insertData);
			User.newuser(insertData, function(err,us)
			{
        		//console.log("---->"+us);
			});
	});

        
    });
});




	
	
	app.post('/cambio', (req, res) => 
	{


		const updatedData=
		{
			
			comentario_id:req.body.precio,
			
			estatus:"en proceso",
			id1:req.body.id1
		}
			//console.log(insertData);
			User.cambiop(updatedData, function(err,us)
			{
        		console.log("---->"+us);
			});
	});

	app.post('/cambiorevisado', (req, res) => 
	{
		const updatedData2=
		{
			
			comentario:req.body.comentario,
			
			estatus:"terminado",
			id1:req.body.id1
		}
			//console.log(insertData);
			User.cambior(updatedData2, function(err,us)
			{
        		console.log("----25>"+us);
			});
	});
	//ruta donde el cliente acepta el costo y le cambia el estatus a el cliente
	app.post('/cambiocliente', (req, res) => 
	{
		const updatedData2=
		{
			
			comentario:req.body.comentario,
			
			estatus:"en proceso",
			id1:req.body.id1
		}
			//console.log(insertData);
			User.cambiocliente(updatedData2, function(err,us)
			{
        		console.log("----25>"+us);
			});
	});


	app.post('/prueba', (req, res) => 
	{
		const prueba1=
		{		
			idcliente:req.body.idcliente			
		}
			User.prueba(prueba1, function(err,us)
			{
        		
        					});
	});

	app.post('/inserthash', (req, res) => 
	{
		
		const insertData=
		{
			id: null,
			nombre_usuario:req.body.nombre,
			pass_usuario:req.body.pass,
			telefono_usuario:req.body.telefono,
			tipo:req.body.tipo
			
		}
		console.log(insertData);



			//console.log(insertData);
			User.be(insertData, function(err,us)
			{
        		//console.log("---->"+us);
			});
	});
		app.post('/cambioo', (req, res) => 
	{
		const updatedData2=
		{
			
			precio:req.body.precio,
			
			estatus:"por aceptar",
			id1:req.body.id1
		}
			//console.log(insertData);
			User.cambiop(updatedData2, function(err,us)
			{
        		console.log("----25>"+us);
			});
	});



}