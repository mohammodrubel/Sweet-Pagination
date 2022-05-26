
import React, { useEffect, useState } from "react";
import SweetPagination from "sweetpagination";


const App = () => {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const [items,setItems] = useState([])


 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(data => setItems(data))

 },[])

  return (
    <>
      {
        currentPageData.map(item => <p>{item.name}</p>)
      }

<SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={10}
        getData={items}
        navigation={true}
      />

    </>
  );
};

export default App;