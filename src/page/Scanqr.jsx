import React, {useState, useRef} from 'react';
import { QrReader } from 'react-qr-reader';

const Scanqr = () => {

  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] =  useState('helloworld');
  const qrRef = useRef(null);

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result);
    }
  }

  return (
    <>
    <div className="joinpage bg-lightGray flex-grow md:h-screen md:border-l-2 border-lightGray p-3 md:p-4">
      <h3>Qr Code Scan by Web Cam</h3>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setScanResultWebCam(result?.text);
            console.log("Meeting Link is:");
            console.log(result?.text);
          }

          if (error) {
            console.log(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
    </div>
    </>
  )
}

export default Scanqr