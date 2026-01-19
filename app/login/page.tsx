"use client";

import { useActionState } from "react";
import { login } from "../actions";
import Window from "../components/Window";
import { Lock } from "lucide-react";
import { useEffect } from "react";

// Helper for useActionState
const initialState = { error: "" };

export default function LoginPage() {

    const [state, formAction, isPending] = useActionState(login, initialState);

    useEffect(() => {
        // Prevent body scroll
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <main className="retro-grid w-full h-screen relative flex items-center justify-center font-[family-name:var(--font-vt323)]">

            <Window
                id="login"
                title="Admin Login"
                isOpen={true}
                onClose={() => { }} // Cannot close
                zIndex={10}
                onFocus={() => { }}
                initialPosition={{ x: 0, y: 0 }} // Center handled by CSS in main
            >
                <div className="p-4 w-full max-w-sm mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-[#2D2D2D] rounded-full flex items-center justify-center border-4 border-[var(--window-border)]">
                            <Lock size={40} className="text-[#F4E06D]" />
                        </div>
                    </div>

                    <h2 className="text-2xl text-center font-bold mb-6">SYSTEM ACCESS</h2>

                    <form action={formAction} className="space-y-4">
                        <div>
                            <label className="block text-lg mb-1">Username</label>
                            <input
                                type="text"
                                name="username"
                                className="w-full p-2 text-lg border-2 border-[var(--window-border)] bg-white focus:outline-none focus:bg-[#F4E06D]/20"
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label className="block text-lg mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full p-2 text-lg border-2 border-[var(--window-border)] bg-white focus:outline-none focus:bg-[#F4E06D]/20"
                            />
                        </div>

                        {state?.error && (
                            <div className="bg-red-100 text-red-600 p-2 border border-red-400 text-center">
                                {state.error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full py-2 bg-[var(--retro-green)] text-white text-xl font-bold border-2 border-[var(--window-border)] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] active:translate-y-[4px] active:shadow-none transition-all mt-4 disabled:opacity-50"
                        >
                            {isPending ? "ACCESSING..." : "ENTER"}
                        </button>
                    </form>
                </div>
            </Window>

            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-5 z-0 flex items-center justify-center">
                <h1 className="text-[20vw] font-bold">LOCKED</h1>
            </div>
        </main>
    );
}
