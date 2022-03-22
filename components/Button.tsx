import { Dispatch, SetStateAction } from 'react';
import { getPriceFormat } from '../pages';

interface IButtonComponent {
    onClick: Dispatch<SetStateAction<unknown>>;
    name: string | JSX.Element;
}

const Button = ({ onClick, name }: IButtonComponent) => {
    return (
        <button
            className="
                    flex justify-center items-center w-full rounded-lg bg-fuchsia-300 hover:bg-fuchsia-400 transition
                    py-2 text-lg text-white
                "
            onClick={onClick}
        >
            {typeof name === 'number' ? getPriceFormat(name) : name}
        </button>
    )
}
export default Button;