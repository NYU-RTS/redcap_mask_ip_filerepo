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

		let tableParent = document.getElementById("file-repository-table-parent");
		const callback = function(mutationsList, observer) {
		    for (let mutation of mutationsList) {
			const target = mutation.target;
			if (target.classList && target.classList.contains("ItemListBreadcrumbs")) {
			    let dwnlButton = mutation.target.getElementsByClassName("btn btn-xs btn-defaultrc text-successrc")[0]; 
			    if (dwnlButton && dwnlButton.innerText.trim() === "Download file list") {
				dwnlButton.disabled = true;
				break;
			    }
			}
		    }
		};
		const observer = new MutationObserver(callback);
		const config = { childList: true, subtree: true };
		observer.observe(tableParent, config);
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
