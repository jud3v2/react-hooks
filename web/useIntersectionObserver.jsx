// Path: react-hooks/web/useIntersectionObserver.jsx

import React from 'react';

const useIntersectionObserver = (ref, options) => {
    const [isIntersecting, setIsIntersecting] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.unobserve(ref.current);
        };
    }, []);

    return isIntersecting;
};

export default useIntersectionObserver;

