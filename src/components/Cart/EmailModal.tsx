import styles from "@/components/Navbar/navbar.module.scss";
import useCart from "@/helpers/Hooks/useCart";
import { multiplyAndAppendZeros } from "@/utils/multiplyAndAppendZero";
import { useRouter } from "next/navigation";
import {useState} from "react"
import { PaystackButton } from 'react-paystack'

const EmailModal = () => {

    const {emailModal, inputWrapper, paystackButton} = styles;

    const router = useRouter();

    const { totalPrice, dispatch, REDUCER_ACTIONS } = useCart();

    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY
    const amount = multiplyAndAppendZeros(totalPrice)

    const [email, setEmail] = useState<string>("")

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target
        setEmail(value)
    }

    const componentProps = {
      email,
      amount,
      publicKey: publicKey || '',
      text: "Pay Now",
      onSuccess: () => {
        dispatch({ type: REDUCER_ACTIONS.removeAll })
        router.push("/")
      },
      onClose: () => console.log("Come later"),
    };
  

  return (
    <div className={emailModal}>
        <div className={inputWrapper}>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" onChange={handleEmailChange}/>
        </div>
        <PaystackButton className={paystackButton} {...componentProps} />
    </div>
  )
}

export default EmailModal