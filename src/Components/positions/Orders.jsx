import { useRef } from "react";

function Orders() {

  const modalActive = useRef(null)

  function actModal(evt){
    modalActive.current.classList.add('modal_active')
  }
  function remModal(evt){
    modalActive.current.classList.remove('modal_active')

  }

  return (
    <>
      <div className="order_list">
        <ul className="navigation">
          <li>Name</li>
          <li>Delete</li>
          <li>Foods</li>
          <li>Read more</li>
        </ul>
        <ul className="list">
          <li>
            <ul>
              <li>Eshmatxo'ja</li>
              <li>00:50</li>
              <li>Evos</li>
              <li>
                <button onClick={actModal}>more</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="modal " ref={modalActive}>
        <div className="center">
        <i className="fas fa-times" onClick={remModal}></i>
        <h2>Evos</h2>
          <h1>eshmatakani</h1>
          
          
          <span>toshkent chilonzor</span>
          <span>20:00</span>
          <p>13243243532</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, atque.</p>
          <h3>total 45000</h3>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
}

export default Orders;
