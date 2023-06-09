// Path: react-hooks/web/useIsomorphicEffect.jsx

import React from 'react';

const useIsomorphicEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default useIsomorphicEffect;
