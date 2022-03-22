import { Dispatch, SetStateAction } from 'react';
import Button from './Button';

interface IThirdPageComponent {
    getIsExistLittlePay: (bool: boolean) => void;
    isExistLittlePay: boolean;
    payLittlePerson: number;
    totalPeople: number;
    setPayLittlePerson: Dispatch<SetStateAction<number>>;
    setPayLittlePrice: Dispatch<SetStateAction<number>>;
    payLittlePrice: number;
    totalPrice: number;
}

const ThirdPage = ({
    getIsExistLittlePay,
    isExistLittlePay,
    payLittlePerson,
    setPayLittlePerson,
    totalPeople,
    setPayLittlePrice,
    payLittlePrice,
    totalPrice,
}: IThirdPageComponent) => {
    const typingPayLittlePerson = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayLittlePerson(+event.currentTarget.value);
    }
    const typingPayLittlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayLittlePrice(+event.currentTarget.value);
    }
    return (
        <div className="flex flex-col justify-center text-center items-center space-y-6 ">
            <p>더치페이 인원 중 돈을 덜 내도 되는 분이 있나요?</p>
            <div className="flex justify-around w-full space-x-4">
                <Button
                    onClick={() => getIsExistLittlePay(true)}
                    name={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                />
                <Button
                    onClick={() => getIsExistLittlePay(false)}
                    name={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                />
            </div>
            {isExistLittlePay ? (
                <div>
                    <input
                        type="number"
                        className='outline-none text-right w-10'
                        onChange={typingPayLittlePerson}
                        value={payLittlePerson}
                        max={totalPeople - 1}
                    />
                    <span>명이 각</span>
                    <input
                        type="number"
                        className='outline-none text-right w-16'
                        onChange={typingPayLittlePrice}
                        value={payLittlePrice}
                        max={totalPrice}
                    />
                    <span>원씩 덜 내도 되요</span>
                </div>
            ) : null}
        </div>
    )
}

export default ThirdPage;