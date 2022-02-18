import * as React from 'react';
import { Image } from './styles';
import useData from '../../hooks/useData'
import { IItem } from '../../interfaces/Item';

interface ICheckButtonProps {
    value: IItem;
    toggle: any
}

const CheckButton: React.FunctionComponent<ICheckButtonProps> = ({ value, toggle }) => {
    const {changeState, getItem} = useData();

    const item = getItem(value._id)
    return ( <Image onClick={() => changeState(item._id)} src={item.done ? "../../assets/icons/checked.png" : "../../assets/icons/not-checked.png"} />);
};

export default CheckButton;
