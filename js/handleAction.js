ExternalModules.NYU.MaskIPFileRepoModule.ajax("loaded", {})
    .then(response => {
        if (response.errors.length > 0) {
	    console.log("Responded error!");
	} else {
	    if (response) {
		const ipv4Regex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
		let table = document.getElementById("file-repository-table");
		$('#file-repository-table').on('init.dt', function () {
		    table.innerHTML = table.innerHTML.replace(ipv4Regex, "***.***.***.***");
		});
	    } else {
		console.error("Error in response!");
	    }
	}
    })
    .catch(err => {
	console.log("Caught " + err);
    })
    .finally(() => {
	// console.log("Finally what!");
    });
