import React, { Dispatch, SetStateAction, useState } from 'react';
import { getPriceFormat } from '../pages';

interface IDiffPayComponent {
    totalPeople: number;
    totalPrice: number;
    setPayLittlePrice: Dispatch<SetStateAction<number>>;
    setPayLittlePerson: Dispatch<SetStateAction<number>>;
}

const DiffPay = ({
    totalPeople,
    totalPrice,
    setPayLittlePrice,
    setPayLittlePerson
}: IDiffPayComponent) => {

    const [individualPay, setIndividualPay] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndividualPay(+event.currentTarget.value)
    }
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        // 이 쪽이 타이핑때마다 문제임 예를 들어 1700원을 치면 1700원이 입력되는 게 아니라 1+17+170 이렇게 되는 거 같음
        setPayLittlePrice(current => current + individualPay)
    }

    const getPayLittlePerson = (bool: boolean) => {
        setIsSelected(bool);
        setPayLittlePerson(current => bool ? current + 1 : current - 1)
    }

    return (
        isSelected ? (
            <div className="flex flex-col w-12 h-12">
                <button onClick={() => getPayLittlePerson(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </button>
                <input
                    type="number"
                    max={totalPeople / totalPrice}
                    className="outline-none text-center"
                    value={individualPay}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <p>{getPriceFormat(((totalPrice / totalPeople) - individualPay))}</p>
            </div>
        ) : (
            <button onClick={() => getPayLittlePerson(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </button>
        )
    )
}

export default DiffPay;