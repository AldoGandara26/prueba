const User = require('../models/user');

module.exports=function (app)
{
	app.get('/users', (req,res)=>
	{
		User.revision((err, data)=>
		{
			res.status(200).json(data);

		});
	});


app.get('/revisados', (req,res)=>
	{
		User.aceptados((err, data)=>
		{
			res.status(200).json(data);

		});
	});

app.get('/nuevos/:idProducto', (req,res)=>
	{
		
		let idProducto=req.params.idProducto

		
		User.nuevos( idProducto, function (err, data)
		{
			console.log(data);
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

app.get('/completos', (req,res)=>
	{
	
		User.c((err, data)=>
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
			created_at_ticket:null,
			updated_at_ticket:null,
			proyecto_id:null,
			usuario_id:null,
			estatus_ticket:"en revison",
			precio:"380"
		}
			//console.log(insertData);
			User.b(insertData, function(err,us)
			{
        		//console.log("---->"+us);
			});
	});

	app.post('/cambio', (req, res) => 
	{

		const updatedData=
		{
			
			precio:req.body.precio,
			
			estatus:"aceptado",
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



}