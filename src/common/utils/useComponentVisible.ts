import { useState, useEffect, useRef } from "react";

export const useComponentVisible = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement | HTMLFormElement>(null);

  const handleComponentVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (e: Event) => {
    const div = componentRef.current;
    // 모달 창이 열려있고 이벤트 발생 지점이 form의 요소가 아닐 때만 모달을 꺼주도록 함
    if (div && !div.contains(e.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // 검색창 내외부 감지 함수
    // 여기서 formRef가 아닌 document에 이벤트리스너를 달아준 것은 외부 영역이 form의 여집합이기 때문
    window.addEventListener("click", handleClickOutside);
    return () => {
      // mousedown 이벤트리스너를 제거해줌으로서 메모리 누수 차단
      window.removeEventListener("click", handleClickOutside);
    };
  }, [componentRef]);

  return { componentRef, isVisible, setIsVisible, handleComponentVisible };
};
