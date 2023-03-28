// Path:

import React from 'react';

const useToggler = initialState => {
    const [value, setValue] = React.useState(initialState);

    const toggleValue = React.useCallback(() => setValue(prev => !prev), []);

    return [value, toggleValue];
};

export default useToggler;