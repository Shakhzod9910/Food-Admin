import { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Orders from "../positions/Orders"; 
import Farstfood from "../positions/Fastfood";
import Addmeal from "../positions/Addmeal";
import Restaurant from "../positions/Restaurant";

function Home() {

  const ordersHover = useRef(null)
  const fastHover = useRef(null)
  const restHover = useRef(null)
  const addHover = useRef(null)

  const [positions,setPositions] = useState('orders')
  function orderActive(evt){
    setPositions('orders')
    evt.currentTarget.classList.add('hoverbcg')
    fastHover.current.classList.remove('hoverbcg')
    restHover.current.classList.remove('hoverbcg')
    addHover.current.classList.remove('hoverbcg')
  }
  function fastActive(evt){
    setPositions('fastfood')
    evt.currentTarget.classList.add('hoverbcg')
    ordersHover.current.classList.remove('hoverbcg')
    restHover.current.classList.remove('hoverbcg')
    addHover.current.classList.remove('hoverbcg')
  }
  function resActive(evt){
    setPositions('restaurant')
    evt.currentTarget.classList.add('hoverbcg')
    fastHover.current.classList.remove('hoverbcg')
    ordersHover.current.classList.remove('hoverbcg')
    addHover.current.classList.remove('hoverbcg')
  }

  function addMactive(evt){
    setPositions('addmeal')
    evt.currentTarget.classList.add('hoverbcg')
    fastHover.current.classList.remove('hoverbcg')
    restHover.current.classList.remove('hoverbcg')
    ordersHover.current.classList.remove('hoverbcg')
  }
  return (
    <>
      <section className="home">
        <div className="containerr">
          <div className="top">
            <h1></h1>
          </div>
          <div className="main">
            <div className="navbar">
              <ul>
                <li className="hoverbcg" onClick={orderActive} ref={ordersHover}>
                  <i className="fab fa-first-order"></i>Orders
                </li>
                <li onClick={fastActive} ref={fastHover}>
                  <i className="fas fa-hamburger"></i>Fast Food
                </li>
                <li onClick={resActive} ref={restHover}>
                  <i className="fas fa-utensils"></i>National restaurants
                </li>
                <li onClick={addMactive} ref={addHover}>
                <i className="fas fa-plus"></i>Add Meal
                </li>
              </ul>
            </div>
            <div className="mainPage">
                {positions == 'orders' && <Orders/>}
                {positions == 'fastfood' && <Farstfood/>}
                {positions == 'restaurant' && <Restaurant/>}
                {positions == 'addmeal' && <Addmeal/>}
               
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
