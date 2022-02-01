import { ReactElement } from 'react';
interface Props {
    error: string;
    removeError: (error: string) => void;
}
export declare function Message({ error, removeError }: Props): ReactElement;
export {};
