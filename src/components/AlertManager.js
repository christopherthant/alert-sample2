import React from 'react';
import { useSelector } from 'react-redux';

import AlertMessage from "./AlertMessage";

const AlertManager = () => {
    // instance
    // get all the active alerts from the redux state
    const alertList = useSelector((state) =>
                        state.alertList.items
    );
  return (
    <>
        {alertList.map((item, index) => (
        <div key={index}>
            <AlertMessage
                id={item.alertId}
                alertType={item.alertType}
                title={item.alertTitle}
                text={item.text}
                timeLimit={item.timeLimit}
                link={item.link}            
            />
        </div>
        ))}
    </>
  );
};

export default AlertManager