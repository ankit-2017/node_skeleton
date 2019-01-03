// single transformation
exports.transform = (args) => {
	return {
		'id' : args._id,
		'user_email' : args.email,
		'date' : args.createdAt
	};
}

exports.transformCollection = (data) => {
	var data = JSON.stringify(data);
	allData = JSON.parse(data)
	data = [];
	lenght = allData.length - 1
	for (var i = 0; i <= lenght; i++) {
		data.push(this.transform(allData[i]));
	}
	return data;
}
