const mysql=require('../../node_modules/mysql');

connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'dtrez'
});

let userModel={};
//funcion para mostrar tickets
userModel.a =function (callback)
	{		
		if (connection)
			{
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
	userModel.n =function (callback)
	{		
		if (connection)
			{
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
	userModel.r =function (callback)
	{		
		if (connection)
			{
				//SELECT * FROM tickets ORDER BY id  SELECT * FROM tickets WHERE estatus_ticket = '"+en revision+"'; 
				connection.query("SELECT * FROM tickets WHERE estatus_ticket ='aceptado'",
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
	//funcion para el login
userModel.h = function (userData,callback)
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
									console.log("estoy aqui");

									return callback(null,"correcto1");
								}
								else{
									return callback(null,"correcto");
								}
								

								


								//return callback(null,"correcto");

													
							}
							else
							{ 
								return callback(null,"nocoinciden");
								console.log('usuario y contra no coinciden');
							}
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
userModel.l = function (updatedData,callback)
{
	console.log(updatedData);
	if (connection)
	{
			connection.query("UPDATE tickets SET  precio='"+updatedData.precio+"', estatus_ticket='"+updatedData.estatus+"' WHERE id='"+updatedData.id1+"';",
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
userModel.o = function (updatedData2,callback)
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


module.exports = userModel;