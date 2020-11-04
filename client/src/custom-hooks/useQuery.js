import { useLocation } from 'react-router-dom';

export const useQuery = () => {
    return Object.fromEntries(new URLSearchParams(useLocation().search));
}
