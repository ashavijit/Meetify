import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JoinCard = ({ icon, title, desc, bgColor, route }) => {
  let navigate = useNavigate();
  const [joininglink, setJoininglink] = useState("");
  const [roomId, setroomId] = useState("");

  const joinroomusingid = () => {
    setroomId(joininglink.slice(joininglink.indexOf("/room/")));
    navigate(`${roomId}`);
  };

  return (
    <div
      className={`flex p-3 md:p-6 rounded md:rounded-2xl md:h-52 md:w-auto w-full group ${bgColor}`}
    >
      <div className="flex md:h-full items-center md:flex-col md:items-start md:justify-between gap-2">
        <div
          className={`text-white text-2xl aspect-square md:h-12 flex items-center justify-center md:text-3xl 
          md:bg-slate-400/40 group-hover:text- group-hover:scale-110 duration-200 md:p-2 md:border-[1px]
           md:border-slate-300/40  rounded-lg`}
        >
          {icon}
        </div>
        <div className="flex-shrink-0 md:mb-5">
          <p className="text-white md:mb-1 text-sm md:text-2xl md:font-bold">{title}</p>
          <p className="text-slate-200 text-sm font-thin hidden md:block">{desc}</p>
        </div>
      </div>
      <div className="bg-dark"></div>
      <div className="text-white">
        <p className="py-2">Enter the Invite Link</p>
        <input
          type="text"
          value={joininglink}
          onChange={(e) => {
            setJoininglink(e.target.value);
          }}
          className="wd form-control text-black px-2 py-1"
          placeholder="Link Here..!"
        />
        <br />
        <button
          className="my-11 px-4 py-1 rounded-lg border border-danger"
          onClick={joinroomusingid}
        >
          Join Meeting
        </button>
        <Link to="/scanqr">
          <button className="my-11 mx-2 px-4 py-1 rounded-lg border border-danger">
            Scan Invite QR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinCard;
