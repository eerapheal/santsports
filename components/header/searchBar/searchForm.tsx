import { Team } from "@/utils/type";
import React, { useState } from "react";

const SearchForm = ({ teamData }: { teamData: Team[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [showFilteredBox, setShowFilteredBox] = useState(false);

  const filteredTeams = teamData.filter((team) =>
    team.team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setFocusedIndex(-1);
    setShowFilteredBox(true);
  };

  return (
    <div>
      <input
        type="text"

        placeholder="Search Here"
        className="w-full bg-gradient-to-r from-neutral-100/5 to-black/25
    bg-transparent p-2 outline-none border-neutral-100/00 border-[1px]
    rounded-xl hover:border-blue-400 focus:border-blue-400/10 text-neutral-100 placeholder:text-neutral-100/00
    "
      />
    </div>
  );
};

export default SearchForm;
