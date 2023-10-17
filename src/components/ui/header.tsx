"use client";
import { Button } from "./button";
import { Card } from "./card";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";

function Header() {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-4 flex flex-col gap-2">
            {status == "authenticated" && data?.user && (
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data?.user?.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas compras</p>
                </div>
              </div>
            )}
            <Separator />
          </div>

          <div className="mt-2 flex flex-col gap-3">
            {status == "unauthenticated" && (
              <Button
                variant={"outline"}
                className="w-full justify-start gap-2"
                onClick={handleLoginClick}
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            {status == "authenticated" && (
              <Button
                variant={"outline"}
                className="w-full justify-start gap-2"
                onClick={handleLogoutClick}
              >
                <LogOutIcon size={16} />
                Logout
              </Button>
            )}

            <Button variant={"outline"} className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Início
            </Button>

            <Button variant={"outline"} className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant={"outline"} className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size={"icon"} variant={"outline"}>
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
}

export default Header;
