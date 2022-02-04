import { ReactElement } from 'react';
interface Props {
    error: string;
    action: (error: string) => void;
    color?: string;
}
export declare function Message({ error, action, color }: Props): ReactElement;
export {};
