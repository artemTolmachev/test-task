import React, { useEffect, useState } from 'react'
import { UserData, ApiResponse, UseContactsReturnType} from '../../type/data';

export const useContacts = (): UseContactsReturnType =>  {


    const [data, setData] = useState<UserData[]>([]);
    const [iserror, setError] = useState<boolean>(false);
    const [isload, setIsload] = useState<boolean>(true);

    useEffect(() => {
        
            const  getContacts = async () => {
                try{
                    setIsload(false)
                    let respons = await fetch('https://randomuser.me/api/?results=10');
                    const {results, error}: ApiResponse = await respons.json()
                  
                    if(error){
                      throw new Error(error)
                    }

                    setData(results)
                    setError(false)
                }catch(error){
                  setError(true)
                }finally{
                  setIsload(false)
                }
              }
              getContacts()   
    },[])
      
  return {
    data,
    iserror,
    isload
  }

}