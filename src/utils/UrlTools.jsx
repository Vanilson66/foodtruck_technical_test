import { useLocation } from 'react-router-dom';

export const getUrlParams = (paramName) => {
      const { search } = useLocation();
      const queryParams = new URLSearchParams(search);
      const urlText = queryParams.get(paramName);
      return urlText
}