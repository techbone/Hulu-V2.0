import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItems from "./HeaderItems";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl items-center h-auto">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        alt="hulu"
        className="object-contain "
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
