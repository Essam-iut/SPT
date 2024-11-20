"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react/cjs/react.production.min";
export default function Home() {
  return (
    useEffect(() => {
      redirect('/api/auth/login?post_login_redirect_url=/dashboard')
    },[]);
    <div>
     
    </div>
  );
}
