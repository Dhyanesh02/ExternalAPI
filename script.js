const loadStoreAPI = () =>{
  fetch("https://fakestoreapi.com/products")
  .then(responce => responce.json())
  .them(data => console.log(data))
}