
import { useWalletConnection } from "../hooks/walletConnection";
const WalletConnect = () =>{
    const {  walletDetails, setWalletConnection } = useWalletConnection()
    const handleSetConnection = () =>{
        setWalletConnection()
    }
    return (
        <div className="container justify-center flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex flex-col items-center justify-end h-64 w-96 bg-white p-4 border border-gray-300 mb-4 rounded">
            <div className="flex flex-col items-center m-5" >
              { walletDetails && walletDetails?.address 
              ? (<div className="flex flex-col items-center justify-between gap-5">
                    <span className="text-5xl" >Balance : {walletDetails.balance}</span>
                    <p>({walletDetails?.address})</p>
                </div>) 
              : <h3>Not connected to wallet</h3> 
            }
            </div>
            <button
                type="submit"
                disabled = { walletDetails && walletDetails?.address }
                onClick={handleSetConnection}
                className={`bg-blue-500 p-2 text-white w-full rounded font-bold ${walletDetails?.address && "bg-blue-200"}`}
            > Connect to wallet</button>
            </div>
        </div>
    )
}

export default WalletConnect;