import { SignUp } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='h-screen'>
      <SignUp />
      {/* after the register, this should take us to the admin page. */}
    </div>
  );
}
