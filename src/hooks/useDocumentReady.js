import { useEffect, useState } from 'react'

export const useDocumentReady = () => {
  const [isDocumentReady, setIsDocumentReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
        setIsDocumentReady(true);
    }
  }, []);

    return {
        isDocumentReady
  }
}
