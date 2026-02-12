import { useState } from "react";
function TrafficLight() {
    const [color, setColor] = useState('green');
    return (

        <div className=' d-flex align-items-center flex-column'>
            <div style={{ width: '20px', height: '50px' }} className='bg-dark' ></div>

            <div style={{ width: '100px' }} className='bg-dark py-3 d-flex flex-column align-items-center rounded-5'>

                <div onClick={()  => setColor("red") }
                 className={`bg-danger light ${color == 'red' ? 'on' : ''}`} >

                 </div>
                <div onClick={()  => setColor("yellow") }
                className={`bg-warning light ${color == 'yellow' ? 'on' : ''}`} >

                </div>
                <div onClick={()  => setColor("green") }
                className={`bg-success light ${color == 'green' ? 'on' : ''}`} >

                </div>
            </div>
        </div>
        

    );
}

export default TrafficLight