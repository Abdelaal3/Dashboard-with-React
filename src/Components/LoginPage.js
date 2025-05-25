import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function LoginPage() {
  const { isSignedIn, user } = useUser();

  

  if (!isSignedIn) {
    return (
      <div>
        <h2>Sign In</h2>
        <Link to="/sign-in">
          <Button variant="contained"> Sign in</Button>
        </Link>

        <h2> Or Register </h2>
        <Link to="/sign-up">
          <Button variant="contained"> Sign up</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2> Hello {user.fullName},</h2>
      <p>Your Email: {user.primaryEmailAddress.emailAddress}</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
