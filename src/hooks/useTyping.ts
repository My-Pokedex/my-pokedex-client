import { useRef, useEffect } from 'react';

function useTyping() {
  const divRef = useRef<HTMLDivElement>(null);
  const contents = '로딩 중...';
  let pointer = 0;

  useEffect(() => {
    async function typing() {
      const div = divRef.current;
      let currentLetter = contents[pointer++];

      if (div) {
        div.innerHTML += currentLetter;

        if (pointer > contents.length) {
          div.textContent = '';
          pointer = 0;
        }
      }
    }

    setInterval(typing, 200);
  }, []);

  return { divRef };
}

export default useTyping;
