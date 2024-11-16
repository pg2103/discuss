import { auth } from "@/auth";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Avatar,
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger
    

} from "@nextui-org/react";
import * as actions from '@/actions';
import Link from "next/link";
export default async function Header() {
    const session =await auth();
    
    let authContent:React.ReactNode;
    if(session?.user){
        authContent=
        <Popover placement="left">
            <PopoverTrigger>
                <Avatar src={session.user.image||''}/>
            </PopoverTrigger>
            <PopoverContent>
                <div className="p-4">
                    <form action={actions.signOut}>
                        <Button type="submit">Sign Out</Button>
                    </form>
                </div>
            </PopoverContent>
        </Popover>
            
    }else{
        authContent=<>
            <NavbarItem>
                <form action={actions.signIn}>
                    <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
                </form>
            </NavbarItem>
            <NavbarItem>
                <form action={actions.signIn}>
                    <Button type="submit" color="primary" variant="flat">Sign Up</Button>
                </form>
          </NavbarItem>
        </> 
    }

    return(
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">
                    Discuss
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input/>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                    {authContent}
            </NavbarContent>
        </Navbar>
    )
}