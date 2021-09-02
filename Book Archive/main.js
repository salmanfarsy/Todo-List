///dom Element
const searchBtn = document.querySelector('button');
const searchField = document.querySelector('input');
const loading =  document.querySelector('.loading');
const results = document.querySelector('#results');
const number = document.querySelector('#number');



//function
//fetch data
const search = ()=>{

results.innerHTML = '';
document.querySelector('.found').style.display = 'none';
	const input = searchField.value;
	const searchBook = `http://openlibrary.org/search.json?q=${input}` 
	if(input !== ''){
		loading.style.display = 'block';
	fetch(searchBook)
	.then(data => data.json())
	.then(data => showBooks(data))
	} else {
		document.querySelector('#error').style.display = 'block';
	} 
} 

//show books on html
const showBooks = (data)=>{
	if(data.docs.length > 0){
		document.querySelector('.found').style.display = 'block';
	number.textContent =data.numFound;
	console.log(data.numFound)
	data.docs.forEach((books)=>{
		const imageUrl = `https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg`;
		  const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
        <h1>Title : ${books.title}</h1>
       	<img src='${imageUrl}' alt='${books.title}'/>
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