import React from "react";

const useComponentDidUpdate = (callback, condition) => {
    const mounted = React.useRef(false);
    React.useEffect(() => {
        if (mounted.current) callback();
        else mounted.current = true;
    }, condition);
};

return useComponentDidUpdate;