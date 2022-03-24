import React, { Dispatch, SetStateAction, useState } from 'react';
import { getPriceFormat } from '../pages';

interface IDiffPayComponent {
    totalPeople: number;
    totalPrice: number;
    lastPerson: number
    setPayLittlePrice: Dispatch<SetStateAction<number>>;
    setPayLittlePerson: Dispatch<SetStateAction<number>>;
}

const DiffPay = ({
    totalPeople,
    totalPrice,
    lastPerson,
    setPayLittlePrice,
    setPayLittlePerson
}: IDiffPayComponent) => {
    // 돈을 덜 내는 인원들을 선택
    const [isSelected, setIsSelected] = useState(false);

    // 돈을 덜 내는 인원들이 내는 각자의 금액
    const [individualPay, setIndividualPay] = useState(0);

    // 금액을 입력받아 individualPay state에 저장
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndividualPay(+event.currentTarget.value)
    }

    // 입력했던 금액을 focus가 옮겨졌을 때 payLittlePrice의 현재 값에 더한다.
    const onBlur = () => {
        setPayLittlePrice(current => current + individualPay)
    }

    // 마지막 인원은 선택할 수 없게 하여 계산 오류 방지
    const getPayLittlePerson = (bool: boolean) => {
        if (lastPerson !== totalPeople) {
            setIsSelected(bool);
            setPayLittlePerson(current => bool ? current + 1 : current - 1);
        }
    }

    return (
        isSelected ? (
            <div className="flex flex-col w-14 h-14">
                <button onClick={() => getPayLittlePerson(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </button>
                <input
                    type="number"
                    max={totalPeople / totalPrice}
                    className="outline-none text-center placeholder:text-xs"
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="덜내는 돈"
                />
                <p>{getPriceFormat(((totalPrice / totalPeople) - individualPay))}</p>
            </div>
        ) : (
            <div className="flex flex-col ">
                {totalPeople === lastPerson ? (
                    <div className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                ) : (
                    <button onClick={() => getPayLittlePerson(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                )}
            </div>
        )
    )
}

export default DiffPay;