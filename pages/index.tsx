import type { NextPage } from 'next'
import React, { useState } from 'react'
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';
import ThirdPage from '../components/ThirdPage';

export const getPriceFormat = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Home: NextPage = () => {
  const [totalPeople, setTotalPeople] = useState(2);
  const [isDestineTotalPeople, setIsDestineTotalPeople] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);
  const [isDestineTotalPrice, setIsDestineTotalPrice] = useState(false);


  const [isExistLittlePay, setIsExistLittlePay] = useState(false);
  const [payLittlePerson, setPayLittlePerson] = useState(0);
  const [payLittlePrice, setPayLittlePrice] = useState(0);

  const typingPayLittlePerson = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayLittlePerson(+event.currentTarget.value);
  }

  const typingPayLittlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayLittlePrice(+event.currentTarget.value);
  }

  const getLittlePricePerPerson = () => {
    const littlePrice = Number((totalPrice / totalPeople).toFixed(0)) - payLittlePrice;
    return littlePrice < 0 ? 0 : Math.round(littlePrice / 10) * 10;
  }
  const getPricePerPerson = () => {
    if (isExistLittlePay) {
      return Math.round((totalPrice - (getLittlePricePerPerson() * payLittlePerson)) / (totalPeople - payLittlePerson) / 10) * 10;
    } else {
      return Math.round((totalPrice / totalPeople) / 10) * 10;
    }
  }

  const getIsExistLittlePay = (bool: boolean) => {
    if (bool) {
      setIsExistLittlePay(true)
    } else {
      setIsExistLittlePay(false);
      setPayLittlePerson(0);
      setPayLittlePrice(0);
    }
  }


  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4 px-10 py-16">
      <FirstPage
        countPeople={totalPeople}
        setCountPeople={setTotalPeople}
        setIsDestineTotalPeople={setIsDestineTotalPeople}
      />
      {isDestineTotalPeople ? (
        <>
          <SecondPage
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            setIsDestineTotalPrice={setIsDestineTotalPrice}
          />
          {isDestineTotalPrice ? (
            <ThirdPage
              getIsExistLittlePay={getIsExistLittlePay}
            />
          ) : null}

          {isExistLittlePay ? (
            <div className='flex'>
              <input
                type="number"
                className='outline-none text-right w-6'
                onChange={typingPayLittlePerson}
                value={payLittlePerson}
                max={totalPeople - 1}
              />
              <p>명이 각</p>
              <input
                type="number"
                className='outline-none text-right w-20'
                onChange={typingPayLittlePrice}
                value={payLittlePrice}
                max={totalPrice}
              />
              <p>원씩 덜 내도 되요</p>
            </div>
          ) : null}

          {totalPrice ? (
            <div className="fixed bottom-0 flex flex-col justify-between bg-fuchsia-200 w-full text-center">
              {isExistLittlePay ? (
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
                  {`${totalPeople - payLittlePerson}`}명은 각 {`${getPriceFormat(totalPeople === 0 ? totalPrice : getPricePerPerson())}`}원 입니다.
                </p>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  )
}

export default Home
