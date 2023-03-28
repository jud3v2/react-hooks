// Path:

import React from 'react';

const useDefault = (defaultState, initialState) => {
    const [value, setValue] = React.useState(initialState);
    const isValueEmpty = value === undefined || value === null;
    return [isValueEmpty ? defaultState : value, setValue];
};

export default useDefault;