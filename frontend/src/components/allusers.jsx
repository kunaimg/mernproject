import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function allusers() {
  const un = useNavigate();
  const [data, setdata] = useState();
  useEffect(() => {
    getdata();
  }, []);
  async function deleteuser(id) {
    const response = await axios.delete(`http://localhost:4000/deletee/${id}`);
    getdata();
  }

  async function getdata() {
    try {
      const response = await axios.get("http://localhost:4000/allusers"); // Make sure the URL matches your server route
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">s.no</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>

        {data?.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                {" "}
                <th scope="row">1</th>
                <td>{item?.name}</td>
                <td>{item?.lastname}</td>
                <td>{item?.email}</td>
                <td>{item?.password}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => un(`/update/${item?._id}`)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteuser(item?._id)}
                  >
                    Delete
                  </button>
                </td>{" "}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default allusers;
