import { Dispatch, SetStateAction } from 'react';
import Button from './Button';

interface IFirstPageComponent {
    countPeople: number;
    setCountPeople: Dispatch<SetStateAction<number>>;
    nextPage: () => void;
}

const FirstPage = ({ countPeople, setCountPeople, nextPage }: IFirstPageComponent) => {
    return (
        <div className="flex flex-col space-y-4">
            <p>총 몇 명이신가요?</p>
            <div
                className="flex flex-col space-y-3"
            >
                <div className="flex flex-row space-x-7 justify-center">
                    <button onClick={() => setCountPeople(current => current === 20 ? 20 : ++current)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </button>
                    <button onClick={() => setCountPeople(current => current === 2 ? 2 : --current)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
                        </svg>
                    </button>
                </div>
                <Button
                    onClick={nextPage}
                    name={`${countPeople} 명`}
                />
            </div>
        </div>
    )
}

export default FirstPage;