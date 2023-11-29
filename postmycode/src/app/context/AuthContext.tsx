import { createContext, useState } from "react";

export const AuthContext = createContext({ isAuthenticated: false });

export function AuthGaurd() {
  const [isAuthenticated, setAuthentication] = useState(true);
}
