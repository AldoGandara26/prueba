const mysql=require('../../node_modules/mysql');

connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'dtrez'
});

let userModel={};

userModel.getUsers=(userData, callback)=>{
	//console.log('1');
	//console.log(userData);
	if (connection) {
		connection.query("SELECT * FROM users WHERE nombre_usuario = '"+userData.nombre+"';",
		//connection.query("SELECT * FROM users ",
			(err, rows) =>{

				if (err) {
					let error;
					//console.log('usuario no encontrado');
					//console.log('usuarios'.userData);

					//usuario no encontrado
				} else {

					if (rows.pass_usuario == userData.pass_usuario) {
					console.log("correctos");
					//console.log(userData.pass_usuario);
					}
					else
					{
						console.log("el usuario y la contra no coinciden");
					//console.log(rows.pass_usuario);
					}


					//console.log(rows);


					callback(null, rows);
				}
			})
	}

};

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
					callback(null,
					 {'insertId': result.insertId})
				}
			})
	};
}


module.exports = userModel;