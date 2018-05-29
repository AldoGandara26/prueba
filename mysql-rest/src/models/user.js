const mysql=require('../../node_modules/mysql');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'dtrez'
});

let userModel={};
//funcion para mostrar tickets
userModel.revision =function (callback)
	{		
		if (connection)
			{

		/*	bcrypt.genSalt(saltRounds, function(err, salt) {
    		bcrypt.hash(insertData.pass_usuario, salt, function(err, hash) {
    		console.log(hash);
        // Store hash in your password DB.
    });
});*/


				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='en revison'",
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					
					return callback(null, rows);
				}})	
			}	
	};
	userModel.prueba =function (prueba1, callback)
	{	
	console.log(prueba1);	
		if (connection)
			{
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM users WHERE id= '"+prueba1.idcliente+"'; ",
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					console.log(rows);
					return callback(null, rows);

				}})	
			}	
	};
	userModel.nuevos =function (idcliente, callback )
	{	
		
		if (connection)
			{
				console.log(idcliente);
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='en revison'    AND usuario_id = '"+idcliente+"'; ", 
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					//console.log(rows);
					
					return callback(null, rows);
				}})	
			}	
	};
		userModel.nuevoso =function (callback)
	{		
		if (connection)
			{
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='en revison' AND tipo='t2'  ",
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					
					return callback(null, rows);
				}})	
			}	
	};
//se hace el select para los tickets predefinidos del administrados
	userModel.nuevosp =function (callback)
	{		
		if (connection)
			{
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='en revison' AND tipo='t1'  ",
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					
					return callback(null, rows);
				}})	
			}	
	};
	userModel.aceptados =function (idCliente, callback)
	{	
	console.log(idCliente);	
		if (connection)
			{
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='en proceso' And usuario_id='"+idCliente+"'; ",
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					//console.log(rows);
					return callback(null, rows);
				}})	
			}	
	};
	//select de completos para el cliente
	userModel.c =function (idCliente, callback)
	{		
		if (connection)
			{
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='terminado' AND usuario_id='"+idCliente+"'; ",
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					
					return callback(null, rows);
				}})	
			}	
	};
	//select de completos para el administrador
	userModel.completost =function ( callback)
	{		
		if (connection)
			{
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='terminado' ",
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					
					return callback(null, rows);
				}})	
			}	
	};
		userModel.revisadoso =function ( callback)
	{		
		if (connection)
			{
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='en proceso' ",
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					
					return callback(null, rows);
				}})	
			}	
	};
		userModel.revisadosc =function (idCliente , callback)
	{		
		if (connection)
			{
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='por aceptar' AND usuario_id='"+idCliente+"'; ",
				(err, rows) =>
				{
				if (err)
				 {
					throw err;
				} else {
					
					return callback(null, rows);
				}})	
			}	
	};


	//funcion para el login
