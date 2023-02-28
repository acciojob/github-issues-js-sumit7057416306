//your code here
pageNumH3 = document.querySelector('span');
nxtBtn = document.getElementById('load_next');
prvBtn = document.getElementById('load_prev');

let list;

let pageNumber = 1;

function fetchData(pageNumber) {
	fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
		.then((response) =>response.json())
		.then((data) => {
			// console.log(data.id);
			let list = document.createElement('ul');
            list.className = "list";
			for (let d of data) {
				// console.log(d.id);
                let li = document.createElement('li');
                li.className = "item";
                li.innerHTML = d.id;
                list.appendChild(li);
			}
            document.body.appendChild(list);
		})
}

nxtBtn.addEventListener('click', () => {
	pageNumber++;
	if(pageNumber == 2){
		prvBtn.disabled = false;
	}
	let list = document.querySelector('.list');
    let item = document.getElementsByClassName('item');
    console.log(item);
    list.remove(item);
	fetchData(pageNumber);
	pageNumH3.innerText = pageNumber;
});

prvBtn.addEventListener('click', () => {
	if(pageNumber <= 1){
		// prvBtn.disabled = true;
	}
	else{
        pageNumber--;
		// prvBtn.disabled = false;
        let list = document.querySelector('.list');
        let item = document.getElementsByClassName('item');
        // console.log(item);
        list.remove(item);
        fetchData(pageNumber);
        pageNumH3.innerText = pageNumber;
	}
});

fetchData(1);
