import { useRef, useState, useEffect}  from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import BGcolor from '../ui/BGcolor'
import Logo from '../ui/Logo'
import Eye from '/eye.png'
import Hidden from '/hidden.png'
import Table from './Table'

const Manager = () => {

    const [form,setForm] = useState({URL:"",username:"",password:""})
    const [passwordArray, setPasswordArray] = useState([])

    const passwordRef = useRef()
    const ref = useRef()

    const handleShowPassword = () =>{
        if(ref.current.src.includes(Eye)){
            ref.current.src=Hidden
            passwordRef.current.type="password"
        }else{
            alert("Password will be visible")
            ref.current.src=Eye
            passwordRef.current.type="text"
        }
    }

    useEffect(() => {
      let passwords = localStorage.getItem("passwords")
        if(passwords){
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])
    

    const handlechange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const savePassword = () => {
        if(form.URL.length>3 && form.username.length>3 && form.password.length>3 ){
        // setpasswordArraytakes time to update the state 
        localStorage.setItem("passwords", JSON.stringify([...passwordArray,{...form,id:uuidv4()}]))
        setPasswordArray([...passwordArray,{...form,id:uuidv4()}])
        setForm({URL:"",username:"",password:""})
        }else{
            toast('Error: Password not saved')
        }
    }

    const deletePassword = (id) => {
        const conf =  confirm("Delete password??")
        if(conf){
            localStorage.setItem("passwords",JSON.stringify(
                passwordArray.filter(items => items.id!=id)
            ))
            setPasswordArray(passwordArray.filter(items => items.id!=id))
        }
    }

    const editPassword = (id) => {
        setForm(passwordArray.filter(items => items.id ===id)[0])
        setPasswordArray(passwordArray.filter(items => items.id!=id))
    }

    return(
        <>
        <BGcolor/>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
        <ToastContainer />

        <div className="flex flex-col justify-center items-center py-4">

            <div className="text-2xl"><Logo/></div>

            <div className="description">
                <p>Your own Password Manager</p>
            </div>

            <div className="flex flex-col p-4 container mx-auto max-w-4xl gap-3 items-center">
                {/* URL  */}
                <input  type="text" name="URL" id="URL" placeholder="Enter URL" onChange={handlechange} value={form.URL} className="w-full border-2 border-green-100 rounded-2xl px-2 py-1 outline-none focus:border-green-300"/>

                <div className="w-full flex flex-col md:flex-row gap-3">

                    {/* Username  */}
                    <input  type="text" name="username" placeholder="Enter username" id="username" onChange={handlechange} value={form.username} className="w-full border-2 border-green-100 rounded-2xl px-2 py-1 outline-none focus:border-green-300"/>

                    {/* Password  */}
                    <div className="relative flex  items-center">
        
                        <input ref={passwordRef} type="password" name="password" placeholder="Enter password" id="password" onChange={handlechange} value={form.password} className="w-full   border-2 border-green-100 rounded-2xl px-2 py-1 outline-none focus:border-green-300"/>

                        <span className="absolute items-center right-2 bg-white px-2 cursor-pointer" onClick={handleShowPassword}>
                            <img ref={ref} src={Hidden} alt="show" className="h-4" />
                        </span>
                    </div>


                </div>

                <div className="bg-green-400 rounded-full px-4 py-1  
                border  border-green-500 hover:bg-green-300">
                    <div className="flex justify0center items-center ">

                        <lord-icon
                            src="https://cdn.lordicon.com/odavpkmb.json"
                            trigger="hover">
                        </lord-icon>
                        <button onClick={savePassword} >Add password</button>
                    </div>

                </div>
            </div>

            <div className='container px-2'>
            <Table passwordArray={passwordArray} toast={toast} deletePassword={deletePassword} editPassword={editPassword}/>
            </div>
        </div>
        </>
    )
}

export default Manager 