// getToken.js
"use client";

function getToken() {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return token;
  }
  return null;
}

export default function TokenComponent() {
  const token = getToken();
  // Do something with the token, possibly setting it in a global state or context
}
