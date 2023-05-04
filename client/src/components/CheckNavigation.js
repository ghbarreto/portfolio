import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { details } from '../actions';

export const CheckNavigation = location => {
    const dispatch = useDispatch();

    const request = () => {
        const response = dispatch(details(location));
    };

    useEffect(() => {
        const timer = setTimeout(() => request());
        return () => clearTimeout(timer);
    }, []);

    return null;
};
