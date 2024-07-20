
import GithubMarkWhite from '/github-mark-white.svg'
import GithubLogoWhite from '/GitHub_Logo_White.png'

const Github = () => {
    return(
        <button className="flex border-2 bg-green-800 rounded-full p-1">
            <img src={GithubMarkWhite} alt="Github Logo" className="h-6" />
            <img src={GithubLogoWhite} alt="Github Logo" className="h-6" />
        </button>
    )
}


export default Github