function Addmeal() {
  return (
    <>
      <div className="add_foods">
        <form>
          <input type="text" placeholder="Meal name" />
          <input type="text" placeholder="Img URL" />
          <input type="number" placeholder="Cost"/>
          <select> 
            <option value="1">Evos</option>
            <option value="1">Max Way</option>
            <option value="1">Kfc</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Addmeal;
