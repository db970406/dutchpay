import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';

export const getPriceFormat = (price: number) => {
  const trimmedPrice = Number(price.toFixed(0));
  const priceFormat = trimmedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return priceFormat;
}

const Home: NextPage = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(current => current === 3 ? 3 : current + 1)
  const prevPage = () => setPage(current => current === 1 ? 1 : current - 1)

  const [totalPeople, setTotalPeople] = useState(2);

  const [totalPrice, setTotalPrice] = useState(0);

  const [isExistLittlePay, setIsExistLittlePay] = useState(false);
  const [payLittlePerson, setPayLittlePerson] = useState(0);
  const [payLittlePrice, setPayLittlePrice] = useState(0);
  const [isSamePay, setIsSamePay] = useState(true);

  //const [countedPricePerPerson, setCountedPricePerPerson] = useState(0)
  //`${getPriceFormat(getPricePerPerson())}`

  const getLittlePricePerPerson = () => {
    const littlePrice = (totalPrice / totalPeople) - payLittlePrice;
    return littlePrice < 0 ? 0 : littlePrice;
  }
  const getPricePerPerson = () => {
    if (isExistLittlePay) {
      if (isSamePay) {
        return (totalPrice - (getLittlePricePerPerson() * payLittlePerson)) / (totalPeople - payLittlePerson);
      } else {
        const pay = totalPrice - (((totalPrice / totalPeople) * payLittlePerson) - payLittlePrice)

        return pay / (totalPeople - payLittlePerson)
      }
    } else {
      return totalPrice / totalPeople;
    }
  }

  const getIsExistLittlePay = (bool: boolean) => {
    if (bool) {
      setIsExistLittlePay(true)
    } else {
      setIsExistLittlePay(false);
      setPayLittlePerson(0);
      setPayLittlePrice(0);
      nextPage();
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <button
        onClick={prevPage}
        className="text-fuchsia-300 hover:text-fuchsia-500 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="mx-16">
        {page === 1 ? (
          <FirstPage
            countPeople={totalPeople}
            setCountPeople={setTotalPeople}
            nextPage={nextPage}
          />
        ) : null}
        {page === 2 ? (
          <SecondPage
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            nextPage={nextPage}
          />
        ) : null}
        {page === 3 ? (
          <ThirdPage
            getIsExistLittlePay={getIsExistLittlePay}
            totalPeople={totalPeople}
            isExistLittlePay={isExistLittlePay}
            payLittlePerson={payLittlePerson}
            setPayLittlePerson={setPayLittlePerson}
            setPayLittlePrice={setPayLittlePrice}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            payLittlePrice={payLittlePrice}
            isSamePay={isSamePay}
            setIsSamePay={setIsSamePay}
          />
        ) : null}

      </div>

      {totalPrice ? (
        <div className="fixed bottom-0 flex flex-col justify-between bg-fuchsia-200 w-full text-center">
          {isExistLittlePay && isSamePay ? (
            <div className="bg-yellow-100 py-2">
              <p
                className="text-lg"
              >
                덜 내도 되는 {`${payLittlePerson}`}명은 각 {`${getPriceFormat(getLittlePricePerPerson())}`}원
              </p>
            </div>
          ) : null}
          <div className="py-2">
            <p
              className="text-lg"
            >
              {`${totalPeople - payLittlePerson}`}명은 각 {`${getPriceFormat(getPricePerPerson())}`}원 입니다.
            </p>
          </div>
        </div>
      ) : null}
      <button
        onClick={nextPage}
        className="text-fuchsia-300 hover:text-fuchsia-500 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default Home
