///dom Element
const searchBtn = document.querySelector('button');
const searchField = document.querySelector('input');
const loading =  document.querySelector('.loading');
const results = document.querySelector('#results');



//function
//fetch data
const search = ()=>{
loading.style.display = 'block';
results.innerHTML = '';
	const input = searchField.value; 
	const searchBook = `http://openlibrary.org/search.json?q=${input}`
	fetch(searchBook)
	.then(data => data.json())
	.then(data => showBooks(data))
} 

//show books on html
const showBooks = (data)=>{
	if(data.docs.length > 0){
	console.log(data.docs[0])
	data.docs.forEach((books)=>{
		const img = [];
		// const url = `https://covers.openlibrary.org/b/id/${books.cover_i}-L.jpg`
		// fetch(url).then(data=> data.json()).then(data=> console.log(data));
		  const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
        <h1>Title : ${books.title}</h1>
        <h2>Author : ${books.author_name}</h2>
        <h3>Publish Year : ${books.publish_year}</h3>
        <h4>Publisher : ${books.publisher}</h4>
        <h5>First Publish Year : ${books.first_publish_year}</h5>
        `
        results.appendChild(div);
	})
	// const bookHtml = data.docs.map((book)=>{
	// 	return(`<div class='book'>
	// 		<h1> + ${book.title} </h1>
	// 		<div/>
	// 		`)
	// })
	// results.innerHTML = bookHtml;
	loading.style.display = 'none';		
}
	
}

///event listener
searchBtn.addEventListener('click', search);