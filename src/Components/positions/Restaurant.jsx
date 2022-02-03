import { useRef } from "react/cjs/react.development";

function Restaurent() {
  let fast_food_dishes = [
    {
      meal_name: "Lavash",
      meal_img:
        "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88.jpg",
      meal_cost: "21000",
      meal_id: "1",
    },
    {
      meal_name: "Lavash Chease",
      meal_img:
        "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88%20(%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9).jpg",
      meal_cost: "24000",
      meal_id: "2",
    },
    {
      meal_name: "Gamburger",
      meal_img:
        "https://pasta.uz/upload/products/%D0%A7%D0%B8%D0%B7%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80.jpg",
      meal_cost: "22000",
      meal_id: "3",
    },
    {
      meal_name: "Lavash Fitter",
      meal_img: "https://pasta.uz/upload/products/Fitter.jpg",
      meal_cost: "24000",
      meal_id: "4",
    },
  ];

  const addRest = useRef(null)
  const foodsAct =useRef(null)

  function foodsActive(evt){
    foodsAct.current.classList.add('modal_foods_active')
  }
  function remFoods(evt){
    foodsAct.current.classList.remove('modal_foods_active')
  }
  function actM(evt){
    addRest.current.classList.add('add_resta')
  }
  function remM(evt){
    addRest.current.classList.remove('add_resta')
  }


  return (
    <>
      <div className="order_list">
        <ul className="navigation fast_food_list">
          <li>Name</li>
          <li>Delete</li>
          <li>Foods</li>
        </ul>
        <ul className="list ">
          <li>
            <ul className="fast_food_list">
              <li>Max Way</li>
              <li>
                <button className="delete">Delete</button>
              </li>
              <li>
                <button onClick={foodsActive}>Foods</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="foods_modal " ref={foodsAct}>
      <i class="fas fa-arrow-left" onClick={remFoods}></i>
         <ul>
              {fast_food_dishes &&
                fast_food_dishes.map((row) => (
                  <li className="items" key={row.meal_id} >
                    <img src={row.meal_img} alt="foto" />
                    <div className="prices">
                      <h2>{row.meal_name}</h2>
                      <span>
                        {row.meal_cost} so'm
                        <button className="delete">Delete</button>
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
      </div>
      <div className="adding">
      <i className="fas fa-plus" onClick={actM}></i>
      </div>
      <div className="add_restaurant" ref={addRest}>
        <div className="center">
          <form>
          <i className="fas fa-times" onClick={remM}></i>
          <h1>Enter informations</h1>

            <input type="text" placeholder="Restaurant name"/>
            <input type="text" placeholder="Img URL" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Restaurent;
