import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
export default function Home() {
  return (
    <div>
      <Button>Subscribe</Button>
      <LoginLink
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
