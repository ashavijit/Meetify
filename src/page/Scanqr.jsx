import React, {useState , useEffect} from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from "react-router-dom";

const Scanqr = () => {

  let navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [scanResultWebCam, setScanResultWebCam] =  useState("");

  useEffect(() => {
    const indxx = scanResultWebCam.indexOf("/room/");
    if(indxx == -1) {
      setRoomId("");
    } else {
      setRoomId(scanResultWebCam.slice(indxx));
    }
  },[scanResultWebCam]);

  const joinroomusingid = () => {
    navigate(`${roomId}`); 
  }

  return (
    <>
    <div className="joinpage text-white bg-lightGray flex-grow md:h-screen md:border-l-2 border-lightGray p-3 md:p-4">
      <h3 >Qr Code Scan by Web Cam</h3>


      <div className="boxx md:border-1-2 border">
      <QrReader
        onResult={async (result, error) => {
          if (result) {
            const ress = result?.text;
            setScanResultWebCam(ress);
          }

          if (error) {
            // console.log(error);
          }
        }}
        style={{ width: "100%", height: "100%"}}
      />
      </div>

      
      {scanResultWebCam == "" ? <h3>Scan Your Invite QR Align the QR to the camera</h3> : <h3>Meeting Invite Link is:<br /> {scanResultWebCam}</h3>}
      {roomId == "" ? <button className="my-11 px-4 bg-red py-1 rounded-lg border border-danger" disabled>Scan the QR</button> : <button className="my-11 px-4 py-1 bg-blue rounded-lg border border-danger" onClick={joinroomusingid}>Join Meeting</button>}
    </div>
    </>
  )
}

export default Scanqr