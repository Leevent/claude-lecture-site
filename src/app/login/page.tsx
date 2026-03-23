"use client";

import { supabase, isAuthEnabled } from "@/lib/supabase";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";

export default function LoginPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const authEnabled = isAuthEnabled();

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  const handleLogin = async () => {
    if (!supabase) return;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });
  };

  const handleLogout = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setUser(null);
  };

  if (loading) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="animate-pulse text-muted">載入中...</div>
      </div>
    );
  }

  if (!authEnabled) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl border border-card-border p-8 text-center">
          <div className="text-4xl mb-4">&#128274;</div>
          <h1 className="text-2xl font-bold mb-3">登入功能即將開放</h1>
          <p className="text-sm text-muted mb-6">
            Google 登入功能設定中，開放後將可以：
          </p>
          <ul className="text-sm text-left space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-primary">&#9679;</span>
              儲存你的 Prompt 建構器設定
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">&#9679;</span>
              追蹤學習進度
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">&#9679;</span>
              存取限定學習資源
            </li>
          </ul>
          <p className="text-xs text-muted">
            目前所有學習資源與工具均可免費使用
          </p>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl border border-card-border p-8 text-center">
          <div className="text-4xl mb-4">&#128075;</div>
          <h1 className="text-2xl font-bold mb-2">
            {user.user_metadata?.full_name || "學員"}，你好！
          </h1>
          <p className="text-sm text-muted mb-6">{user.email}</p>
          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-xl border border-card-border text-sm hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
          >
            登出
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="bg-white rounded-2xl border border-card-border p-8 text-center">
        <div className="text-4xl mb-4">&#128218;</div>
        <h1 className="text-2xl font-bold mb-3">登入學習平台</h1>
        <p className="text-sm text-muted mb-8">
          使用 Google 帳號登入，存取完整學習資源
        </p>
        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border border-card-border rounded-xl hover:bg-background hover:shadow-sm transition-all font-medium text-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          使用 Google 帳號登入
        </button>
      </div>
    </div>
  );
}
