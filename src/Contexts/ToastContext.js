import { createContext, useContext, useState } from "react";
import Toast from "../Components/Toast";

export const ToastContext = createContext(null)






export const ToastProvider = ({ children }) => {


    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('green')

    const ShowHideSnack = (message, status = 'success') => {
        setOpen(true)
        setMessage(message)
        setColor(status)
        setTimeout(() => {
            setOpen(false)
        }, 2000);
    }
    return (
        <ToastContext.Provider value={{ ShowHideSnack }}>
            <Toast open={open} message={message} status={color} />
            {children}
        </ToastContext.Provider>

    )
}

export const useToast = () => {
    return (
        useContext(ToastContext)
    )
}
