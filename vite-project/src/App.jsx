import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')


  const deleteItem = (id) => {
    const conformation=window.confirm('Are you sure you want to delete this item')
    if(conformation){
      setTodos(toDos.filter((obj) => obj.id !== id))
    }
  }


  const addItem=()=>{
    if(toDo.trim()!==''){
      const duplicate=toDos.some((obj)=>obj.text===toDo)
      if(!duplicate){
        setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])
        setTodo('')
      }
    }
  }



  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 className='whoop'>Whoop, it's ToDo 😎 👍 </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addItem} className="fas fa-location-arrow"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {

          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  setTodos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p className={obj.status ? "crossed" : " "}>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={() => deleteItem(obj.id)} className="fas fa-trash"></i>
              </div>
            </div>
          )
        })}
        {toDos.map((obj) => {
          if (obj.status) {
            return (<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
  
    </div>

  )
}

export default App


// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [toDos, setTodos] = useState([]);
//   const [toDo, setTodo] = useState('');

//   const deleteItem = (id) => {
//     setTodos(toDos.filter((obj) => obj.id !== id));
//   };

//   const addItem = () => {
//     if (toDo.trim() !== '') {
//       setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
//       setTodo(''); // Reset the input field value to an empty string
//     }
//   };

//   return (
//     <div className="app">
//       <div className="mainHeading">
//         <h1>ToDo List</h1>
//       </div>
//       <div className="subHeading">
//         <br />
//         <h2 className="whoop">Whoop, it's ToDo 😎 👍 </h2>
//       </div>
//       <div className="input">
//         <input
//           value={toDo}
//           onChange={(e) => setTodo(e.target.value)}
//           type="text"
//           placeholder="🖊️ Add item..."
//         />
//         <i onClick={addItem} className="fas fa-location-arrow"></i>
//       </div>
//       <div className="todos">
//         {toDos.map((obj) => {
//           return (
//             <div className="todo" key={obj.id}>
//               <div className="left">
//                 <input
//                   onChange={(e) => {
//                     setTodos(
//                       toDos.map((obj2) => {
//                         if (obj2.id === obj.id) {
//                           obj2.status = e.target.checked;
//                         }
//                         return obj2;
//                       })
//                     );
//                   }}
//                   checked={obj.status}
//                   type="checkbox"
//                   name=""
//                   id=""
//                 />
//                 <p className={obj.status ? 'crossed' : ' '}>{obj.text}</p>
//               </div>
//               <div className="right">
//                 <i onClick={() => deleteItem(obj.id)} className="fas fa-trash"></i>
//               </div>
//             </div>
//           );
//         })}
//         {toDos.map((obj) => {
//           if (obj.status) {
//             return <h1 key={obj.id}>{obj.text}</h1>;
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
