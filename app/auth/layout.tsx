import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    const session = await getServerSession(authOptions);
    if (session) {
      redirect("/dashboard");
    }
    return (
      <main className="h-full bg-[#111827] overflow-auto">
          {children}
      </main>
     );
  }
   
  export default AuthLayout;