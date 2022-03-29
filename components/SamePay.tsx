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

    // 돈을 덜 내는 인원들의 수를 입력받아 payLittlePerson state에 저장
    const typingPayLittlePerson = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayLittlePerson(+event.currentTarget.value);
    }

    // 돈을 덜 내는 인원들의 금액을 입력받아 payLittlePrice state에 저장
    const typingPayLittlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayLittlePrice(+event.currentTarget.value);
    }

    return (
        <div>
            <input
                type="number"
                className='w-10 text-right outline-none'
                onChange={typingPayLittlePerson}
                max={totalPeople - 1}
                placeholder="0"
            />
            <span>명이 각</span>
            <input
                type="number"
                className='w-16 text-right outline-none'
                onChange={typingPayLittlePrice}
                max={totalPrice}
                placeholder="0"
            />
            <span>원씩 덜 내요</span>
        </div>
    )
}

export default SamePay;