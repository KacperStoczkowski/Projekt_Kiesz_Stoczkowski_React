import React from "react";
import RoomListItem from "../RoomListItem";

const RoomsList = ({rooms = []}) => {
	return (
		<ul className="rooms-list">
			{rooms.map((room) => {
				return (
					<li key={room.id}>
						<RoomListItem room={room}/>
					</li>
				);
			})}
		</ul>
	)
};

export default RoomsList;