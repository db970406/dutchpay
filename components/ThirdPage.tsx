import Button from './Button';

interface IThirdPage {
    getIsExistLittlePay: (bool: boolean) => void;
}

const ThirdPage = ({ getIsExistLittlePay }: IThirdPage) => {
    return (
        <div className="flex flex-col justify-center items-center space-y-4 ">
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
        </div>
    )
}

export default ThirdPage;