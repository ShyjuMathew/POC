import { useState } from 'react';

type UseToggleReturnType = [boolean, () => void];

const useToggle = (initialState: boolean = false): UseToggleReturnType => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => setState(prevState => !prevState);

  return [state, toggle];
};

export default useToggle;
