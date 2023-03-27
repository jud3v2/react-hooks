import { useEffect, useCallback, useState } from 'react';

const useCopyToClipBoard = (text) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipBoard = useCallback(() => {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
        });
    }, [text]);

    useEffect(() => {
        if(isCopied) {
            const timeOutId = setTimeout(() => {
                setIsCopied(false);
            }, 2000);

            return () => {
                clearTimeout(timeOutId);
            }
        }
    }, [isCopied]);

    return { isCopied, copyToClipBoard };
}

export default useCopyToClipBoard;