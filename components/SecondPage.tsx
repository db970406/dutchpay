import { Dispatch, SetStateAction } from 'react';
import { getPriceFormat } from '../pages';
import Button from './Button';

interface ISecondPageComponent {
    totalPrice: number;
    setTotalPrice: Dispatch<SetStateAction<number>>;
    nextPage: () => void;
}

const SecondPage = ({ totalPrice, setTotalPrice, nextPage }: ISecondPageComponent) => {
    const typingTotalPrice = (event: React.ChangeEvent<HTMLInputElement>) => setTotalPrice(+event.currentTarget.value);

    return (

        <div
            className="flex flex-col space-y-4"
        >
            <p>총금액을 얼마나 지불하셨나요?</p>
            <input
                type="number"
                className='
                        outline-none text-center py-2 border-b-[3px] border-b-fuchsia-200
                        focus:border-b-fuchsia-400
                    '
                onChange={typingTotalPrice}
                defaultValue={totalPrice}
            />

            <Button
                onClick={nextPage}
                name={`${getPriceFormat(totalPrice)} 원`}
            />
        </div>
    )
}

export default SecondPage;