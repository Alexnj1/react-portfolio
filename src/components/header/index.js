import React from "react";

// array of headers
// loop over each one to render them
// useState to change the state of the item to selected when clicked?

/*
useState to change the current selected category.
if the current category does not match the categoryname then append text-muted class name
*/

function Header(props) {
  const { categories = [], currentCat, changeCat } = props;
  console.log(categories);
  // function selected (i) {
  //   console.log(categories[i].name )
  // }

  return (
    <div>
      <nav className="d-flex justify-content-around">
        <h1>Alex Noble-James</h1>
        <ul className="list-inline my-auto fw-bold">
          {categories.map((cat, i) => (
            <li
              onClick={() => changeCat(cat.name)}
              className={`list-inline-item point ${
                currentCat !== cat.name && "text-muted"
              }`}
              key={cat.name}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
