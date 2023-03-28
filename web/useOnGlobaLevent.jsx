import React from 'react';

const useOnGlobalEvent = (type, callback, options) => {
    const listener = React.useRef(null);
    const previousProps = React.useRef({ type, options });

    React.useEffect(() => {
        const { type: previousType, options: previousOptions } = previousProps;

        if (listener.current) {
            window.removeEventListener(
                previousType,
                listener.current,
                previousOptions
            );
        }

        listener.current = window.addEventListener(type, callback, options);
        previousProps.current = { type, options };

        return () => {
            window.removeEventListener(type, listener.current, options);
        };
    }, [callback, type, options]);
};

export default useOnGlobalEvent;