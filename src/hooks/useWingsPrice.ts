import { useEffect, useState, useCallback } from 'react'
import { AbiItem } from 'web3-utils'
import { getWeb3NoAccount } from 'utils/web3'
import UniV2LPABI from 'constants/abis/UniV2LP.json'
import BigNumber from 'bignumber.js'
import useBlock from './useBlock'

const web3 = getWeb3NoAccount()
const WingsBusdPairAddress = '0xFBa740304f3fc39d0e79703a5D7788E13f877DC0'

const WingsBusdPairContract = new web3.eth.Contract((UniV2LPABI as unknown) as AbiItem, WingsBusdPairAddress)

const useWingsPrice = () => {  
  const [price, setPrice] = useState(0)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
      try {
        const bnbObj = await WingsBusdPairContract.methods.getReserves().call();
        if (!new BigNumber(bnbObj._reserve0).eq(new BigNumber(0))) {
          const wingsPrice = new BigNumber(bnbObj._reserve1).div(bnbObj._reserve0)
          // const wingsObj = await bnbRastaPairContract.methods.getReserves().call();
          // const finalPrice = new BigNumber(wingsObj.reserve0).div(wingsObj.reserve1).times(bnbPrice);
          if (!wingsPrice.isEqualTo(price)) {
            setPrice(wingsPrice.toNumber())
          }
        }
      } catch (e) { 
        setPrice(0)
       }
  }, [price]);

  useEffect(() => {
    if (WingsBusdPairContract) {
      fetchBalance()
    }
  }, [setPrice, fetchBalance, block]);

  return price;
}

export default useWingsPrice

