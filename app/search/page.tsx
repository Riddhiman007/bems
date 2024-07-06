"use client";
import { Search } from "@/_components/Search";
import { SearchIcon } from "@nextui-org/shared-icons";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";
import React from "react";

export default function SearchPage() {
  return (
    <div className="container">
      <Search
        onChange={() => {}}
        size="md"
        aria-label="Search"
        onSubmit={() => {}}
        fullWidth
        classNames={{ inputWrapper: "w-[-webkit-fill-available]", input: "border-none" }}
        placeholder="Type to search"
        variant="faded"
        startContent={<SearchIcon />}
        type="search"
      />
      <Listbox classNames={{ list: "list-none" }}>
        <ListboxSection title="Relevant Searches...">
          <ListboxItem key="dfsfsdf">dfsdfasdf</ListboxItem>
        </ListboxSection>
      </Listbox>
    </div>
  );
}
