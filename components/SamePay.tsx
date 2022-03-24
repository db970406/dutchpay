import { Dispatch, SetStateAction } from 'react';

interface ISamePay {
    setPayLittlePerson: Dispatch<SetStateAction<number>>,
    setPayLittlePrice: Dispatch<SetStateAction<number>>,
    payLittlePerson: number,
    totalPeople: number,
    payLittlePrice: number,
    totalPrice: number,
}
const SamePay = ({
    setPayLittlePerson,
    setPayLittlePrice,
    payLittlePerson,
    totalPeople,
    payLittlePrice,
    totalPrice,
}: ISamePay) => {
    const typingPayLittlePerson = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayLittlePerson(+event.currentTarget.value);
    }
    const typingPayLittlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayLittlePrice(+event.currentTarget.value);
    }

    return (
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
    )
}

export default SamePay;