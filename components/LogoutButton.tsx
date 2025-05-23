"use client"; // Mark this as a Client Component

import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            // Make a POST request to the logout API route to clear the session cookie
            const response = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                router.push("/sign-in"); // Redirect to sign-in page after successful logout
            } else {
                console.error("Logout failed:", await response.json());
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="btn-disconnect px-7 py-3 text-sm font-bold leading-5 text-white transition-colors duration-150 rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-destructive-200 hover:bg-destructive-200 min-w-28"
        >
            Logout
        </button>
    );
};

export default LogoutButton;