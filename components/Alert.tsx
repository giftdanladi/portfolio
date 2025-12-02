import React, { FC } from 'react'
import { FiXCircle } from 'react-icons/fi'

interface AlertProps {
    message: string
    alertState: boolean
    setAlertState: (state: boolean) => boolean | void
}

const Alert: FC<AlertProps> = ({ message, setAlertState }) => {
    return (
        <>
            <div className="alert shadow-lg mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                    <h3 className="font-bold">Notification!</h3>
                    <div className="text-xs">{message}</div>
                </div>
                <FiXCircle onClick={() => setAlertState(false)} className="cursor-pointer hover:scale-110 hover:text-red-500 transition duration-500" size={25} />
            </div>
        </>
    )
}

export default Alert