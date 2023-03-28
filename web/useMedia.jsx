// Path: react-hooks/hooks/useMedia.jsx
import React from 'react';

const useMedia = (query, defaultState = false) => {
    const [state, setState] = React.useState(defaultState);

    React.useEffect(() => {
        let mounted = true;
        const mql = window.matchMedia(query);
        const onChange = () => {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };

        mql.addListener(onChange);
        setState(mql.matches);

        return () => {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);

    return state;
};

export default useMedia;
