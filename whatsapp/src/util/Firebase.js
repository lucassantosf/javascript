const firebase = require('firebase');
require('firebase/firestore');

export class Firebase{
		
	constructor(){

		this._config = {
		    apiKey: "AIzaSyBqgkRIJJCTTml7zuJwFnrJ6pgFN69CsmU",
		    authDomain: "whatsappcurso-61b43.firebaseapp.com",
		    databaseURL: "https://whatsappcurso-61b43.firebaseio.com",
		    projectId: "whatsappcurso-61b43",
		    storageBucket: "whatsappcurso-61b43.appspot.com",
		    messagingSenderId: "644710644800"
		};
		this.init();
	}

	init(){

		if(!window._initializedFirebase){
			firebase.initializeApp(this._config);
			
			firebase.firestore().settings({
				timestampsInSnapshots: true
			});
			
			window._initializedFirebase = true;
		}
	}

	static db(){
		return firebase.firestore();
	}

	static hd(){
		return firebase.storage();
	}

	initAuth(){
		return new Promise((s,f)=>{
			let provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider)
			.then(result=>{
				let token = result.credential.accessToken;
				let user = result.user;
				s({user,token});
			})
			.catch(err=>{
				f(err);
			});
		});
	}
}