import { Dispatch, ReactElement, SetStateAction } from 'react';
interface Props {
    listError: string[];
    setListError: Dispatch<SetStateAction<string[]>>;
    className?: string;
    color?: string;
}
export declare function Error({ listError, setListError, className, color }: Props): ReactElement;
export {};
