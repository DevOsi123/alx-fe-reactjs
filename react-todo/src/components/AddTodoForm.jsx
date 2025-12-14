// import React, { useState } from 'react';

// const AddTodoForm = ({ addTodo }) => {
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim()) {
//       addTodo(text);
//       setText('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         placeholder="Add a new todo"
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default AddTodoForm;



import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === '') return;
    addTodo(todoText);
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
