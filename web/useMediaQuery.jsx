// Path: react-hooks/web/useMediaQuery.jsx

import React from 'react';

const useMediaQuery = (query, whenTrue, whenFalse) => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined')
        return whenFalse;

    const mediaQuery = window.matchMedia(query);
    const [match, setMatch] = React.useState(!!mediaQuery.matches);

    React.useEffect(() => {
        const handler = () => setMatch(!!mediaQuery.matches);
        mediaQuery.addListener(handler);
        return () => mediaQuery.removeListener(handler);
    }, []);

    return match ? whenTrue : whenFalse;
};

export default useMediaQuery;