import { Dispatch, ReactElement, SetStateAction } from 'react';
interface Props {
    listError: string[];
    setListError: Dispatch<SetStateAction<string[]>>;
}
export declare function Error({ listError, setListError }: Props): ReactElement;
export {};
