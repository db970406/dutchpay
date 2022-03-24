import { Dispatch, SetStateAction, useEffect } from 'react';
import Button from './Button';
import DiffPay from './DiffPay';
import SamePay from './SamePay';

interface IThirdPageComponent {
    getIsExistLittlePay: (bool: boolean) => void;
    isExistLittlePay: boolean;
    payLittlePerson: number;
    totalPeople: number;
    setPayLittlePerson: Dispatch<SetStateAction<number>>;
    setPayLittlePrice: Dispatch<SetStateAction<number>>;
    payLittlePrice: number;
    totalPrice: number;
    setTotalPrice: Dispatch<SetStateAction<number>>;
    isSamePay: boolean;
    setIsSamePay: Dispatch<SetStateAction<boolean>>;
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
    isSamePay,
    setIsSamePay
}: IThirdPageComponent) => {
    const getIsSamePay = (bool: boolean) => {
        if (bool) {
            setIsSamePay(true)
        } else {
            setIsSamePay(false);
            setPayLittlePerson(0);
            setPayLittlePrice(0);
        }
    }

    useEffect(() => {
        setIsSamePay(true)
    }, [])
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
                <>
                    <p>덜 내도 되는 금액이 </p>
                    <div className="flex justify-around w-full space-x-4">
                        <Button
                            onClick={() => getIsSamePay(true)}
                            name="같은 경우"
                        />
                        <Button
                            onClick={() => getIsSamePay(false)}
                            name="다른 경우"
                        />
                    </div>
                    {isSamePay ? (
                        <SamePay
                            payLittlePerson={payLittlePerson}
                            payLittlePrice={payLittlePrice}
                            setPayLittlePerson={setPayLittlePerson}
                            setPayLittlePrice={setPayLittlePrice}
                            totalPeople={totalPeople}
                            totalPrice={totalPrice}
                        />
                    ) : (
                        <div className='flex flex-wrap gap-x-4 gap-y-16 justify-center'>
                            {Array.from({ length: totalPeople }).map((_, index) =>
                                <DiffPay
                                    key={index}
                                    totalPrice={totalPrice}
                                    totalPeople={totalPeople}
                                    setPayLittlePrice={setPayLittlePrice}
                                    setPayLittlePerson={setPayLittlePerson}
                                />
                            )}
                        </div>
                    )}
                </>
            ) : null}

        </div>
    )
}

export default ThirdPage;