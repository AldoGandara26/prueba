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
					console.log("estamos aqui");
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
								return callback(null,'correcto');					
							}
							else
							{ 
								return callback(null,"nocoinciden");
								console.log('usuario y contra no coinciden');
							}
						}
					}
<<<<<<< HEAD
=======


					//console.log(rows);


					(callback)(null, rows);
>>>>>>> caf18e9342dd4924afd4e63057055b73f8f502a8
				}
			})
	}
	
};
<<<<<<< HEAD
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
=======

userModel.insertUser = (userData, callback)=>{
	console.log('ESTE E USER DATA')
		console.log(userData)
	if (connection) {
		connection.query(
			'INSERT INTO usuers SET ?', userData,
			(err,result)=>{
				if (err) {
					throw err;
				} else{
					(callback)(null,
					 {'insertId': result.insertId})
>>>>>>> caf18e9342dd4924afd4e63057055b73f8f502a8
				}
			})
	};
};


module.exports = userModel;