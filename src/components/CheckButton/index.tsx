import * as React from 'react';
import { Image } from './styles';


interface ICheckButtonProps {
    value: boolean;
    toggle: any
}

const CheckButton: React.FunctionComponent<ICheckButtonProps> = ({ value, toggle }) => {
    return (
        <button onClick={toggle}>
            <Image src={value ? "../../assets/icons/checked.png" : "../../assets/icons/not-checked.png"} />
        </button>
        
    );
};

export default CheckButton;
