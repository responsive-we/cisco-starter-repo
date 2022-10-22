import React,{useEffect} from 'react'

const GetIp = ({setIPV4,setIPV6}) => {
    const getIPV4 = async () => {
        let response = await fetch("https://api.ipify.org", {
          method: "GET",
        });
    
        let data = await response.text();
        setIPV4(data);
      };
      const getIPV6 = async () => {
        let response = await fetch("https://api64.ipify.org", {
          method: "GET",
        });
    
        let data = await response.text();
        setIPV6(data);
      };
      useEffect(() => {
        getIPV4();
        getIPV6();
        //eslint-disable-next-line
      }, []);
  return (
    <></>
  )
}

export default GetIp
