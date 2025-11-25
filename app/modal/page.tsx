"use client"



interface ModalData{
    image:string;
    price:number;
    id:number;
    description:string;
    title:string;

}
export default  function  Modal(){

  


return(
    <div className="modal">
        <img src="" alt="" />
        <h2 className="title"></h2>
        <h1 className="id"></h1>
        <p className="price"></p>
        <p className="descrip"></p>
        <button className="cart"></button>
    </div>
)

}