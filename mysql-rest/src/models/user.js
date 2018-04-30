const mysql=require('../../node_modules/mysql');

connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'Dtrez'
});

let userModel={};

userModel.getUsers=(callback)=>{
	if (connection) {
		connection.query('SELECT * FROM users ORDER BY id_usuario',
			(err, rows) =>{
				if (err) {
					throw err;
				} else {
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
			'INSERT INTO usuarios SET ?', userData,
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