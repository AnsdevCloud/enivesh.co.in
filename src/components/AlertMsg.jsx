import { Alert } from '@mui/material';
import React, { useEffect } from 'react'

const AlertMsg = ({ message, type, state, variant }) => {
    const [alertMsg, setAlertMsg] = useState({
        type: "",
        message: "",
        state: false,
        variant: 'standard'

    })
    useEffect(() => {
        setAlertMsg({
            type: type,
            message: message,
            state: state,
            variant: variant
        })
        setTimeout(() => {
            setAlertMsg({
                type: "",
                message: "",
                state: false,
                variant: variant
            })
        }, 5000);
    }, [state])
    return (
        <>
            {alertMsg?.state && <Alert variant={alertMsg?.variant ? alertMsg?.variant : "standard"} severity={alertMsg?.type} >{alertMsg?.message}</Alert>}
        </>
    )
}

export default AlertMsg