import React from "react";
import JoinCard from "../components/JoinCard";

//icons
import { MdAddBox as JoinCallIcon } from "react-icons/md";

const Join = () => {
  return (
    <>
      <div className="joinpage bg-lightGray flex-grow md:h-screen md:border-l-2 border-lightGray p-3 md:p-4">
        <JoinCard
          title="Join Meeting"
          desc="via invitation link"
          icon={<JoinCallIcon />}
          bgColor="bg-blue"
        />
        {/* <input type="text" value={joininglink} onChange={(e) => { setJoininglink(e.target.value) }} className="form-control" placeholder=" Link"/> */}
        {/* <Link to={`/room/${roomId}`} className="block"> */}
        {/* <button onClick={joinroomusingid}>join</button> */}
        {/* </Link> */}
      </div>
    </>
  );
};

export default Join;
