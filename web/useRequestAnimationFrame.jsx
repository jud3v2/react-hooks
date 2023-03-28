import React from "react";

const useRequestAnimationFrame = callback => {
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();

    const animate = time => {
        if (previousTimeRef.current) callback(time - previousTimeRef.current);
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);
};

return useRequestAnimationFrame;

