import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import { MdOutlineQrCodeScanner as QRCodeIcon } from "react-icons/md";

const Scanqr = () => {
  let navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");

  useEffect(() => {
    const indxx = scanResultWebCam.indexOf("/room/");
    if (indxx == -1) {
      setRoomId("");
    } else {
      setRoomId(scanResultWebCam.slice(indxx));
    }
  }, [scanResultWebCam]);

  const joinroomusingid = () => {
    navigate(`${roomId}`);
  };
  return (
    <>
      <div className="joinpage bg-lightGray flex-grow md:h-screen md:border-l-2 border-lightGray p-3 md:p-4">
        <div
          className={`joinpage flex p-3 md:p-6 rounded md:rounded-2xl md:h-72 md:w-auto w-full group bg-blue`}
        >
          <div className="flex md:h-full items-center md:flex-col md:items-start md:justify-between gap-2">
            <div
              className={`text-white text-2xl aspect-square md:h-20 flex items-center justify-center md:text-3xl 
            md:bg-slate-400/40 group-hover:text- group-hover:scale-110 duration-200 md:p-2 md:border-[1px]
            md:border-slate-300/40  rounded-lg`}
            >
              <QRCodeIcon />
            </div>
            <div className="flex-shrink-0 md:mb-5">
              <p className="text-white md:mb-1 text-sm md:text-3xl md:font-bold">Scan QR-Code</p>
              <p className="text-slate-200 text-sm font-thin hidden md:block">and join Meeting</p>
            </div>
          </div>

          <div className="bg-dark"></div>

          <div className="boxx">
            <QrReader
              onResult={(result, error) => {
                if (result) {
                  const ress = result?.text;
                  setScanResultWebCam(ress);
                }

                if (error) {
                  // console.log(error);
                }
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="bg-dark"></div>

          <div className="text-white flex md:h-full items-center md:flex-col md:items-start md:justify-between gap-2">
            {scanResultWebCam == "" ? (
              <h3 className="my-6">
                <div className="md:text-2xl md:font-bold">Scan Your Invite QR</div>
                <div className="md:text-lg">Align the QR to the camera</div>
              </h3>
            ) : (
              <h3 className="my-6">
                <div className="md:text-2xl md:font-bold">Meeting Invite Link is:</div>
                <div className="md:text-lg">{scanResultWebCam}</div>
              </h3>
            )}
            <br />
            {roomId == "" ? (
              <button
                className="md:text-xl px-4 bg-red py-1 rounded-lg border border-danger my-7"
                disabled
              >
                Scan the QR
              </button>
            ) : (
              <button
                className="md:text-xl px-4 bg-emerald-400 py-1 rounded-lg border border-danger my-7"
                onClick={joinroomusingid}
              >
                Join Meeting
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Scanqr;
