import { SignIn } from "@clerk/nextjs";

export default function  SingIn() {

    return (<div className="flex justify-center items-center ">
        
        <SignIn/>
    </div>)
}