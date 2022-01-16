import React, {useEffect, useState} from "react";
import MainPage from "../../../components/MainPage";
import roomsData from '../../../assets/data/rooms.json';
import RoomsList from "../../../components/RoomsList";

const Rooms = () => {
	const [searchValue, setSearchValue] = useState('');
	const [rooms, setRooms] = useState(roomsData.rooms);

	const handleSearchChange = (event) => {
		const value = event.target.value;
		setSearchValue(value);
	};

	useEffect(() => {
		setRooms(roomsData.rooms.filter((room) => room.title.includes(searchValue)))
	}, [searchValue]);

	return (
		<MainPage isSearchVisible onSearchChange={handleSearchChange}>
			<RoomsList rooms={rooms} />
		</MainPage>
	)
};

export default Rooms;