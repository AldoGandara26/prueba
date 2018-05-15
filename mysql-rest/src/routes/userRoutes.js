const User = require('../models/user');

module.exports=function (app)
{
	app.get('/users', (req,res)=>
	{
		User.a((err, data)=>
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
		User.h(userData, function(err,us)
		{
		 console.log(us);

		 if(us =="indefinido")
		 {
		 	res.send(JSON.stringify({respuesta: "indefinido" }));

		 }
		 else{
		 	if (us =="nocoinciden"){
		 	res.send(JSON.stringify({respuesta: "nocoinciden" }));
		 		console.log("no");

		 	}
		 	else{
		 		if(us=="correcto"){
		 				res.send(JSON.stringify({respuesta: "correcto" }));
		 		}
		 		else{
		 			if(us=="correcto1"){

		 					res.send(JSON.stringify({respuesta: "correcto1" }));
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
			estatus_ticket:"en revison"
		}
			console.log(insertData);
			User.b(insertData, function(err,us)
			{
        		console.log("---->"+us);
			});
	});
}