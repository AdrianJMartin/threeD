var ajm = {};

ajm.createDomElement = function( element , config , append , complete ){

	var e = document.createElement(element);

	for( var i in config){
		e[i] = config[i];
	}

	if(complete){
		e.addEventListener( "load" , function(evt){
			complete();
		});
	}

	append.appendChild(e);

};
