import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between h-auto items-center m-5">
      {/* header items */}
      <div className="flex flex-grow justify-evenly max-w-2xl">
      <HeaderItem title="HOME" Icon={HomeIcon} />
      <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
      <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
      <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
      <HeaderItem title="SEARCH" Icon={SearchIcon} />
      <HeaderItem title="ACCOUNT" Icon={UserIcon} />
     
      </div>
      {/* logo  */}
      <Image
        src="https://links.papareact.com/ua6"
        className="object-contain"
        width="200"
        height="80"
      />
    </header>
  );
}

export default Header;
