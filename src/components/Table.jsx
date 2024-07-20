
const Table = ({passwordArray}) => {
  return (
    <>
    <h2 className="font-bold text-xl py-2">Passwords</h2>

    {passwordArray.length === 0 && <div>No passwords to show </div>}

    {passwordArray.length != 0 && 
    <table className='table-auto w-full rounded-md overflow-hidden'>

        <thead>
            <tr className='bg-green-700 text-white'>
            
                <th >URL </th>
                <th >username </th>
                <th >password </th>
            </tr>
        </thead>

        <tbody className="bg-green-100 text-center">
            {passwordArray.map((items,index)=>{
                return(
                    <>
                    <tr key={index}>
                        <td><a href={`https://${items.URL}`} target="_blank" rel="noopener noreferrer">{items.URL}</a></td>
                        <td>{items.username} </td>
                        <td>{items.password}</td>
                    </tr></>
                )
            }
            )}
        </tbody>
    </table>
    }
    </>
  )
}

export default Table