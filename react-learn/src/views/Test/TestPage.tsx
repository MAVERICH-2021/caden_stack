import GoogleCalendar from "../Calendar/GoogleCalendar";
import SuspenseFallback from "../SuspenseFallback/SuspenseFallback";

const TestPage = () => {
    return ( 
        <div className=" w-screen h-screen">
            {/* <GoogleCalendar/> */}
            <SuspenseFallback/>
        </div>
     );
}
 
export default TestPage;