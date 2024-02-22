import { SignUp } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='h-screen py-8 text-center'>
      <div className='m-auto inline-block'>
        <SignUp />
        {/* after the register, this should take us to the admin page. */}
      </div>
    </div>
  );
}
