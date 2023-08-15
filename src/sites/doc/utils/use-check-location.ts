import { useLocation } from 'react-router-dom'

export const useCheckLocation = () => {
  const { pathname } = useLocation()
  return pathname.indexOf('guide') === 1
}

export const useHasPathName = (name: string) => {
  const { pathname } = useLocation()
  return pathname.indexOf(name) === 1
}
