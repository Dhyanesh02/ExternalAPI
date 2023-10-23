const loadStoreAPI = () =>{
  fetch("https://fakestoreapi.com/products")
  .then(responce => responce.json())
  .then(data => console.log(data))
} 

loadStoreAPI();