
function ClozeCard(text,cloze){

	if(this instanceof ClozeCard){
		this.fullText = text;
		this.cloze = cloze;
		if(this.fullText.includes(this.cloze) === false){
			throw "full text does not contain " + this.cloze;
		}
		this.partial = this.fullText.replace(this.cloze,"...");

	}else{
		return new ClozeCard(text,cloze);
	}
}
s
ClozeCard.prototype = {
	displayCard : function(){
		console.log(this.fullText,'----',this.cloze);
	}
}

module.exports = ClozeCard;