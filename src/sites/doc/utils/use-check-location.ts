import { useLocation } from 'react-router-dom'

export const useCheckLocation = () => {
  const { pathname } = useLocation()
  return pathname.indexOf('guide') === 1
}
