"use client";
import { Team } from "@/utils/type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

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

  const handleTeamItemClick = () => {
    setSearchTerm("");
  };
  const teamListRef = useRef<HTMLDivElement>(null);

  const handleOutSideClick = (event: MouseEvent) => {
    if (
      teamListRef.current &&
      !teamListRef.current.contains(event.target as Node)
    ) {
      setShowFilteredBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, []);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Search Here"
        className="w-full bg-gradient-to-r from-neutral-100/5 to-black/25
    bg-transparent p-2 outline-none border-neutral-100/00 border-[1px]
    rounded-xl hover:border-blue-400 focus:border-blue-400/10 text-neutral-100 placeholder:text-neutral-100/00"
      />
      {searchTerm && filteredTeams.length > 0 && showFilteredBox && (
        <div className="absolute border-[1px] border-blue-400 hover:border-none rounded-xl left-0 w-full max-w-md bg-black/80 z-20 flex flex-col">
          {filteredTeams.slice(0, 10).map((standing, i) => (
            <Link
              href={`/team/${standing.team.id}`}
              key={standing.team.id}
              className={`p-2 text-neutral-100 ${
                i === focusedIndex ? "bg-neutral-100/40" : ""
              }`}
              onClick={handleTeamItemClick}
            >
              {standing.team.name}{" "}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
