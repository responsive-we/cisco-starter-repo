import React,{useState} from 'react'
import Card from './Card'
import Banner from './Banner'
import GetIp from './GetIp';
import Pylon from './Pylon';

const Exhibit = () => {
	const [IPV4, setIPV4] = useState(null);
	const [IPV6, setIPV6] = useState(null);
	const [latency, setLatency] = useState(null);
  return (
    <>
	<Banner/>
	<Card IPV4={IPV4} IPV6={IPV6} latency={latency} />
	<GetIp setIPV4={setIPV4} setIPV6={setIPV6}/>
	<Pylon setLatency={setLatency}/>
   </>
  )
}

export default Exhibit
