import React, {useState} from "react";

function CategoryFilter({category}) {
  const [name, setName] = useState(true)

  const identity = name ? "" : "selected"

  function handleClick(e){
    setName(!name)
  }
  
  const list = category.map((ele) => {
    return(
      <button key={ele} onClick={handleClick} className={identity} >{ele}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {list}
    </div>
  );
}

export default CategoryFilter;
