import { Dispatch, SetStateAction, useEffect } from 'react';
import Button from './Button';
import DiffPay from './DiffPay';
import SamePay from './SamePay';

interface IThirdPageComponent {
    getIsExistLittlePay: (bool: boolean) => void;
    isExistLittlePay: boolean;
    totalPeople: number;
    setPayLittlePerson: Dispatch<SetStateAction<number>>;
    setPayLittlePrice: Dispatch<SetStateAction<number>>;
    totalPrice: number;
    setTotalPrice: Dispatch<SetStateAction<number>>;
    isSamePay: boolean;
    setIsSamePay: Dispatch<SetStateAction<boolean>>;
}

const ThirdPage = ({
    getIsExistLittlePay,
    isExistLittlePay,
    setPayLittlePerson,
    totalPeople,
    setPayLittlePrice,
    totalPrice,
    isSamePay,
    setIsSamePay
}: IThirdPageComponent) => {

    // 적게 내는 인원들 간 내야하는 금액이 같은가?
    const getIsSamePay = (bool: boolean) => {
        if (bool) {
            // isSamePay가 false일 때만 작동
            return isSamePay ? null : setIsSamePay(true)

        } else {
            // isSamePay가 true일 때만 작동
            if (isSamePay) {
                setIsSamePay(false);
                setPayLittlePerson(0);
                setPayLittlePrice(0);
            }
        }
    }

    useEffect(() => {
        setIsSamePay(true)
    }, [])
    return (
        <div className="flex flex-col items-center justify-center space-y-16 text-center ">
            <p className="text-center break-words">더치페이 인원 중 돈을 덜 내도 되는 분이 있나요?</p>
            <div className="flex justify-around w-full space-x-4">
                <Button
                    onClick={() => getIsExistLittlePay(true)}
                    name={
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                />
                <Button
                    onClick={() => getIsExistLittlePay(false)}
                    name={
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                />
            </div>
            {isExistLittlePay ? (
                <div className="space-y-12">
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
                            setPayLittlePerson={setPayLittlePerson}
                            setPayLittlePrice={setPayLittlePrice}
                            totalPeople={totalPeople}
                            totalPrice={totalPrice}
                        />
                    ) : (
                        <>
                            <div className='flex flex-wrap justify-center gap-x-8 gap-y-16'>
                                {Array.from({ length: totalPeople }).map((_, index) =>
                                    <DiffPay
                                        key={index}
                                        totalPrice={totalPrice}
                                        lastPerson={index + 1}
                                        totalPeople={totalPeople}
                                        setPayLittlePrice={setPayLittlePrice}
                                        setPayLittlePerson={setPayLittlePerson}
                                    />
                                )}
                            </div>
                            <div>
                                <p>반드시 덜 내는 인원만 선택해주세요!</p>
                                <p>계산 오류의 원인이 됩니다.</p>
                            </div>
                        </>
                    )}
                </div>
            ) : null}
        </div>
    )
}

export default ThirdPage;