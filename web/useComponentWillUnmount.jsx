// Path: react-hooks/web/useComponentWillUnmount.jsx
 
import React from 'react';

const useComponentWillUnmount = onUnmountHandler => {
    React.useEffect(
        () => () => {
            onUnmountHandler();
        },
        []
    );
};

export default useComponentWillUnmount;