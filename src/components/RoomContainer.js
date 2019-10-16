// <<<<<<<<<< There are multiple ways of passing context between functional components (the latest being the use of... 
//  "useContext" via hooks, which seems to be the easiest), below are
// 2 traditional  ways of doing so within this application... We're passing the different contextual pieces
// of data for sorting through the different room types (e.g. size, price, ammeneties, etc.) >>>>>>>

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<!!!!!!!!!!!!!!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<!!!!!!!!!!!!!!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// <<<<< Option 2 for passing context between functional components... Which is "High-Order-Components"(HOC), 
// which basically means we're using high order functions that are passing functions into functions... 
// below is passing "RoomCOntainer" into "withRoomsConsumer"... That then is passing contextual data

import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "../components/Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// <<<< Option 1 for passing context in-between functional components >>>>

// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "../components/Loading";

// export default function RoomsContainer() {
//   return (
//   <RoomConsumer>
//     {value => {
//       const { loading, sortedRooms, rooms } = value;
//     if(loading) {
//         return <Loading />
//     }
//       return (
//         <div>
//           Hello from rooms container
//           <RoomsFilter rooms={rooms} />
//           <RoomsList rooms={sortedRooms} />
//         </div>
//       );
//     }}
//   </RoomConsumer>
//   )
// };
