import { Dispatch, ReactElement, SetStateAction } from 'react';
interface Props {
    listError: string[];
    setListError: Dispatch<SetStateAction<string[]>>;
    className?: string;
}
export declare function Error({ listError, setListError, className }: Props): ReactElement;
export {};
