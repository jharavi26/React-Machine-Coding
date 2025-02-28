import React, { useEffect, useState , useRef } from 'react';
import "./style.css";

function Multi() {
  const [searchItem , setSearchItem ] = useState("");
  const [suggestion, setSuggestion ] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedUserSet , setSelectedUserSet] = useState(new Set())

  const inputRef  = useRef(null);



  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        if(searchItem.trim() === ""){
          setSuggestion([]);
          return;
        }
      const response = await fetch(`https://dummyjson.com/users/search?q=${searchItem}`);
      const data = await response.json();
      setSuggestion(data.users);
      }
      catch(error){
        console.log(error);
      }
    }

    fetchData();
  },[searchItem]);

  const selectUser = (item)=>{
    setSelectedUser([...selectedUser, item]);
    setSelectedUserSet(new Set([...selectedUserSet , item.email]))
    setSearchItem("");
    setSuggestion([]);
    inputRef.current.focus();


  }

  const handleRemoveUser = (item)=>{
    const updateUsers = selectedUser.filter((selectedUser) =>selectedUser.id !== item.id);
  
    setSelectedUser(updateUsers);
  
    const updateEmails = new Set (selectedUserSet);
    updateEmails.delete(item.email);
    setSelectedUserSet(updateEmails);
  
  }

  const handleKeyDown = (e)=>{
    if(e.key === "Backspace" && e.target.value ==="" && selectedUser.length > 0)
    {
      const lastUser = selectedUser[selectedUser.length-1];
      handleRemoveUser(lastUser);
      setSuggestion([]);
    }
  }

   return (
    <div className='search-container'>
      <div className='search-input'>
        {
          selectedUser.map((item)=>{
            return <span key = {item.id} className='user-pill'>
              <span><img src = {item.image}></img></span>
              <span onClick={()=>handleRemoveUser(item)}>{item.firstName} &times;</span>
              </span>
          })
        }

      <div>
      <input value = {searchItem} placeholder='Search username' onChange={(e)=>setSearchItem(e.target.value)} ref = {inputRef}
      onKeyDown={handleKeyDown}
      ></input>
      {suggestion.length > 0 && (
            <ul className="suggestion-list">
              {suggestion.map((item) =>
                !selectedUserSet.has(item.email) ? (
                  <li key={item.email} onClick={() => selectUser(item)}>
                    <img src={item.image} alt={`${item.firstName} ${item.lastName}`} />
                    <span>{item.firstName} {item.lastName}</span>
                  </li>
                ) : null
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Multi;