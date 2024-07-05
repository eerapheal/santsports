import { Team } from "@/utils/type";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchForm = ({ teamData }: { teamData: Team[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [showFilteredBox, setShowFilteredBox] = useState(false);

  let router = useRouter();

  const filteredTeams = teamData.filter((team) =>
    team.team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setFocusedIndex(-1);
    setShowFilteredBox(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      let length = 0;
      if (filteredTeams.length > 10) {
        length = 10;
      } else {
        length = filteredTeams.length;
      }
      setFocusedIndex((prevIndex) =>
        prevIndex < length - 1 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === "Enter") {
      if (focusedIndex !== -1) {
        const teamId = filteredTeams[focusedIndex].team.id;
        router.push(`/team/${teamId}`);
      }
    }
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
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
