import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// mui material ui
import { Alert, AlertTitle, IconButton, Link } from "@mui/material";

// icons
import CloseIcon from "@mui/icons-material/Close";

const AlertMessage = ({ title, text, alertType, id, timeLimit, link }) => {
    // dispatching instances
    const dispatch = useDispatch();

    // remove the alert from the state after timeLimit
    useEffect(() => {
        const timer = setTimeout(() => {
          dispatch({
            type: "REMOVE_FROM_ALERT_LIST",
            payloads: {
              currentAlertId: id,
            },
          });
        }, timeLimit);
    
        return () => {
          clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // remove the alert from the state with action
    const closeAlert = (event) => {
        event.preventDafault();
        dispatch({
            type: "REMOVE_FROM_ALERT_LIST",
            payloads: {
                currentAlertId: id,
            }
        })
    }

    return (
        <Link href={link} underline={"none"} target="_blank">
            <Alert
                variant="filled"
                severity={alertType}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={closeAlert}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 1 }}
            >
                <AlertTitle sx={{ textTransform: "capitalize" }}>
                    {title}
                </AlertTitle>
                {text}
            </Alert>
        </Link>
    )
}

export default AlertMessage