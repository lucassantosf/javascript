module.exports = {

	user:(app, req, res)=>{
		//validaçoes de dados
		req.assert('_name','O nome é obrigatório.').notEmpty();
		req.assert('_email','O email esta inválido').notEmpty().isEmail();

		let errors = req.validationErrors();

		if(errors) {
			app.utils.error.send(errors, req, res);
			return false;
		}else{
			return true;
		}
	}

}