import {ClassEvent} from './../util/ClassEvent';

export class Model extends ClassEvent{
	
	constructor(){
		super();
		this._data = {};
	}

	fromJSON(json){
		this._data = Object.assign(this._data, json);
		this.trigger('datachange',this.toJSON());
	}

	toJSON(){
		return this._data;
	}
}
/*let userRef = User.findByEmail(response.user.email);
				userRef.set({
					name: response.user.displayName,
					email: response.user.email,
					photo: response.user.photoURL
				}).then(()=>{
					this.el.appContent.css({display:'flex'});
				});
*/