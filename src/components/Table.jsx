import Copy from "../ui/Copy"
import Delete from "/delete.png"

const Table = ({passwordArray,toast,deletePassword,editPassword}) => {

    const  copyText = (text) => {
        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        navigator.clipboard.writeText(text)
    }

  return (
    <>
    <div className="container text-center">
        <h2 className="font-bold text-2xl py-2">Passwords</h2>
        {passwordArray.length === 0 && <div>No passwords to show </div>}

        {passwordArray.length != 0 &&
        <table className='table-auto mb-2 w-full rounded-md overflow-hidden'>
            <thead>
                <tr className='bg-green-700 text-white'>
        
                    <th >URL </th>
                    <th >username </th>
                    <th >password </th>
                    <th >Actions </th>
                </tr>
            </thead>
            <tbody className="bg-green-100 ">
                {passwordArray.map((items,index)=>{
                    // Since using map, we donot use return (<></>) and key is necessary
                    return <tr key={index}>
                            <td>
                                <div className="flex justify-center gap-2">
                                    <a href={`https://${items.URL}`} target="_blank" rel="noopener noreferrer" >
                                    {window.innerWidth<500?items.URL.substring(0,5)+".."
                                    :items.URL}</a>
                                    <span onClick={() => copyText(items.URL)}><Copy/></span>{/*() = > to prevent the function from running when the page loads */}
                                </div>
                            </td>
                                
                            <td><div className="flex justify-center gap-2">
                                {window.innerWidth<500?items.username.substring(0,5)+".."
                                    :items.username}
                                <span onClick={() => copyText(items.username)}><Copy/></span>
                                </div></td>

                            <td><div className="flex justify-center gap-2 ">
                                {window.innerWidth<500?items.password.substring(0,5)+".."
                                    :items.password}
                                <span onClick={() => copyText(items.password)}><Copy/></span>
                                </div></td>

                            <td><div className="flex justify-center items-center gap-2">
                                <span className="cursor-pointer" onClick={()=>editPassword(items.id)}>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/wuvorxbv.json"
                                        trigger="hover"
                                        style={{width:"25px",height:"25px"}} >
                                    </lord-icon>
                                </span>
                                <img src={Delete} alt="delete" onClick={() => deletePassword(items.id)} className="h-5 cursor-pointer"/>
                            </div>
                            </td>
                        </tr>
                }
                )}
            </tbody>
        </table>
        }
    </div>
    </>
  )
}

export default Table