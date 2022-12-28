import { useState } from "react"
import { utils } from "ethers"
export const useWalletConnection = () => {
    const [walletDetails, setWalletDetails] = useState(null)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    const getWalletBalance = (accountNumber) =>{
        window.ethereum.request({
            method:'eth_getBalance', 
            params: [accountNumber, 'latest']
        }).then(balance => {
            console.log(balance) 
            console.log(utils.formatEther(balance))
            setWalletDetails({
                address: accountNumber,
                balance: utils.formatEther(balance)
            })
        })
        .catch((e)=> alert(e?.message))
    }
    const setWalletConnection = () => {
        if(window.ethereum){
            window.ethereum.request({method:'eth_requestAccounts'})
            .then(res=>{
            console.log(res) 
            getWalletBalance(res?.[0])
        })
        .catch((e)=> alert(e?.message))
        }
        else{
            alert("Please install metamask browser extension!!")
        }
    }
    return { walletDetails, setWalletConnection}
}