// Path: react-hooks/hooks/useSet.jsx

import React from 'react';

const useSet = initialValue => {
    const [set, setSet] = React.useState(new Set(initialValue));

    const actions = React.useMemo(
        () => ({
            add: item => setSet(prevSet => new Set([...prevSet, item])),
            remove: item =>
                setSet(prevSet => new Set([...prevSet].filter(i => i !== item))),
            clear: () => setSet(new Set()),
        }),
        [setSet]
    );

    return [set, actions];
};

export default useSet;