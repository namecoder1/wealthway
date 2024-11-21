'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import btc from '@/assets/media/btc.png';
import xrp from '@/assets/media/xrp.png';
import doge from '@/assets/media/doge.png';
import cro from '@/assets/media/cro.png';

const CryptoPrices = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  const symbols = ['BTC', 'XRP', 'DOGE', 'CRO']; // Simboli delle criptovalute
  const convert = 'EUR'; // Valuta in cui convertire

  const symbolToImage = {
    BTC: btc,
    XRP: xrp,
    DOGE: doge,
    CRO: cro,
  };

  const fetchCryptoPrices = async () => {
    try {
      const responses = await Promise.all(
        symbols.map(symbol =>
          fetch(`/api/crypto?symbol=${symbol}&convert=${convert}`)
        )
      );

      const dataPromises = responses.map(async (response, index) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch price for ${symbols[index]}`);
        }
        const data = await response.json();
        const priceData = data?.data[symbols[index]]?.quote[convert];
        return {
          symbol: symbols[index],
          price: priceData?.price || null,
          change24h: priceData?.percent_change_24h || null, // Estrai il rendimento giornaliero
        };
      });

      const newPrices = await Promise.all(dataPromises);
      setPrices(newPrices);
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoPrices();
    const interval = setInterval(() => {
      fetchCryptoPrices();
    }, 30000); // 30 secondi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='my-20'>
      {loading ? (
        <p>Loading...</p>
      ) : prices.length > 0 ? (
        <div className="w-full grid grid-cols-1 mx-auto sm:flex items-center justify-evenly gap-4 ">
          {prices.map(({ symbol, price, change24h }) => (
            <div key={symbol} className="w-full flex flex-col items-center justify-evenly border rounded-xl gap-3 p-5">
                <Image
                  src={symbolToImage[symbol]}
                  alt={`${symbol} logo`}
                  width={50}
                  height={50}
                  className="rounded-full mt-1"
                />
                <p className='flex items-center gap-3 sm:gap-1 justify-between sm:flex-col text-center sm:justify-start'>
									<span>
                  	{symbol}: {price !== null ? `${price.toFixed(2)} €` : 'N/A'}
									</span>
									{change24h !== null && (
										<span
											className={`text-xs ${
												change24h > 0 ? 'text-green-500' : 'text-red-500'
											}`}
										>
											{change24h > 0 ? '+' : ''}
											{change24h.toFixed(2)}% (24h)
										</span>
									)}
                </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Non riusciamo a recuperare i dati</p>
      )}
    </div>
  );
};

export default CryptoPrices;