import React, {Component} from "react";
import { Button } from "./Button";
import { IoIosCloudCircle } from "react-icons/io";

// class compornentの書き方

// class Sample extends Component{
//   render(){
//     return(
//       <h3>
//         <FaApple />
//       </h3>
//     )
//   }
// }

// function compornentの書き方
const Sample = () =>{
  return(
    <h3>
      <IoIosCloudCircle />
    </h3>
  );
};
const TableBodyCell = props => (
  <td style={{ padding: "5px 10px", border: "solid 1px #ccc" }}>
    {props.children}
  </td>
);
const TableHeaderCell = props => (
  <th
    style={{
      padding: "5px 10px",
      border: "solid 1px #ccc",
      backgroundColor: "#ddd"
    }}
  >
    {props.children}
  </th>
);

export const Table = ({
  students,
  deleteStudent,
  updateStudent,
  pageNationStudent
}) => {
  let chankArray = pageNationStudent();
  return (
    <div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "solid 1px #ccc"
        }}
      >
        <thead>
          <tr>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>NAME</TableHeaderCell>
            <TableHeaderCell>AGE</TableHeaderCell>
            <TableHeaderCell>ACTION</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {chankArray.length ? (
            chankArray.map(s => (
              <tr key={s.id}>
                <TableBodyCell>{s.id}</TableBodyCell>
                <TableBodyCell>{s.name}</TableBodyCell>
                <TableBodyCell>{s.age < 20 ? <Sample/> :s.age}</TableBodyCell>
                <TableBodyCell>
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      deleteStudent(s.id);
                    }}
                    title="delete"
                  />
                  <Button
                    style={{ marginRight: 10 }}
                    onClick={e => {
                      e.preventDefault();
                      updateStudent(s.id);
                      console.log("CLICKED");
                    }}
                    title="update"
                  />
                </TableBodyCell>
              </tr>
            ))
          ) : (
            <tr>
              <td>no student</td>
            </tr>
          )}
          
        </tbody>
      </table>
    </div>
  );
};
export default Sample
