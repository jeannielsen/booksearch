// Importing React from the react library.  This is needed because what appears to be html code is actually jsx and failure to import react would cause the a fail because 'React' must be in scope when using JSX
import React from "react";
// Imports user generated style sheet
import "./style.css";


// This component exports the List children props in an unordered list
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);
// This component exports the ListItem children props in an ordered list
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
