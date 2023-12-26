
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState([]);
//   const sheetId = '78425244'; // Replace with your actual sheet ID

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (!sheetId) {
//           console.error('No sheet id provided');
//           return;
//         }

//         const response = await axios.get(`http://localhost:3001/sendpostrequest`);

//         setData(response.data.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, [sheetId]);

//   return (
//     <div>
//       <h1>Tigersheet API Example</h1>
//       <ul>
//         {Array.isArray(data) && data.length > 0 ? (
//           data.map(item => (
//             <li key={item.record_id}>
//               <p>Username: {item.username}</p>
//               <p>Password: {item.password}</p>
//               <p>Email: {item.email}</p>
//               <hr />
//             </li>
//           ))
//         ) : (
//           <p>No data available</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const sheetId = '78425244'; // Replace with your actual sheet ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!sheetId) {
          console.error('No sheet id provided');
          return;
        }

        const response = await axios.get(`http://localhost:3001/sendpostrequest`);

        setData(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [sheetId]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Tigersheet API Example</h1>
      <ul style={styles.list}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <li key={item.record_id} style={index % 2 === 0 ? styles.listItemEven : styles.listItemOdd}>
              <p style={styles.itemText}>Username: {item.username}</p>
              <p style={styles.itemText}>Password: {item.password}</p>
              <p style={styles.itemText}>Email: {item.email}</p>
              
            </li>
          ))
        ) : (
          <p style={styles.noData}>No data available</p>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItemEven: {
    marginBottom: '20px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding:20,
  },
  listItemOdd: {
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding:20,
  },
  itemText: {
    margin: '0',
    color: '#555',
  },
  hr: {
    border: '0.5px solid #ddd',
  },
  noData: {
    fontStyle: 'italic',
    color: '#888',
  },
};

export default App;