userModel.login = function (userData,callback)
{
	if (connection)
	{	
		connection.query("SELECT * FROM users WHERE nombre_usuario = '"+userData.nombre+"';",
			(err, rows) =>
			{
				if (err)
				{
					let error;
					console.log('a ocurrido algo');
				} 
				else 
				{
					if(!rows)
					{
						console.log('no hay registros');
					}
					else
					{
						if(rows[0] ==  undefined || rows[0] == "undefined")
						{
					
							//let indefinido="indefinido";
							return callback(null,"indefinido");
						}
						else
						{


							if ( rows[0].pass_usuario == userData.pass) 
							{ 
								if(rows[0].tipo=="1"){

								
								const aldo=rows[0].Id;
								//console.log(aldo);
									return callback(null,"correcto1",aldo);
								}
								else{
								const aldo=rows.Id;
								//console.log(aldo);

									return callback(null,"correcto",);
								}
								

								


								//return callback(null,"correcto");

													
							}
							else
							{ 
								return callback(null,"nocoinciden");
								console.log('usuario y contra no coinciden');
							}

							/*



							bcrypt.compare(rows[0].pass_usuario, userData.pass, function(err, result){
								if(result)
									{
										if(rows[0].tipo=="1"){
											const aldo=rows[0].Id;
								//console.log(aldo);
									return callback(null,"correcto1",aldo);
								}
									}
									else{
										if (rows[0].tipo=="0"){
											const aldo=rows[0].Id;
								//console.log(aldo);

									return callback(null,"correcto",aldo);

										}
										else{
											console.log(result);
											return callback(null,"nocoinciden");
								console.log('usuario y contra no coinciden');


										}
										
									}
							});















							*/


						}
					}
				}
			})
	}
	
};
//funcion para insertar nuevos tickets
userModel.b = function (insertData,callback)
{
	if (connection)
	{
			connection.query('INSERT INTO tickets SET ?', insertData,
			(err,result)=>
			{
				if (err)
				{
					console.log(err);
					//throw err;
					return callback(null,"error");
				} 
				else
				{
					//console.log("estamos cerca");
					return callback(null,"correcto");
					//callback(null,
					//{'insertId': result.insertId})
				}
			})
	};
};
userModel.newuser = function (insertData,callback)
{
	if (connection)
	{
		connection.query('INSERT INTO users SET ?', insertData,
			(err,result)=>
			{
				if (err)
				{
					console.log(err);
					//throw err;
					return callback(null,"error");
				} 
				else
				{
					//console.log("estamos cerca");
					return callback(null,"correcto");
					//callback(null,
					//{'insertId': result.insertId})
				}
			})
	};
};
userModel.be = function (insertData,callback)
{
	if (connection)
	{
		/*bcrypt.genSalt(saltRounds, function(err, salt) {
    		bcrypt.hash(insertData.pass_usuario, salt, function(err, hash) {
    		console.log(hash);
        // Store hash in your password DB.
    });
});*/
			connection.query('INSERT INTO users SET ?', insertData,
			(err,result)=>
			{
				if (err)
				{
					console.log(err);
					//throw err;
					return callback(null,"error");
				} 
				else
				{
					//console.log("estamos cerca");
					return callback(null,"correcto");
					//callback(null,
					//{'insertId': result.insertId})
				}
			})
	};
};


userModel.cambiop = function (updatedData2,callback)
{
	//console.log(updatedData);
	if (connection)
	{
		//
			connection.query("UPDATE tickets SET   estatus_ticket='"+updatedData2.estatus+"' WHERE id='"+updatedData2.id1+"'; ",
			(err,result)=>
			{
				if (err)
				{
					console.log(err);
					//throw err;
					return callback(null,"error");
				} 
				else
				{
					//console.log("estamos cerca");
					return callback(null,"correcto");
					//callback(null,
					//{'insertId': result.insertId})
				}
			})
	};
};
userModel.cambiocliente = function (updatedData2,callback)
{
	//console.log(updatedData);
	if (connection)
	{
		//
			connection.query("UPDATE tickets SET   estatus_ticket='"+updatedData2.estatus+"' WHERE id='"+updatedData2.id1+"'; ",
			(err,result)=>
			{
				if (err)
				{
					console.log(err);
					//throw err;
					return callback(null,"error");
				} 
				else
				{
					//console.log("estamos cerca");
					return callback(null,"correcto");
					//callback(null,
					//{'insertId': result.insertId})
				}
			})
	};
};
userModel.cambior = function (updatedData2,callback)
{
	//console.log(updatedData);
	if (connection)
	{
			connection.query("UPDATE tickets SET  comentario_id='"+updatedData2.comentario+"', estatus_ticket='"+updatedData2.estatus+"' WHERE id='"+updatedData2.id1+"';",
			(err,result)=>
			{
				if (err)
				{
					console.log(err);
					//throw err;
					return callback(null,"error");
				} 
				else
				{
					//console.log("estamos cerca");
					return callback(null,"correcto");
					//callback(null,
					//{'insertId': result.insertId})
				}
			})
	};
};

userModel.cambiop = function (updatedData2,callback)
{
	console.log(updatedData2);
	if (connection)
	{
			connection.query("UPDATE tickets SET  comentario_id='"+updatedData2.comentario_id+"', estatus_ticket='"+updatedData2.estatus+"' WHERE id='"+updatedData2.id1+"';",
			(err,result)=>
			{
				if (err)
				{
					console.log(err);
					//throw err;
					return callback(null,"error");
				} 
				else
				{
					//console.log("estamos cerca");
					return callback(null,"correcto");
					//callback(null,
					//{'insertId': result.insertId})
				}
			})
	};
};



module.exports = userModel;