import { createSignal, useTransition } from "solid-js";
import {nanoid} from 'nanoid'

function App(){
  const [id, setId] = createSignal("");
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [user, setUsers] = createSignal([]);
  const [buttonName, setButtonName] = createSignal([]);

  const submitUser = (id) => {
    if(id) {
      setButtonName("Add User");
      setUsers(users().filter((user) => user.id !==id));
      setUsers([...useTransition(), { id: id(), name: name(), email: email(), password: password() }]);
      setId("");
      setName("");
      setEmail("");
      setPassword("");
    }else{
      setUsers([...useTransition(), {id: nanoid(8), name: name(), email: email(), password: password() }]);
      setId("");
      setName("");
      setEmail("");
      setPassword("");  
       } 
     };
  
  return(

    <>
      <div class="relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8">
  <table class="border-collapse table-auto w-full text-sm">
    <thead>
      <tr>
        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Id</th>
        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
        <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Email</th>
        <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Password</th>
        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Edit</th>
        <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Delete</th>
      </tr>
    </thead>
    <tbody class="bg-white dark:bg-slate-800">
      <tr>
        <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Malcolm Lockyer</td>
        <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">1961</td>
      </tr>
    </tbody>
   </table>
  </div>
      </div>
    </>

  );
  }

  export default App;













  

// import Task from './task';

// function App() {
//   return (

//            <>
//            <Task/>
//            </>

//   );
// } 
      
// export default App;














// import logo from './logo.svg';
// import styles from './App.module.css';


    // <div class={styles.App}>
    //   <header class={styles.header}>
    //     <img src={logo} class={styles.logo} alt="logo" />
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to reload.
    //     </p>
    //     <a
    //       class={styles.link}
    //       href="https://github.com/solidjs/solid"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Solid
    //     </a>
    //   </header>
    // </div>

    // export default App;