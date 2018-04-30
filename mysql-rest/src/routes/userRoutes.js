const User = require('../models/user');

module.exports=function (app){
	app.get('/users', (req,res)=>{
		User.getUsers((err, data)=>{
			res.status(200).json(data);

		}
			);
		

	});

	app.post('/users', (req, res) => {
//console.log('jalando')
//console.log('4');
//console.log(req.body.nombre_usuario);
	const userData={

			id: null,
			nombre: req.body.nombre_usuario,
			pass: req.body.pass_usuario,
			//textarea:req.body.textarea
			//created_at:null,
			//updated_at:null

		}
		//console.log(userData);
		 //console.log('estas aqui mor');
		User.getUsers(userData, (err, data)=>{
			//console.log('3');
			if (data ) {
				//console.log(data, userData);
				res.json({
					success:true, 
					msg: 'usuario Eencontrado',
					data: data
				})
			} else{
				res.status(500).json({
					success:false,
					msg:'error',
					msg: userData
				})
			}


		})
	}); 
}
